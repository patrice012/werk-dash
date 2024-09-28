/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Job from "@/models/job.model";
import { apiPOST } from "@/api/api";
import { useInView } from "react-intersection-observer";

import { VITE_API_QUERY_LIMIT } from "@/helpers/constants";
import { FilterContext } from "@/context/filterContext";
import { Setting4 } from "iconsax-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SkeletonCard } from "@/components/Skeleton";
import { Card } from "@/components/Card";
import { ErrorRequest } from "@/components/request/ErrorRequest";
import { NotFoundData } from "@/components/request/NotFoundData";
import { searchTermProps } from "@/helpers/types";

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage] = useState(1);
  const [ref, inView] = useInView();
  const queryParams = new URLSearchParams(location.search);
  const { jobTitle, jobLocation, jobTypes, setJobTitle, setJobLocation } =
    useContext(FilterContext);

  //
  useEffect(() => {
    setJobTitle(queryParams.get("jobTitle") ?? "");
    setJobLocation(queryParams.get("jobLocation") ?? "");
  }, [location.search]);

  //
  const handleFilterUpdate = (values: searchTermProps) => {
    queryParams.set("jobTitle", values.jobTitle);
    queryParams.set("jobLocation", values.jobLocation);
    navigate({ search: queryParams.toString() });
  };

  // load jobs
  const jobsInfiniteQuery = useInfiniteQuery({
    queryKey: ["jobs-infinite-query", jobLocation, jobTitle, jobTypes],
    queryFn: async ({ pageParam = currentPage }) => {
      return await apiPOST({
        uri: `jobs/filter/?page=${pageParam}&limit=${VITE_API_QUERY_LIMIT}`,
        data: {
          searchValue: jobTitle,
          country: jobLocation,
          jobType: jobTypes,
        },
      });
    },
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) return +lastPage.page + 1;
      return undefined;
    },
    getPreviousPageParam: (firstPage) => {
      if (firstPage.page > 1) return +firstPage.page - 1;
      return undefined;
    },
  });

  //
  useEffect(() => {
    if (inView && jobsInfiniteQuery.hasNextPage) {
      jobsInfiniteQuery.fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <Navbar onSubmit={handleFilterUpdate} useSearchbar />
      <div className="bg-[#f0f5fa] w-full px-3 sm:px-6 items-center sm:items-center flex sm:flex-row gap-[12px] sm:justify-between py-4 sm:py-[20px] justify-between">
        <span className="text-[#212222] font-medium text-40-title truncate ...">
          Recommended Jobs
        </span>
        <button className="border text-[14px] sm:text-[18px] flex gap-[10px] border-[#6a6b6d] py-[8px] sm:py-3 px-[20px] font-[500] rounded-full transition ease-in-out duration-300 hover:bg-[#6a6b6d2b]  items-center  text-[#212222]">
          <span className="truncate ...">Most recent</span>
          <Setting4 size={22} color="#212222" />
        </button>
      </div>
      <div className="flex items-start flex-col xl:flex-row gap-8 px-4 pt-5 sm:px-6 w-full h-full">
        <Sidebar
          onTagItemPress={(value) =>
            handleFilterUpdate({ jobTitle: value, jobLocation: "" })
          }
        />
        <div className="flex flex-col w-full gap-[30px] pb-[30px] scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full">
          <div className="grid grid-cols-3 gap-5 items-start w-full">
            <div
              className={`grid ${"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3"} gap-[20px] `}
            >
              {jobsInfiniteQuery.isLoading
                ? Array.from({ length: 9 }).map((_e, idx: number) => {
                    return <SkeletonCard key={idx} />;
                  })
                : null}

              {jobsInfiniteQuery.isSuccess
                ? jobsInfiniteQuery?.data?.pages
                    .flatMap((page) => page.data)
                    .map((item: Job, idx: number) => (
                      <Card
                        job={item}
                        key={idx}
                        onPress={() =>
                          navigate(`/jobs/${item._id}`, {
                            state: { selectedItem: item },
                          })
                        }
                      />
                    ))
                : null}

              {jobsInfiniteQuery.isFetchingNextPage
                ? Array.from({ length: 3 }).map((_e, idx: number) => {
                    return <SkeletonCard key={idx} />;
                  })
                : null}
            </div>

            <span className="mt-5" ref={ref}></span>
          </div>
          {jobsInfiniteQuery.isError ? (
            <div className="w-full mx-auto">
              <ErrorRequest />
            </div>
          ) : null}

          {jobsInfiniteQuery.isSuccess &&
          jobsInfiniteQuery?.data?.pages.flatMap((page) => page.data).length ===
            0 ? (
            <div className="w-full mx-auto">
              <NotFoundData />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
