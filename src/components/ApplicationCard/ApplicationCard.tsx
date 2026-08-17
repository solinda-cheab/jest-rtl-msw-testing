import { useState } from "react";

import type {
  ApplicationStatus,
  JobApplication,
} from "../../types/application";

import { formatDate } from "../../utils/formatDate";

interface ApplicationCardProps {
  application: JobApplication;
  onView: (application: JobApplication) => void;
  onDelete: (id: number) => void;
  onUpdateStatus: (
    id: number,
    status: ApplicationStatus
  ) => Promise<void>;
}

const statuses: ApplicationStatus[] = [
  "Applied",
  "Interview",
  "Rejected",
  "Offer",
];

export default function ApplicationCard({
  application,
  onView,
  onDelete,
  onUpdateStatus,
}: ApplicationCardProps) {
  const [selectedStatus, setSelectedStatus] =
    useState<ApplicationStatus>(
      application.status
    );

  const [updating, setUpdating] = useState(false);

  async function handleUpdateStatus() {
    try {
      setUpdating(true);

      await onUpdateStatus(
        application.id,
        selectedStatus
      );
    } finally {
      setUpdating(false);
    }
  }

  return (
    <article>
      <h2>{application.position}</h2>

      <p>Company: {application.company}</p>

      <p>Location: {application.location}</p>

      <p>
        Status:{" "}
        <strong>{application.status}</strong>
      </p>

      <p>
        Applied: {formatDate(application.appliedDate)}
      </p>

      <div>
        <button
          type="button"
          onClick={() => onView(application)}
        >
          View
        </button>

        <button
          type="button"
          onClick={() => onDelete(application.id)}
        >
          Delete
        </button>
      </div>

      <div>
        <label htmlFor={`status-${application.id}`}>
          Update status
        </label>

        <select
          id={`status-${application.id}`}
          value={selectedStatus}
          onChange={(event) =>
            setSelectedStatus(
              event.target.value as ApplicationStatus
            )
          }
          disabled={updating}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={handleUpdateStatus}
          disabled={
            updating ||
            selectedStatus === application.status
          }
        >
          {updating ? "Updating..." : "Update Status"}
        </button>
      </div>
    </article>
  );
}