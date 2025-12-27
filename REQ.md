# Email Risk Reviewer

## Overview
Build a simple email risk review system with a focus on comprehensive E2E testing. The product is a pure frontend application that allows compliance officers to review emails and flag them as high-risk or low-risk. The application uses mock data stored in the frontend code.

## Product Requirements

### Frontend (Next.js or any modern framework)
Build two pages:

1. **Email List (Table View)** - Display all emails with filters (All/Pending Review/High Risk/Low Risk)
2. **Email Detail View** - Show full email content with flag buttons [High Risk] [Low Risk]

### Data Management
- Use mock data stored in your frontend code (e.g., in a TypeScript/JavaScript file, JSON file, or constants)
- The mock data should include at least 10-15 sample emails with the following structure:
  ```typescript
  {
    id: string,
    sender: string,
    recipient: string,
    subject: string,
    body: string,
    received_date: string,
    flagged: boolean | null // null = pending, true = high risk, false = low risk
  }
  ```
- State management should be handled in the frontend (e.g., React state, Context API, Zustand, or similar)
- Flagging an email should update the in-memory state (no backend persistence needed)

## Technical Requirements

### Development Environment
- Must be able to start the application with standard commands (e.g., `npm run dev`, `yarn dev`, or similar)
- Application should run on a local development server
- No database or backend services required

### Code Development
- Feel free to use AI assistants (Claude, ChatGPT, Cursor, etc.) to speed up product development
- Focus your time on writing quality tests rather than product features
- Use any modern frontend framework (Next.js, React, Vue, etc.)

## Testing Requirements

We expect comprehensive E2E test coverage for this system:

### E2E Tests (Playwright)
Write end-to-end tests using **Playwright** that cover:
- Complete user workflows from start to finish
  - Navigating from email list to detail view
  - Filtering emails by status (All/Pending Review/High Risk/Low Risk)
  - Flagging emails as high-risk or low-risk
  - Verifying that flagged status persists in the UI
- UI interactions and navigation
  - Clicking buttons, links, and interactive elements
  - Form submissions and data entry
  - Navigation between pages
- Data flow through the system
  - Displaying email data correctly
  - State updates after flagging emails
  - Filter functionality working correctly
- Edge cases and error states
  - Empty states (if applicable)
  - Boundary conditions
  - UI responsiveness
