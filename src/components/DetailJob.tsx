import { apiGET } from "@/api/api";
import { VITE_API_QUERY_LIMIT } from "@/helpers/constants";
import Job from "@/models/job.model";
import { useQueries } from "@tanstack/react-query";
import { Card } from "./Card";
import { useRef, useState, useEffect } from "react";
import { SkeletonCard } from "./Skeleton";
import { useLocation } from "react-router-dom";
import { Separator } from "./ui/separator";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DetailJob() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage] = useState(1);
  const navigate = useNavigate();

  const params = useParams();

  const [AllQuery, DetailQuery] = useQueries({
    queries: [
      {
        queryKey: ["jobs-single-query"],
        queryFn: async () =>
          await apiGET({
            uri: `/jobs/?page=${currentPage}&limit=${VITE_API_QUERY_LIMIT}`,
          }),
      },

      {
        queryKey: ["jobs-detail-query"],
        refetchOnWindowFocus: false,
        queryFn: async () =>
          await apiGET({
            uri: `/jobs/${params.id}`,
          }),
      },
    ],
  });

  useEffect(() => {
    AllQuery.refetch();
  }, [AllQuery.refetch]);

  const handleSelectItem = (item: Job) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/job/${item._id} `, { state: { selectedItem: item } });
  };

  const location = useLocation();

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  useEffect(() => {
    if (params.id) {
      DetailQuery.refetch();
      if (location?.state?.selectedItem) {
        setSelectedJob(location?.state.selectedItem);
      }
      window.scrollTo({ top: 0 });
      console.log("first maison");
    }
  }, [location.state, params]);

  return (
    <div className="bg-[#f0f5fa] p-[15px] md:p-[30px] ">
      <div ref={scrollRef} className="grid grid-cols-4 gap-5 items-start  ">
        {/* Première div - affichée uniquement au-dessus de 1024px */}
        <div
          className={`grid grid-rows-1 gap-[20px]  scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full ${
            selectedJob != undefined && "hidden lg:grid"
          }`}
        >
          {AllQuery.isLoading &&
            Array.from({ length: 9 }).map((_e, idx: number) => {
              return <SkeletonCard key={idx} />;
            })}

          {AllQuery.data && AllQuery.data.data?.length > 0 && (
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
              {AllQuery.data.data
                .filter((item: Job) => item.jobTitle !== selectedJob?.jobTitle)
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
          className={`${"sticky top-[20px]"}  top-[20px] col-span-3 lg:col-span-3 lg:max-h-max bg-[#fff] rounded-[16px] p-[15px] lg:px-[48px] lg:py-[32px] w-full max-w-full`}
        >
          {DetailQuery.isFetching && <SkeletonCard />}

          {!DetailQuery.isRefetching && (
            <div className="md:grid md:grid-cols-7 md:col-span-7">
              <div className="md:grid col-span-5 md:border-r md:pr-[15px] border-[#d4d4d4]">
                <div className="sm:grid flex flex-col w-full col-span-6 grid-cols-6 justify-between gap-[12px] items-start  sm:items-center mb-[24px]">
                  <div className="overflow-hidden col-span-5">
                    <h1 className="font-[800] text-[#303533] text-20-title truncate">
                      {DetailQuery.data?.job[0]?.jobTitle}
                    </h1>
                  </div>

                  <div className="flex gap-[8px] w-[200px] col-span-1  ">
                    <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[12px]  text-[#7744aa] font-semibold rounded-[4px]">
                      {DetailQuery.data?.job[0]?.employmentType}
                    </div>
                  </div>
                </div>
                <div className="flex w-full md:hidden ">
                  <div className="flex flex-col w-full gap-[6px]">
                    <span className="font-[600]">
                      {DetailQuery.data?.job[0]?.companyName}
                    </span>
                    <div className="flex md:flex-col flex-row gap-[6px]">
                      <span className="text-[12px] font-[600]">Location:</span>
                      <span className="truncate text-wrap overflow-hidden font-[500] text-[12px] ">
                        {DetailQuery.data?.job[0]?.location}
                      </span>
                    </div>
                    {DetailQuery.data?.job[0]?.companyWebsite && (
                      <div className="flex flex-col gap-[6px]">
                        <span className="text-[12px] font-[600]">
                          Site web:
                        </span>
                        <span className="truncate text-ellipsis font-[500] text-[12px]">
                          {DetailQuery.data?.job[0]?.companyWebsite}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-[6px] items-center">
                      <span className="text-[12px] font-[600]">Job type:</span>
                      <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[12px] max-w-max text-[#7744aa] font-semibold rounded-[4px]">
                        {DetailQuery.data?.job[0]?.employmentType}
                      </div>
                    </div>

                    <div className="flex gap-[6px] items-center">
                      <span className="text-[12px] font-[600]">
                        last updated:
                      </span>
                      <span className="font-[600] text-[12px]">
                        {DetailQuery.data?.job[0]?.updatedAt.slice(0, 10)}
                      </span>
                    </div>

                    <a
                      href={DetailQuery.data?.job[0]?.jobUrl}
                      target="_blank"
                      className="bg-[#207fff] px-[15px] rounded-full  w-full py-[12px] transition ease-in-out duration-500 text-center hover:bg-[#2081ffd4] text-[#fff]"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
                <Separator className="my-[15px] bg-[#d4d4d4]" />
                <div
                  className="content-intro"
                  dangerouslySetInnerHTML={{
                    __html:
                      DetailQuery.data?.job[0]?.jobDescriptionRawHtml || "",
                  }}
                />
              </div>
              <div className="hidden md:grid col-span-2 md:pl-[15px]">
                <div className="flex flex-col gap-[24px]">
                  <span className="font-[600]">
                    {DetailQuery.data?.job[0]?.companyName}
                  </span>
                  <div className="flex flex-col gap-[6px]">
                    <span className="text-[12px] font-[600]">Location:</span>
                    <span className="truncate text-wrap overflow-hidden font-[500] text-[12px] ">
                      {DetailQuery.data?.job[0]?.location}
                    </span>
                  </div>
                  {DetailQuery.data?.job[0]?.companyWebsite && (
                    <div className="flex flex-col gap-[6px]">
                      <span className="text-[12px] font-[600]">Site web:</span>
                      <span className="truncate text-ellipsis font-[500] text-[12px]">
                        {DetailQuery.data?.job[0]?.companyWebsite}
                      </span>
                    </div>
                  )}

                  <div className="flex gap-[6px] items-center">
                    <span className="text-[12px] font-[600]">Job type:</span>
                    <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[12px] max-w-max text-[#7744aa] font-semibold rounded-[4px]">
                      {DetailQuery.data?.job[0]?.employmentType}
                    </div>
                  </div>

                  <div className="flex gap-[6px] items-center">
                    <span className="text-[12px] font-[600]">
                      last updated:
                    </span>
                    <span className="font-[600] text-[12px]">
                      {DetailQuery.data?.job[0]?.updatedAt.slice(0, 10)}
                    </span>
                  </div>

                  <a
                    href={DetailQuery.data?.job[0]?.jobUrl}
                    target="_blank"
                    className="bg-[#207fff] px-[15px] rounded-full  py-[12px] transition ease-in-out duration-500 text-center hover:bg-[#2081ffd4] text-[#fff]"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
