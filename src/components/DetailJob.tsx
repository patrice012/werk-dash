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
import { Separator } from "./ui/separator";
import { useNavigate } from "react-router-dom";

export default function DetailJob() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [displayTerm, setDisplayTerm] = useState("");
  const [currentPage] = useState(1);
  const navigate = useNavigate();

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
    navigate(`/job/${item._id}`, { state: { selectedItem: item } });
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
    <div className="bg-[#f0f5fa] p-[15px] md:p-[30px] ">
      <div ref={scrollRef} className="grid grid-cols-3 gap-5 items-start  ">
        {/* Première div - affichée uniquement au-dessus de 1024px */}
        <div
          className={`grid grid-rows-1 gap-[20px]  scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full ${
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
          }  top-[20px] col-span-3 lg:col-span-2 lg:max-h-max bg-[#fff] rounded-[16px] p-[15px] lg:px-[48px] lg:py-[32px] w-full max-w-full`}>
          <div className="grid grid-cols-7 col-span-7">
            <div className="grid col-span-5 border-r pr-[15px] border-[#d4d4d4]">
              <div className="grid w-full col-span-6 grid-cols-6 justify-between gap-[12px]  items-center mb-[24px]">
                <div className="overflow-hidden col-span-5">
                  <h1 className="font-[800] text-[#303533] text-[24px] truncate">
                    {selectedJob?.jobTitle}
                  </h1>
                </div>

                <div className="flex gap-[8px] w-[200px] col-span-1  ">
                  <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[12px]  text-[#7744aa] font-semibold rounded-[4px]">
                    {selectedJob?.employmentType}
                  </div>
                </div>
              </div>
              <Separator className="my-[15px] bg-[#d4d4d4]" />
              <div
                className="content-intro"
                dangerouslySetInnerHTML={{
                  __html: selectedJob?.jobDescriptionRawHtml || "",
                }}
              />
            </div>
            <div className="grid col-span-2 pl-[15px]">
              <div className="flex flex-col gap-[24px]">
                <span className="font-[600]">{selectedJob?.companyName}</span>
                <div className="flex flex-col gap-[6px]">
                  <span className="text-[12px] font-[600]">Location:</span>
                  <span className="truncate text-ellipsis overflow-hidden font-[500] text-[12px] ">
                    {selectedJob?.location}
                  </span>
                </div>
                {selectedJob?.companyWebsite && (
                  <div className="flex flex-col gap-[6px]">
                    <span className="text-[12px] font-[600]">Site web:</span>
                    <span className="truncate text-ellipsis font-[500] text-[12px]">
                      {selectedJob?.companyWebsite}
                    </span>
                  </div>
                )}

                <a
                  href={selectedJob?.jobUrl}
                  target="_blank"
                  className="bg-[#207fff] px-[15px] rounded-full  py-[12px] transition ease-in-out duration-500 text-center hover:bg-[#2081ffd4] text-[#fff]">
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
