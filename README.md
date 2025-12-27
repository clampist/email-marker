# Email Risk Reviewer

A pure frontend application for reviewing and flagging emails for risk assessment.

## Features

- **Email List View**: Display all emails in a table with filtering options
- **Email Detail View**: View full email content and flag emails as high-risk or not
- **Filtering**: Filter emails by status (All/Pending Review/Flagged/Not Flagged)
- **State Management**: In-memory state management using React Context API
- **Mock Data**: Pre-loaded sample emails for testing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
  ├── app/                    # Next.js app directory
  │   ├── layout.tsx         # Root layout with EmailProvider
  │   ├── page.tsx           # Email List page
  │   ├── emails/[id]/       # Dynamic route for email detail
  │   │   └── page.tsx       # Email Detail page
  │   └── globals.css        # Global styles
  ├── contexts/
  │   └── EmailContext.tsx   # Email state management
  ├── data/
  │   └── mockEmails.ts      # Mock email data
  └── types/
      └── email.ts           # TypeScript type definitions
```

## Pages

### Email List Page (`/`)

- Displays all emails in a table format
- Filter buttons: All, Pending Review, Flagged, Not Flagged
- Click on email subject to view details
- Shows email status badges

### Email Detail Page (`/emails/[id]`)

- Displays full email content
- Shows sender, recipient, subject, body, and received date
- Two action buttons:
  - "Yes, High Risk" - Flags email as high-risk
  - "No, Not High Risk" - Flags email as not high-risk
- Back button to return to email list

## Data Structure

Emails are stored with the following structure:

```typescript
{
  id: string;
  sender: string;
  recipient: string;
  subject: string;
  body: string;
  received_date: string;
  flagged: boolean | null; // null = pending, true = high risk, false = not high risk
}
```

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS (Global styles)

