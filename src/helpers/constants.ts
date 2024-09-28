const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const VITE_ENV = import.meta.env.VITE_ENV;
const VITE_API_QUERY_LIMIT = import.meta.env.VITE_API_QUERY_LIMIT;

const initialFilterValue = {
  jobTitle: "",
  jobLocation: "",
};

export { API_ENDPOINT, VITE_ENV, VITE_API_QUERY_LIMIT, initialFilterValue };
