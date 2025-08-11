"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PriserPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to ydelser page with priser anchor
    router.replace('/ydelser#priser');
  }, [router]);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-gray-600">Omdirigerer til ydelser og priser...</p>
    </main>
  );
}
