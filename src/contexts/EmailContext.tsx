'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Email, EmailFilter } from '@/types/email';
import { mockEmails } from '@/data/mockEmails';

interface EmailContextType {
  emails: Email[];
  filter: EmailFilter;
  setFilter: (filter: EmailFilter) => void;
  flagEmail: (id: string, flagged: boolean) => void;
  getEmailById: (id: string) => Email | undefined;
  getFilteredEmails: () => Email[];
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export function EmailProvider({ children }: { children: ReactNode }) {
  const [emails, setEmails] = useState<Email[]>(mockEmails);
  const [filter, setFilter] = useState<EmailFilter>('all');

  const flagEmail = (id: string, flagged: boolean) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, flagged } : email
      )
    );
  };

  const getEmailById = (id: string) => {
    return emails.find((email) => email.id === id);
  };

  const getFilteredEmails = (): Email[] => {
    switch (filter) {
      case 'pending':
        return emails.filter((email) => email.flagged === null);
      case 'flagged':
        return emails.filter((email) => email.flagged === true);
      case 'not-flagged':
        return emails.filter((email) => email.flagged === false);
      default:
        return emails;
    }
  };

  return (
    <EmailContext.Provider
      value={{
        emails,
        filter,
        setFilter,
        flagEmail,
        getEmailById,
        getFilteredEmails,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}

export function useEmailContext() {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error('useEmailContext must be used within an EmailProvider');
  }
  return context;
}

