'use client';

import { useEmailContext } from '@/contexts/EmailContext';
import { EmailFilter } from '@/types/email';
import Link from 'next/link';

export default function EmailListPage() {
  const { filter, setFilter, getFilteredEmails } = useEmailContext();
  const filteredEmails = getFilteredEmails();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (flagged: boolean | null) => {
    if (flagged === null) {
      return <span className="status-badge pending">Pending Review</span>;
    } else if (flagged === true) {
      return <span className="status-badge flagged">High Risk</span>;
    } else {
      return <span className="status-badge not-flagged">Low Risk</span>;
    }
  };

  const handleFilterChange = (newFilter: EmailFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Email Risk Reviewer</h1>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
          data-testid="filter-all"
        >
          All
        </button>
        <button
          className={`filter-button ${filter === 'pending' ? 'active' : ''}`}
          onClick={() => handleFilterChange('pending')}
          data-testid="filter-pending"
        >
          Pending Review
        </button>
        <button
          className={`filter-button ${filter === 'flagged' ? 'active' : ''}`}
          onClick={() => handleFilterChange('flagged')}
          data-testid="filter-flagged"
        >
          High Risk
        </button>
        <button
          className={`filter-button ${filter === 'not-flagged' ? 'active' : ''}`}
          onClick={() => handleFilterChange('not-flagged')}
          data-testid="filter-not-flagged"
        >
          Low Risk
        </button>
      </div>

      <div className="table-container">
        <table className="email-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>From</th>
              <th>To</th>
              <th>Received Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmails.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '40px' }}>
                  No emails found
                </td>
              </tr>
            ) : (
              filteredEmails.map((email) => (
                <tr key={email.id} data-testid={`email-row-${email.id}`}>
                  <td>
                    <Link
                      href={`/emails/${email.id}`}
                      className="email-link"
                      data-testid={`email-link-${email.id}`}
                    >
                      {email.subject}
                    </Link>
                  </td>
                  <td data-testid={`email-sender-${email.id}`}>{email.sender}</td>
                  <td data-testid={`email-recipient-${email.id}`}>{email.recipient}</td>
                  <td data-testid={`email-date-${email.id}`}>{formatDate(email.received_date)}</td>
                  <td>{getStatusBadge(email.flagged)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

