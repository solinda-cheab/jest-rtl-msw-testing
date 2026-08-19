# Job Application Tracker

A small React + TypeScript application built as a final practical project for learning and demonstrating professional frontend testing with **Jest, React Testing Library, and Mock Service Worker (MSW)**.

The goal of this project is not to build a large production application. The goal is to practice testing real user behavior, asynchronous operations, API interactions, error handling, and application state.

---

## Project Overview

The Job Application Tracker allows users to manage and track their job applications.

Users can:

- View job applications
- Search applications
- Filter applications by status
- View application details
- Update an application's status
- See loading states
- See API errors
- See success states

The application uses a mocked API during testing.

---

# Learning Goals

This project should demonstrate that you understand:

- Jest
- React Testing Library
- `render`
- `screen`
- `userEvent`
- `waitFor`
- `findBy...`
- Jest assertions
- Mock functions
- Mock modules
- MSW
- Async testing
- Loading states
- Error states
- Success states
- Form/input testing
- Unit testing
- Component testing
- Integration testing
- Testing user behavior
- Test isolation
- Test architecture
- Test coverage

---

# Tech Stack

## Frontend
- React
- TypeScript
- Vite

## Testing

- Jest
- React Testing Library
- `@testing-library/user-event`
- `@testing-library/jest-dom`
- Mock Service Worker (MSW)

---

# 📂 Suggested Project Structure

```text
job-application-tracker/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── ApplicationCard/
│   │   │   ├── ApplicationCard.tsx
│   │   │   └── ApplicationCard.test.tsx
│   │   │
│   │   ├── ApplicationList/
│   │   │   ├── ApplicationList.tsx
│   │   │   └── ApplicationList.test.tsx
│   │   │
│   │   ├── SearchInput/
│   │   │   ├── SearchInput.tsx
│   │   │   └── SearchInput.test.tsx
│   │   │
│   │   └── StatusFilter/
│   │       ├── StatusFilter.tsx
│   │       └── StatusFilter.test.tsx
│   │
│   ├── pages/
│   │   └── ApplicationsPage.tsx
│   │
│   ├── hooks/
│   │   └── useApplications.ts
│   │
│   ├── services/
│   │   └── applicationApi.ts
│   │
│   ├── utils/
│   │   ├── formatDate.ts
│   │   └── formatDate.test.ts
│   │
│   ├── types/
│   │   └── application.ts
│   │
│   └── App.tsx
│
├── tests/
│   │
│   ├── mocks/
│   │   ├── handlers.ts
│   │   └── server.ts
│   │
│   └── setup.ts
│
├── jest.config.ts
├── package.json
└── README.md
