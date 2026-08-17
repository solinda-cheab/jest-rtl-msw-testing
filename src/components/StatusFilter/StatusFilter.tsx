import type { ApplicationStatus } from "../../types/application";

interface StatusFilterProps {
  value: ApplicationStatus | "All";
  onChange: (
    value: ApplicationStatus | "All"
  ) => void;
}

const statuses: (ApplicationStatus | "All")[] = [
  "All",
  "Applied",
  "Interview",
  "Rejected",
  "Offer",
];

export default function StatusFilter({
  value,
  onChange,
}: StatusFilterProps) {
  return (
    <div>
      <label htmlFor="status-filter">
        Filter by status
      </label>

      <select
        id="status-filter"
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value as
              | ApplicationStatus
              | "All"
          )
        }
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}