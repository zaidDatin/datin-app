'use client';

import { useEffect, useState } from 'react';

interface HealthStatus {
  status: string;
  timestamp: string;
  services: {
    api: boolean;
    validation: boolean;
  };
}

export default function Home() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        setHealth(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="container">
      <h1>Datin Platform</h1>
      <p>Data Integration and Validation Platform</p>

      {loading ? (
        <p>Loading health status...</p>
      ) : health ? (
        <div className="health-status">
          <h2>System Health</h2>
          <p>Status: <strong>{health.status}</strong></p>
          <p>Timestamp: {health.timestamp}</p>
          <ul>
            <li>API Service: {health.services.api ? '✓ Online' : '✗ Offline'}</li>
            <li>Validation Service: {health.services.validation ? '✓ Online' : '✗ Offline'}</li>
          </ul>
        </div>
      ) : (
        <p>Unable to fetch health status</p>
      )}
    </main>
  );
}
