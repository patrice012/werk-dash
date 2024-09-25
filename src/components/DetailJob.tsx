import { apiGET } from "@/api/api";
import { VITE_API_QUERY_LIMIT } from "@/helpers/constants";
import Job from "@/models/job.model";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card";
import { debounce } from "lodash";
import { useRef, useState, useCallback, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { SkeletonCard } from "./Skeleton";

export default function DetailJob() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSeletedItem] = useState<number>();
  const [displayTerm, setDisplayTerm] = useState("");
  const [currentPage] = useState(1);
  //
  const { isPending, data, refetch } = useQuery({
    queryKey: ["repoDjata"],
    queryFn: async () =>
      await apiGET({
        uri: `/jobs/search/?searchValue=${displayTerm}&page=${currentPage}&limit=${VITE_API_QUERY_LIMIT}`,
      }),
    // queryFn: async () => await apiGET({ uri: "/jobs" }),
  });

  const handleSearch = useCallback(
    debounce((term) => {
      setDisplayTerm(term);
    }, 500), // Debounced to execute 500ms after the user stops typing
    []
  );

  useEffect(() => {
    refetch();
  }, [displayTerm, refetch]);

  //
  const handleSelectItem = (item: number) => {
    scrollRef.current?.scrollTo({ top: 0 });
    setSeletedItem(item);
  };

  return (
    <div className="bg-[#f0f5fa] p-[15px] md:p-[30px]">
      <div ref={scrollRef} className="grid grid-cols-3 gap-5 items-start">
        {/* Première div - affichée uniquement au-dessus de 1024px */}
        <div
          className={`grid ${"grid-rows-1"} gap-[20px] ${
            selectedItem != undefined && "hidden lg:grid"
          }`}>
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
                  onPress={() => handleSelectItem(idx)}
                />
              );
            })}
        </div>

        {/* Div détails - occupe toute la largeur sous 1024px */}
        <div
          className={`${
            selectedItem != undefined ? "sticky" : "hidden"
          }  top-[20px] col-span-3 lg:col-span-2 lg:max-h-max bg-[#fff] rounded-[16px] p-[15px] lg:px-[64px] lg:py-[48px] w-full max-w-full`}>
          <div className="flex flex-col gap-3">
            <div className="w-full flex justify-between">
              <h1 className="font-[800] text-[#303533] text-[32px]">
                UI/UX Designer {selectedItem}
              </h1>
              <div className="flex gap-[8px]">
                <div className="bg-[#f1e3ff] px-[5px] py-[3px] h-[30px] text-[#7744aa] font-semibold rounded-[4px]">
                  FullTime
                </div>
                <div className="bg-[#e4fff1] px-[5px] py-[3px] h-[30px]  text-[#4db06a] font-semibold rounded-[4px]">
                  Hybrid
                </div>
                <div className="bg-[#ffede3] px-[5px] py-[3px] h-[30px]  text-[#a97442] font-semibold rounded-[4px]">
                  2-4 Years
                </div>
              </div>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              aliquid dignissimos quia officia illum saepe. Sunt rerum
              perferendis, est nulla molestiae repudiandae commodi ex obcaecati
              aspernatur, inventore dolores, eum tempore.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              aliquid dignissimos quia officia illum saepe. Sunt rerum
              perferendis, est nulla molestiae repudiandae commodi ex obcaecati
              aspernatur, inventore dolores, eum tempore.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              aliquid dignissimos quia officia illum saepe. Sunt rerum
              perferendis, est nulla molestiae repudiandae commodi ex obcaecati
              aspernatur, inventore dolores, eum tempore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
