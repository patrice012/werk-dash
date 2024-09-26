/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Job from "@/models/job.model";
import { apiPOST } from "@/api/api";
import { SkeletonCard } from "./Skeleton";
import { Card } from "./Card";
import { useInView } from "react-intersection-observer";

import { SidebarContent } from "./Sidebar";
import { useFilter } from "@/context/filterContext";
import { ErrorRequest } from "./request/ErrorRequest";
import { NotFoundData } from "./request/NotFoundData";

export default function Page() {
  const [ref, inView] = useInView();

  const [selectedItem, setSeletedItem] = useState<number>();

  const [currentPage] = useState(1);
  const navigate = useNavigate();
  const NumberPage = 12;

  const { jobTilte, jobLocation, jobTypes } = useFilter();

  console.log(jobTypes);
  // load cars
  const jobsInfiniteQuery = useInfiniteQuery({
    queryKey: ["jobs-infinite-query", jobLocation, jobTilte, jobTypes],
    queryFn: async ({ pageParam = currentPage }) => {
      return await apiPOST({
        uri: `jobs/filter/?page=${pageParam}&limit=${NumberPage}`,
        data: {
          searchValue: jobTilte,
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

  useEffect(() => {
    if (inView && jobsInfiniteQuery.hasNextPage) {
      jobsInfiniteQuery.fetchNextPage();
    }
  }, [inView]);

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
        <div className="grid grid-cols-3 gap-5 items-start w-full">
          <div
            className={`grid ${"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3"} gap-[20px] `}>
            {jobsInfiniteQuery.isLoading
              ? Array.from({ length: 9 }).map((_e, idx: number) => {
                  return <SkeletonCard key={idx} />;
                })
              : null}

            {jobsInfiniteQuery.isSuccess
              ? jobsInfiniteQuery?.data?.pages
                  .flatMap((page) => page.data)
                  .map((item: Job, idx: number) => {
                    const selected = selectedItem == idx;
                    return (
                      <Card
                        job={item}
                        isSelected={selected}
                        key={idx}
                        onPress={() => handleSelectItem(item, idx)}
                      />
                    );
                  })
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
  );
}
