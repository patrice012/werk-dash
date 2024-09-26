/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Job from "@/models/job.model";
import { apiPOST } from "@/api/api";
import { SkeletonCard } from "./Skeleton";
import { Card } from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { SidebarContent } from "./Sidebar";
import { useFilter } from "@/context/filterContext";

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSeletedItem] = useState<number>();
  // const [searchTerm, setSearchTerm] = useState("");

  const [currentPage] = useState(1);
  const navigate = useNavigate();
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [NumberPage, setPage] = useState(12);

  const { jobTilte, jobLocation, sidebarFilter } = useFilter();

  console.log(jobTilte, jobLocation);

  //
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["repoDjata", jobTilte, jobLocation, sidebarFilter],
    refetchOnWindowFocus: false,
    queryFn: async () =>
      await apiPOST({
        uri: `jobs/filter/?page=${currentPage}&limit=${NumberPage}`,
        data: { searchValue: jobTilte, country: jobLocation },
      }),
  });

  console.log(data)

  const fetchData = async () => {
    try {
      setPage((prevPage: number) => prevPage + 12);
      console.log(error);
    } catch (error) {
      setError("");
      console.log(error, "error fetchData");
    } finally {
      setIsLoading(false);
      console.log(IsLoading);
    }
  };

  useEffect(() => {
    refetch();
    console.log("test");
  }, [refetch, NumberPage]);

  //
  const handleSelectItem = (item: Job, idx: number) => {
    setSeletedItem(idx);
    navigate(`/job/${item._id}`, { state: { selectedItem: item } });
  };

  return (
    <div className="px-4 sm:px-5 w-full">
      <div className="xl:hidden mb-6">
        <SidebarContent />
      </div>

      <div className="flex flex-col w-full gap-[30px] pb-[30px] scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full">
        {/*  */}
        <InfiniteScroll
          dataLength={NumberPage}
          next={fetchData}
          hasMore={data && data.data.length != 0} // Replace with a condition based on your data source
          loader={
            <div
              className={`grid ${"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3"} gap-[20px] mt-[24px] w-full`}>
              {Array.from({ length: 3 }).map((_e, idx: number) => {
                return <SkeletonCard key={idx} />;
              })}
            </div>
          }
          endMessage={<p></p>}>
          <div
            ref={scrollRef}
            className="grid grid-cols-3 gap-5 items-start w-full">
            {/* Première div - affichée uniquement au-dessus de 1024px */}
            <div
              className={`grid ${"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3"} gap-[20px] `}>
              {isLoading &&
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
              {data && data.data.length == 0 && (
                <span>NO data found for this search</span>
              )}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
