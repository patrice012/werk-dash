import { createContext, useState, useContext } from "react";

// Provide a default value for the context (it can be an empty object or null)
const FilterContext = createContext({});

export const FilterProvider = ({ children }: { children: any }) => {
  const [jobTilte, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [sidebarFilter, setSidebarFilter] = useState({
    jobTypes: [],
    experienceLevels: [],
  });

  // Update the job types filter
  const toggleJobType = (jobType: string) => {
    setSidebarFilter((prevFilter) => {
      const isSelected = prevFilter.jobTypes.includes(jobType);
      const updatedJobTypes = isSelected
        ? prevFilter.jobTypes.filter((type) => type !== jobType)
        : [...prevFilter.jobTypes, jobType];
      return { ...prevFilter, jobTypes: updatedJobTypes };
    });
  };

  // Update the experience level filter
  const toggleExperienceLevel = (experienceLevel: string) => {
    setSidebarFilter((prevFilter) => {
      const isSelected = prevFilter.experienceLevels.includes(experienceLevel);
      const updatedExperienceLevels = isSelected
        ? prevFilter.experienceLevels.filter(
            (level) => level !== experienceLevel
          )
        : [...prevFilter.experienceLevels, experienceLevel];
      return { ...prevFilter, experienceLevels: updatedExperienceLevels };
    });
  };

  return (
    <FilterContext.Provider
      value={{
        jobTilte,
        setJobTitle,
        jobLocation,
        setJobLocation,
        sidebarFilter,
        setSidebarFilter,
        toggleExperienceLevel,
        toggleJobType
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
