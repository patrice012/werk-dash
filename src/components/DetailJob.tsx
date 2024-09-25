// ... autres imports
import { apiGET } from "@/api/api";
import { VITE_API_QUERY_LIMIT } from "@/helpers/constants";
import Job from "@/models/job.model";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./Card";
import { debounce } from "lodash";
import { useRef, useState, useCallback, useEffect } from "react";
import { SkeletonCard } from "./Skeleton";
import { useLocation } from "react-router-dom";

export default function DetailJob() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [displayTerm, setDisplayTerm] = useState("");
  const [currentPage] = useState(1);

  const { isPending, data, refetch } = useQuery({
    queryKey: ["repoDjata"],
    queryFn: async () =>
      await apiGET({
        uri: `/jobs/search/?searchValue=${displayTerm}&page=${currentPage}&limit=${VITE_API_QUERY_LIMIT}`,
      }),
  });

  const handleSearch = useCallback(
    debounce((term) => {
      setDisplayTerm(term);
    }, 500),
    []
  );

  useEffect(() => {
    refetch();
  }, [displayTerm, refetch]);

  const handleSelectItem = (item: Job) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedJob(item);
  };

  const location = useLocation();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    if (location.state?.selectedItem) {
      setSelectedJob(location.state.selectedItem);
      window.scrollTo({ top: 0 });
    }
  }, [location.state]);

  return (
    <div  className="bg-[#f0f5fa] p-[15px] md:p-[30px]">
      <div ref={scrollRef} className="grid grid-cols-3 gap-5 items-start">
        {/* Première div - affichée uniquement au-dessus de 1024px */}
        <div
          className={`grid ${"grid-rows-1"} gap-[20px] ${
            selectedJob != undefined && "hidden lg:grid"
          }`}>
          {isPending &&
            Array.from({ length: 9 }).map((_e, idx: number) => {
              return <SkeletonCard key={idx} />;
            })}

          {data && data.data?.length > 0 && (
            <>
              {/* Affichez l'élément sélectionné en premier s'il existe */}
              {selectedJob && (
                <Card
                  job={selectedJob}
                  isSelected={true}
                  key={selectedJob.jobTitle}
                  onPress={() => handleSelectItem(selectedJob)}
                />
              )}

              {data.data
                .filter((item: Job) => item.jobTitle !== selectedJob?.jobTitle) // Filtrer l'élément sélectionné
                .map((item: Job, idx: number) => (
                  <Card
                    job={item}
                    isSelected={false}
                    key={idx}
                    onPress={() => handleSelectItem(item)}
                  />
                ))}
            </>
          )}
        </div>

        {/* Div détails - occupe toute la largeur sous 1024px */}
        <div
          className={`${
             selectedJob?.jobTitle ? "sticky top-[20px]" : "hidden"
          }  top-[20px] col-span-3 lg:col-span-2 lg:max-h-max bg-[#fff] rounded-[16px] p-[15px] lg:px-[64px] lg:py-[48px] w-full max-w-full`}>
          <div className="flex flex-col gap-3">
            <div className="grid w-full grid-cols-[auto_1fr_auto]  gap-[24px] items-center">
              <div className="overflow-hidden">
                <h1 className="font-[800] text-[#303533] text-[32px] truncate">
                  {selectedJob?.jobTitle}
                </h1>
              </div>

              <div className="flex gap-[8px] w-[300px]  ">
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
