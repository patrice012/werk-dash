import { createContext, useState, useContext } from "react";

// Provide a default value for the context (it can be an empty object or null)
const FilterContext = createContext({});

export const FilterProvider = ({ children }: { children: any }) => {
  const [jobTilte, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [sidebarFilter, setSidebarFilter] = useState({
    jobTypes: [],
    experienceLevel: [],
  });

  return (
    <FilterContext.Provider
      value={{
        jobTilte,
        setJobTitle,
        jobLocation,
        setJobLocation,
        sidebarFilter,
        setSidebarFilter,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
