export interface apiResponse {
  status?: number;
  data?: unknown;
}

export interface searchTermProps {
  jobTitle: string;
  jobLocation: string;
  updatedAt?: string;
}
