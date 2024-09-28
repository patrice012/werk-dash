export default interface Job {
  jobTitle?: string;
  _id?: string;
  jobId?: string;
  originalId?: string;
  jobUrl?: string;
  jobDescription?: string;
  location?: string;
  companyName?: string;
  companyWebsite?: string;
  jobScrapedAt?: string;
  jobSource?: string;
  jobParentSource?: string;
  isJobActive?: boolean;
  processed?: boolean;
  country?: string;
  city?: string;
  state?: string;
  employmentType?: string;
  updatedAt?: string;
  jobDescriptionRawHtml?: string;
}
