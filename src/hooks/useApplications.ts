import { useCallback, useEffect, useState } from "react";

import {
  deleteApplication,
  getApplications,
  updateApplicationStatus,
} from "../services/applicationApi";

import type {
  ApplicationStatus,
  JobApplication,
} from "../types/application";

export function useApplications() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadApplications = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getApplications();

      setApplications(data);
    } catch {
      setError("Failed to load applications");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadApplications();
  }, [loadApplications]);

  const updateStatus = async (
    id: number,
    status: ApplicationStatus
  ) => {
    try {
      setError("");

      const updatedApplication =
        await updateApplicationStatus(id, status);

      setApplications((current) =>
        current.map((application) =>
          application.id === id
            ? updatedApplication
            : application
        )
      );

      return updatedApplication;
    } catch {
      setError("Failed to update application");
      throw new Error("Failed to update application");
    }
  };

  const removeApplication = async (id: number) => {
    try {
      setError("");

      await deleteApplication(id);

      setApplications((current) =>
        current.filter(
          (application) => application.id !== id
        )
      );
    } catch {
      setError("Failed to delete application");
      throw new Error("Failed to delete application");
    }
  };

  return {
    applications,
    loading,
    error,
    updateStatus,
    removeApplication,
    reload: loadApplications,
  };
}