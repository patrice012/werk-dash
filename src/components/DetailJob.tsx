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
        queryKey: ["jobs-detail-query", params.id],
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
    }
  }, [location.state, params]);

  return (
    <div className="bg-[#f0f5fa] p-[15px]  md:p-[30px]">
      <div className="xl:grid xl:grid-cols-4 flex flex-col-reverse gap-[12px] items-start">
        {/* Première div - affichée uniquement au-dessus de 1024px */}
        <div
          className={`grid gap-[12px] h-[100vh] sticky top-[20px] scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full overflow-auto ${selectedJob != undefined && "grid"}`}>
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
              {window.innerWidth > 1280
                ? AllQuery.data.data
                    .filter(
                      (item: Job) => item.jobTitle !== selectedJob?.jobTitle
                    )
                    .map((item: Job, idx: number) => (
                      <Card
                        job={item}
                        isSelected={false}
                        key={idx}
                        onPress={() => handleSelectItem(item)}
                      />
                    ))
                : AllQuery.data.data
                    .filter(
                      (item: Job) => item.jobTitle !== selectedJob?.jobTitle
                    )
                    .slice(0, 2)
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
        <span className="text-[20px] font-bold py-[20px] flex xl:hidden">
          Related Jobs
        </span>
        {/* Div détails - occupe toute la largeur sous 1024px */}
        <div
          ref={scrollRef}
          className={`col-span-4 xl:col-span-3 xl:max-h-max bg-[#fff] rounded-[16px]  w-full max-w-full`}>
          {DetailQuery.isLoading && <SkeletonCard />}

          {DetailQuery.isSuccess && (
            <div className="lm:grid lm:grid-cols-7 lm:col-span-7">
              <div className="lm:grid col-span-5 lm:border-r-[1.3px] lm:border-[#e4e4e7]">
                <div className="flex md:flex-row flex-col w-full gap-4 md:justify-between  items-start px-[15px] sm:px-[32px] pt-[32px] lg:pl-[56px] lg:pt-[32px]  mb-[24px]">
                  <div className=" ">
                    <h1 className="font-[800] text-[#303533] capitalize text-wrap text-[24px]">
                      {DetailQuery.data?.job[0]?.jobTitle}
                    </h1>
                  </div>
                  <div className="flex gap-[8px] w-[100px] md:justify-end ">
                    <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[12px]  text-[#7744aa] font-semibold rounded-[4px]">
                      {DetailQuery.data?.job[0]?.employmentType}
                    </div>
                  </div>
                </div>
                <Separator className="mt-[15px] lm:hidden  bg-[#e4e4e7]" />
                <div className="flex w-full lm:hidden p-[15px] sm:p-[32px] ">
                  <div className="flex flex-col w-full gap-[24px]">
                    <span className="font-[600] text-[1.25rem] capitalize">
                      {DetailQuery.data?.job[0]?.companyName}
                    </span>
                    <div className="flex flex-row gap-[6px]">
                      <span className="text-[14px] font-[600]">Location:</span>
                      <span className=" text-wrap  font-[400] text-[14px] ">
                        {DetailQuery.data?.job[0]?.location}
                      </span>
                    </div>
                    {DetailQuery.data?.job[0]?.companyWebsite && (
                      <div className="flex flex-col gap-[6px]">
                        <span className="text-[14px] font-[600]">
                          Site web:
                        </span>
                        <span className="text-wrap font-[500] text-[14px]">
                          {DetailQuery.data?.job[0]?.companyWebsite}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-[6px] items-center">
                      <span className="text-[14px] font-[600]">Job type:</span>
                      <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[14px] max-w-max text-[#7744aa] font-semibold rounded-[4px]">
                        {DetailQuery.data?.job[0]?.employmentType}
                      </div>
                    </div>

                    <div className="flex gap-[6px] items-center">
                      <span className="text-[14px] font-[600]">
                        last updated:
                      </span>
                      <span className="font-[400] text-[14px]">
                        {DetailQuery.data?.job[0]?.updatedAt.slice(0, 10)}
                      </span>
                    </div>

                    <a
                      href={DetailQuery.data?.job[0]?.jobUrl}
                      target="_blank"
                      className="bg-[#207fff] px-[15px] rounded-full  w-full py-[12px] transition ease-in-out duration-500 text-center hover:bg-[#2081ffd4] text-[#fff]">
                      Apply now
                    </a>
                  </div>
                </div>

                <div className="content-intro border-t border-[#e4e4e7] ">
                  <div
                    className="px-[15px] sm:px-[32px] style overflow-y-auto py-[15px] lg:px-[56px] lg:py-[32px]"
                    dangerouslySetInnerHTML={{
                      __html:
                        DetailQuery.data?.job[0]?.jobDescriptionRawHtml || "",
                    }}
                  />
                </div>
              </div>
              <div className="hidden lm:grid col-span-2 ">
                <div className=" w-full">
                  <div className="flex flex-col gap-[24px] px-[15px] pt-[40px] pb-[20px] lg:px-[32px] lg:pt-[40px] ">
                    <span className="font-[600] text-[1.25rem] capitalize">
                      {DetailQuery.data?.job[0]?.companyName}
                    </span>
                    <div className="flex flex-col gap-[6px]">
                      <span className="text-[15px] font-bold">Location</span>
                      <span className=" text-wrap  font-[400] text-[14px] ">
                        {DetailQuery.data?.job[0]?.location}
                      </span>
                    </div>
                    {DetailQuery.data?.job[0]?.companyWebsite && (
                      <div className="flex flex-col gap-[6px]">
                        <span className="text-[14px] font-[600]">
                          Site web:
                        </span>
                        <span className="truncate text-ellipsis font-[500] text-[14px]">
                          {DetailQuery.data?.job[0]?.companyWebsite}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col gap-[6px] items-start">
                      <span className="text-[15px] font-bold capitalize">
                        Job type
                      </span>
                      <div className="bg-[#f1e3ff] px-[5px] py-[3px] text-[14px] max-w-max text-[#7744aa] font-semibold rounded-[4px]">
                        {DetailQuery.data?.job[0]?.employmentType}
                      </div>
                    </div>

                    <div className="flex flex-col gap-[6px] items-start">
                      <span className="text-[15px] font-bold capitalize">
                        last updated
                      </span>
                      <span className="text-[14px] text-wrap font-[400]">
                        {DetailQuery.data?.job[0]?.updatedAt.slice(0, 10)}
                      </span>
                    </div>
                  </div>

                  <Separator className="my-[15px]  bg-[#e4e4e7]" />

                  <div className="w-full py-[20px] px-[15px] lg:px-[32px] flex">
                    <a
                      href={DetailQuery.data?.job[0]?.jobUrl}
                      target="_blank"
                      className="bg-[#207fff] px-[15px] rounded-full  w-full py-[12px] transition ease-in-out duration-500 text-center hover:bg-[#2081ffd4] text-[#fff]">
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
