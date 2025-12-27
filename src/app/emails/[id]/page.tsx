'use client';

import { useEmailContext } from '@/contexts/EmailContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function EmailDetailPage() {
  const params = useParams();
  const { getEmailById, flagEmail } = useEmailContext();
  const emailId = params.id as string;
  const email = getEmailById(emailId);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleFlagClick = (flagged: boolean) => {
    if (email) {
      flagEmail(email.id, flagged);
    }
  };

  if (!email) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Email not found</h2>
          <p>The email you are looking for does not exist.</p>
          <Link href="/" className="back-button" style={{ marginTop: '20px' }}>
            Back to Email List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Link href="/" className="back-button" data-testid="back-button">
        ← Back to Email List
      </Link>

      <div className="detail-container" data-testid="email-detail">
        <div className="detail-header">
          <h1 data-testid="email-subject">{email.subject}</h1>
        </div>

        <div className="detail-meta">
          <div className="detail-meta-item">
            <span className="detail-meta-label">From:</span>
            <span className="detail-meta-value" data-testid="email-sender">
              {email.sender}
            </span>
          </div>
          <div className="detail-meta-item">
            <span className="detail-meta-label">To:</span>
            <span className="detail-meta-value" data-testid="email-recipient">
              {email.recipient}
            </span>
          </div>
          <div className="detail-meta-item">
            <span className="detail-meta-label">Received:</span>
            <span className="detail-meta-value" data-testid="email-date">
              {formatDate(email.received_date)}
            </span>
          </div>
        </div>

        <div className="detail-body" data-testid="email-body">
          {email.body}
        </div>

        <div className="detail-actions">
          <button
            className="action-button high-risk"
            onClick={() => handleFlagClick(true)}
            disabled={email.flagged === true}
            data-testid="flag-high-risk-button"
          >
            High Risk
          </button>
          <button
            className="action-button not-high-risk"
            onClick={() => handleFlagClick(false)}
            disabled={email.flagged === false}
            data-testid="flag-not-high-risk-button"
          >
            Low Risk
          </button>
        </div>
      </div>
    </div>
  );
}

