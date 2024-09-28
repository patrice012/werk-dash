import { createContext, useState, ReactNode } from "react";

// Define the shape of the filter context
interface FilterContextType {
  jobTitle: string;
  setJobTitle: (title: string) => void;
  jobLocation: string;
  setJobLocation: (location: string) => void;
  jobTypes: string[];
  setJobTypes: React.Dispatch<React.SetStateAction<string[]>>;
  experienceLevels: string[];
  setExperienceLevels: React.Dispatch<React.SetStateAction<string[]>>;
  toggleJobType: (jobType: string) => void;
  toggleExperienceLevel: (experienceLevel: string) => void;
}

// Provide a default value for the context (initial values)
const defaultFilterContext: FilterContextType = {
  jobTitle: "",
  setJobTitle: () => {},
  jobLocation: "",
  setJobLocation: () => {},
  jobTypes: [],
  setJobTypes: () => {},
  experienceLevels: [],
  setExperienceLevels: () => {},
  toggleJobType: () => {},
  toggleExperienceLevel: () => {},
};

export const FilterContext =
  createContext<FilterContextType>(defaultFilterContext);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [experienceLevels, setExperienceLevels] = useState<string[]>([]);

  // Update the job types filter
  const toggleJobType = (jobType: string) => {
    setJobTypes((prevJobTypes) => {
      const isSelected = prevJobTypes.includes(jobType);
      return isSelected
        ? prevJobTypes.filter((type) => type !== jobType)
        : [...prevJobTypes, jobType];
    });
  };

  // Update the experience level filter
  const toggleExperienceLevel = (experienceLevel: string) => {
    setExperienceLevels((prevExperienceLevels) => {
      const isSelected = prevExperienceLevels.includes(experienceLevel);
      return isSelected
        ? prevExperienceLevels.filter((level) => level !== experienceLevel)
        : [...prevExperienceLevels, experienceLevel];
    });
  };

  return (
    <FilterContext.Provider
      value={{
        jobTitle,
        setJobTitle,
        jobLocation,
        setJobLocation,
        jobTypes,
        setJobTypes,
        experienceLevels,
        setExperienceLevels,
        toggleJobType,
        toggleExperienceLevel,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
