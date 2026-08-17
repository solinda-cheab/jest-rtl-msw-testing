import { useMemo, useState } from "react";

import ApplicationList from "../components/ApplicationList/ApplicationList";
import SearchInput from "../components/SearchInput/SearchInput";
import StatusFilter from "../components/StatusFilter/StatusFilter";

import { useApplications } from "../hooks/useApplications";

import type {
  ApplicationStatus,
  JobApplication,
} from "../types/application";

export default function ApplicationsPage() {
  const {
    applications,
    loading,
    error,
    updateStatus,
    removeApplication,
  } = useApplications();

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<
    ApplicationStatus | "All"
  >("All");

  const [selectedApplication, setSelectedApplication] =
    useState<JobApplication | null>(null);

  const filteredApplications = useMemo(() => {
    const searchValue = search.toLowerCase();

    return applications.filter((application) => {
      const matchesSearch =
        application.position
          .toLowerCase()
          .includes(searchValue) ||
        application.company
          .toLowerCase()
          .includes(searchValue) ||
        application.location
          .toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        status === "All" ||
        application.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, status]);

  if (loading) {
    return (
      <main>
        <p>Loading applications...</p>
      </main>
    );
  }

  if (error && applications.length === 0) {
    return (
      <main>
        <p role="alert">{error}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Job Application Tracker</h1>

      <SearchInput
        value={search}
        onChange={setSearch}
      />

      <StatusFilter
        value={status}
        onChange={setStatus}
      />

      {error && (
        <p role="alert">
          {error}
        </p>
      )}

      <ApplicationList
        applications={filteredApplications}
        onView={setSelectedApplication}
        onDelete={removeApplication}
        onUpdateStatus={updateStatus}
      />

      {selectedApplication && (
        <div
          role="dialog"
          aria-labelledby="application-details-title"
        >
          <h2 id="application-details-title">
            Application Details
          </h2>

          <p>
            Position:{" "}
            {selectedApplication.position}
          </p>

          <p>
            Company:{" "}
            {selectedApplication.company}
          </p>

          <p>
            Location:{" "}
            {selectedApplication.location}
          </p>

          <p>
            Status:{" "}
            {selectedApplication.status}
          </p>

          <button
            type="button"
            onClick={() =>
              setSelectedApplication(null)
            }
          >
            Close
          </button>
        </div>
      )}
    </main>
  );
}