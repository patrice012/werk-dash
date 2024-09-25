/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Job from "@/models/job.model";
import { apiGET } from "@/api/api";
import { SkeletonCard } from "./Skeleton";
import { debounce } from "lodash";
import { Card } from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSeletedItem] = useState<number>();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayTerm, setDisplayTerm] = useState("");
  const [currentPage] = useState(1);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [NumberPage, setPage] = useState(12);

  //
  const { isPending, data, refetch } = useQuery({
    queryKey: ["repoDjata"],
    queryFn: async () =>
      await apiGET({
        uri: `/jobs/search/?searchValue=${displayTerm}&page=${currentPage}&limit=${NumberPage}`,
      }),
  });

  const fetchData = async () => {
    try {
      setPage((prevPage: number) => prevPage + 12);
      console.log("text");
    } catch (error) {
      setError("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = useCallback(
    debounce((term) => {
      setDisplayTerm(term);
    }, 500),
    []
  );

  useEffect(() => {
    refetch();
  }, [displayTerm, refetch, NumberPage]);

  //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  //
  const handleSelectItem = (item: Job, idx: number) => {
    setSeletedItem(idx);
    // Passer les données de l'élément sélectionné à la page de détails
    navigate(`/job/${item._id}`, { state: { selectedItem: item } });
  };

  return (
    <div className="flex flex-col w-full gap-[30px] px-[15px] md:px-[20px] pb-[30px] scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full">
      {/*  */}
      <InfiniteScroll
        dataLength={NumberPage}
        next={fetchData}
        hasMore={true} // Replace with a condition based on your data source
        loader={
          <div
            className={`grid ${"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3"} gap-[20px] mt-[24px]`}>
            {Array.from({ length: 3 }).map((_e, idx: number) => {
              return <SkeletonCard key={idx} />;
            })}
          </div>
        }
        endMessage={<p>No more data to load.</p>}>
        <div ref={scrollRef} className="grid grid-cols-3 gap-5 items-start">
          {/* Première div - affichée uniquement au-dessus de 1024px */}
          <div
            className={`grid ${"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3"} gap-[20px] `}>
            {isPending &&
              Array.from({ length: 9 }).map((_e, idx: number) => {
                return <SkeletonCard key={idx} />;
              })}
            {data &&
              data.data?.map((item: Job, idx: number) => {
                const selected = selectedItem == idx;
                return (
                  <Card
                    job={item}
                    isSelected={selected}
                    key={idx}
                    onPress={() => handleSelectItem(item, idx)}
                  />
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
