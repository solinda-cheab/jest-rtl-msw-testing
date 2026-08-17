export type ApplicationStatus =
  | "Applied"
  | "Interview"
  | "Rejected"
  | "Offer";

export interface JobApplication {
  id: number;
  position: string;
  company: string;
  location: string;
  status: ApplicationStatus;
  appliedDate: string;
}