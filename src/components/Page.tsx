/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Job from "@/models/job.model";
import { apiGET } from "@/api/api";
import { SkeletonCard } from "./Skeleton";
import { debounce } from "lodash";
import { VITE_API_QUERY_LIMIT } from "@/helpers/constants";
import { Card } from "./Card";

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSeletedItem] = useState<number>();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayTerm, setDisplayTerm] = useState("");
  const [currentPage] = useState(1);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Effect to check screen size on mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  //
  const handleSelectItem = (item: number) => {
    setSeletedItem(item);
    navigate(`/job/${item}`);
  };

  return (
    <div className="flex flex-col w-full gap-[30px] px-[15px] md:px-[30px] pb-[30px] scrollbar scrollbar-thumb-[#d4d4d4]  scrollbar-w-[7px] scrollbar-thumb-rounded-full">
      {/* <div className="flex lg:flex-row w-full gap-[12.5px] flex-col">
        <div className="flex sm:flex-row w-full gap-[12.5px] flex-col">
          <div className="grow relative">
            <Input
              value={searchTerm}
              onChange={handleChange}
              type="search"
              placeholder="Search..."
              className="w-full rounded-[4px] h-[48px] bg-[#fff] border-[#b9b9b9] focus:outline-0 pl-[40px] pr-[10px]"
            />
            <SearchNormal1
              size="24"
              color="#b9b9b9"
              className="absolute top-[12px] left-[10px]"
            />
          </div>
          <Select>
            <SelectTrigger className="border flex items-center px-2 bg-[#fff] h-[48px] justify-between w-full sm:w-[150px] rounded-[4px] active:outline-0 focus:outline-0">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex sm:flex-row w-full gap-[12.5px] flex-col">
          <div className="h-[48px] grow relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-[4px] h-[48px] bg-[#fff] border-[#b9b9b9] focus:outline-0 pl-[40px] pr-[10px]"
            />
            <Location
              size="24"
              color="#b9b9b9"
              className="absolute top-[12px] left-[10px]"
            />
          </div>
          <Button className="bg-[#388bf0] font-[500] transition ease-in-out duration-300 hover:bg-[#388bf0c5] px-[12px] h-[48px] items-center rounded-[4px] w-full sm:w-[150px] lg:w-[100px] text-[#fff]">
            Search
          </Button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 items-center w-full justify-between">
        <div className="flex justify-start gap-[12px]">
          <span className="text-[#888888] text-15-title">
            Showing{" "}
            <span className="font-[500] text-[#000] text-15-title">150</span>{" "}
            Jobs{" "}
            <span className="font-[500] text-[#000] text-18-title">
              UI/UX Designer
            </span>{" "}
            in{" "}
            <span className="font-[500] text-[#000] text-15-title">
              Indonesia
            </span>
          </span>
        </div>
        <div className="flex items-center justify-start gap-[12px]">
          <span className="text-[#888888]">Short by</span>
          <Select>
            <SelectTrigger className="border flex items-center px-2  border-[#888888] bg-[#ececec] h-[32px] justify-between w-[150px] rounded-[4px] focus:outline-0">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div> */}

      {/*  */}
      <div ref={scrollRef} className="grid grid-cols-3 gap-5 items-start">
        {/* Première div - affichée uniquement au-dessus de 1024px */}
        <div
          className={`grid ${"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-3"} gap-[20px] `}
        >
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
        {/*   <div
          className={`${
            selectedItem != undefined ? "sticky" : "hidden"
          }  top-[20px] col-span-3 lg:col-span-2 lg:max-h-max lg:p-[15px] bg-[#fff] rounded-[4px] p-4 w-full max-w-full`}
        >
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSeletedItem(undefined)}
              className="cursor-pointer absolute right-0 top-0 p-[6px]"
            >
              <IoMdClose size={30} />
            </button>
            <h1 className="font-[500] text-[#303533] text-[18px]">
              UI/UX Designer {selectedItem}
            </h1>
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
        </div> */}
      </div>
    </div>
  );
}
