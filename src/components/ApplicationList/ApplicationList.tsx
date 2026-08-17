import type { JobApplication } from "../../types/application";

import ApplicationCard from "../ApplicationCard/ApplicationCard";

interface ApplicationListProps {
  applications: JobApplication[];
  onView: (application: JobApplication) => void;
  onDelete: (id: number) => void;
  onUpdateStatus: (
    id: number,
    status: JobApplication["status"]
  ) => Promise<void>;
}

export default function ApplicationList({
  applications,
  onView,
  onDelete,
  onUpdateStatus,
}: ApplicationListProps) {
  if (applications.length === 0) {
    return <p>No applications found.</p>;
  }

  return (
    <section aria-label="Job applications">
      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          onView={onView}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
        />
      ))}
    </section>
  );
}