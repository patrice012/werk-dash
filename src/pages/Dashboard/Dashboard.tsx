import { MoreHorizontal, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input-dash";
import { DashboardLayout } from "@/components/dashboard/Layout";
export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { debounce } from "@/helpers/request";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { TableLoadingSkeleton } from "@/components/dashboard/TableSkeleton";
import { Link } from "react-router-dom";
import { NotFoundData } from "@/components/request/NotFoundData";
import { ErrorRequest } from "@/components/request/ErrorRequest";
import { apiPOST } from "@/api/api";
import { VITE_API_QUERY_LIMIT } from "@/helpers/constants";
import { Checkbox } from "@/components/ui/checkbox";
import { FilterContext } from "@/context/filterContext";
import Job from "@/models/job.model";

/* interface IDomain {
  domain: string;
  status: string;
  scrapedAt: string;
} */

/* type TCompaingType = Omit<CompaignType, "domains"> & {
  domains: IDomain[];
}; */

export function Dashboard() {
  const [user] = useCurrentUser();
  const [page, setPage] = useState(1);
  const [searchTerms, setSearchTerms] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { jobTypes, toggleJobType, setJobTypes } = useContext(FilterContext);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);
  const [debouncedSearch] = useState(() =>
    debounce((value: string) => {
      setSearchTerms(value);
      setPage(1);
      getAllCompaignsQuery.refetch();
    }, 500)
  );

  const handleSearchValueChange = (value: string) => {
    debouncedSearch(value);
  };

  /*  async function getCompaigns() {
    try {
      const response = await postReq({
        data: {
          uid: user?.uid || "",
          page: page,
          perPage: 10,
          search: searchTerms,
        },
        url: "/api/compaign/get-all",
      });

      if (response?.status === 200) {
        return response.json();
      } else return {};
    } catch (e) {
      console.log(e, "error getCompaigns");
    }
  } */

  const getAllCompaignsQuery = useQuery({
    queryKey: ["jobs-query", page, searchTerms, jobTypes],
    refetchOnWindowFocus: false,
    queryFn: async () =>
      await apiPOST({
        uri: `jobs/filter/?page=${page}&limit=${VITE_API_QUERY_LIMIT}`,
        data: {
          searchValue: searchTerms,
          jobType: jobTypes,
        },
      }),
  });

  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 border-2 border-[#e7e7e7] dark:border-[#232323] border-solid shadow-md rounded-[10px]">
        <div className="flex items-center">
          <div className="ml-auto w-full flex items-center justify-between gap-2">
            <div className="w-full flex-1">
              <h1 className="text-lg font-bold md:text-2xl">Jobs</h1>
            </div>
          </div>
        </div>

        <div className="relative w-full ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search compaigns..."
            className="w-full border-[#fff] rounded-lg bg-background pl-8 h-11"
            onChange={(e) => {
              handleSearchValueChange(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between items-start md:items-center  gap-[24px]">
          <div className="flex md:flex-row flex-col gap-[24px]">
            {[
              "Contract",
              "Full-Time",
              "Part-Time",
              "Internship",
              "Temporary",
            ].map((type, idx) => (
              <div
                className="flex mb-2 justify-start gap-[10px] items-center"
                key={idx}
              >
                <Checkbox
                  className="size-5 rounded-[5px] "
                  checked={jobTypes.includes(type)}
                  onCheckedChange={() => toggleJobType(type)}
                />
                <span className="text-[#4a4a4a] text-[.82rem] sm:text-[18px] font-[500]">
                  {type}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setJobTypes([]);
            }}
            className="text-[#f98586] items-start font-semibold sm:text-[18px] cursor-pointer"
          >
            Clear all
          </button>
        </div>
        <Tabs defaultValue="week">
          <TabsContent value="week">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardContent>
                {(getAllCompaignsQuery.isSuccess &&
                  !getAllCompaignsQuery.data?.data?.length) ||
                getAllCompaignsQuery.isError ? null : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="py-4">Company</TableHead>
                        <TableHead className="py-4">Job title</TableHead>
                        <TableHead className="py-4">job type</TableHead>
                        <TableHead className="py-4">Location</TableHead>
                        <TableHead className="hidden xl:table-cell py-4">
                          last updated
                        </TableHead>

                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {isLoading || getAllCompaignsQuery.isLoading
                        ? new Array(6)
                            .fill(null)
                            .map((_, index) => (
                              <TableLoadingSkeleton key={index} />
                            ))
                        : null}
                      {getAllCompaignsQuery.isSuccess
                        ? getAllCompaignsQuery?.data?.data?.map(
                            (compaign: Job, key: number) => {
                              return (
                                <TableRow key={key}>
                                  <TableCell className="font-medium py-4 truncate">
                                    {compaign?.companyName}
                                  </TableCell>
                                  <TableCell className="font-medium py-4">
                                    {compaign?.jobTitle}
                                  </TableCell>
                                  <TableCell className="hidden md:table-cell py-4">
                                    {compaign?.employmentType}
                                  </TableCell>
                                  <TableCell>{compaign?.location}</TableCell>
                                  <TableCell className="hidden xl:table-cell py-4">
                                    {compaign?.updatedAt?.slice(0, 10)}
                                  </TableCell>

                                  <TableCell>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button
                                          aria-haspopup="true"
                                          size="icon"
                                          variant="ghost"
                                        >
                                          <MoreHorizontal className="h-4 w-4" />
                                          <span className="sr-only">
                                            Toggle menu
                                          </span>
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent>
                                        <DropdownMenuGroup>
                                          <Link to="#">
                                            <DropdownMenuLabel className="cursor-pointer px-4 font-[500] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm">
                                              View
                                            </DropdownMenuLabel>
                                          </Link>
                                        </DropdownMenuGroup>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </TableCell>
                                </TableRow>
                              );
                            }
                          )
                        : null}
                    </TableBody>
                  </Table>
                )}

                {getAllCompaignsQuery.isSuccess &&
                getAllCompaignsQuery.data?.data?.length === 0 ? (
                  <NotFoundData refresh={getAllCompaignsQuery.refetch} />
                ) : null}
                {getAllCompaignsQuery.isError ? (
                  <ErrorRequest refresh={getAllCompaignsQuery.refetch} />
                ) : null}
              </CardContent>

              {getAllCompaignsQuery.isSuccess &&
              getAllCompaignsQuery.data?.data?.length > 0 ? (
                <CardFooter>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <Button
                          disabled={!getAllCompaignsQuery.data?.prevPage}
                          onClick={() => {
                            setPage(page - 1);
                          }}
                        >
                          Previous
                        </Button>
                      </PaginationItem>
                      {getAllCompaignsQuery.data?.prevPage ? (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      ) : null}
                      <PaginationItem>
                        <PaginationLink href="#">{page}</PaginationLink>
                      </PaginationItem>

                      {getAllCompaignsQuery.data?.nextPage ? (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      ) : null}

                      <PaginationItem>
                        <Button
                          disabled={!getAllCompaignsQuery.data?.nextPage}
                          onClick={() => {
                            setPage(page + 1);
                          }}
                        >
                          Next
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardFooter>
              ) : null}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
