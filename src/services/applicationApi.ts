import type {
  ApplicationStatus,
  JobApplication,
} from "../types/application";

export async function getApplications(): Promise<JobApplication[]> {
  const response = await fetch("/api/applications");

  if (!response.ok) {
    throw new Error("Failed to load applications");
  }

  return response.json();
}

export async function getApplication(
  id: number
): Promise<JobApplication> {
  const response = await fetch(`/api/applications/${id}`);

  if (!response.ok) {
    throw new Error("Application not found");
  }

  return response.json();
}

export async function updateApplicationStatus(
  id: number,
  status: ApplicationStatus
): Promise<JobApplication> {
  const response = await fetch(`/api/applications/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error("Failed to update application");
  }

  return response.json();
}

export async function deleteApplication(
  id: number
): Promise<{ message: string }> {
  const response = await fetch(`/api/applications/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete application");
  }

  return response.json();
}