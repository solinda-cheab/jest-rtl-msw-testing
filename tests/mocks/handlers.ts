import { http, HttpResponse } from "msw";

import type { JobApplication } from "../../src/types/application";

const applications: JobApplication[] = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Wing",
    location: "Phnom Penh",
    status: "Interview",
    appliedDate: "2026-08-10",
  },
  {
    id: 2,
    position: "React Developer",
    company: "ABA Bank",
    location: "Phnom Penh",
    status: "Applied",
    appliedDate: "2026-08-12",
  },
  {
    id: 3,
    position: "Software Engineer",
    company: "Tech Cambodia",
    location: "Phnom Penh",
    status: "Rejected",
    appliedDate: "2026-08-05",
  },
  {
    id: 4,
    position: "Frontend Engineer",
    company: "Smart Axiata",
    location: "Phnom Penh",
    status: "Offer",
    appliedDate: "2026-08-01",
  },
];

export const handlers = [
  http.get("/api/applications", () => {
    return HttpResponse.json(applications);
  }),

  http.get(
    "/api/applications/:id",
    ({ params }) => {
      const id = Number(params.id);

      const application = applications.find(
        (item) => item.id === id
      );

      if (!application) {
        return HttpResponse.json(
          {
            message: "Application not found",
          },
          { status: 404 }
        );
      }

      return HttpResponse.json(application);
    }
  ),

  http.patch(
    "/api/applications/:id",
    async ({ params, request }) => {
      const id = Number(params.id);

      const body = (await request.json()) as {
        status: JobApplication["status"];
      };

      const application = applications.find(
        (item) => item.id === id
      );

      if (!application) {
        return HttpResponse.json(
          {
            message: "Application not found",
          },
          { status: 404 }
        );
      }

      return HttpResponse.json({
        ...application,
        status: body.status,
      });
    }
  ),

  http.delete(
    "/api/applications/:id",
    ({ params }) => {
      const id = Number(params.id);

      const application = applications.find(
        (item) => item.id === id
      );

      if (!application) {
        return HttpResponse.json(
          {
            message: "Application not found",
          },
          { status: 404 }
        );
      }

      return HttpResponse.json({
        message:
          "Application deleted successfully",
      });
    }
  ),
];