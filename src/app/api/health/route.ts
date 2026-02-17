import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check API service
    const apiHealth = await fetch(`${process.env.API_URL}/health`, {
      cache: 'no-store',
    })
      .then((res) => res.ok)
      .catch(() => false);

    // Check validation service
    const validationHealth = await fetch(`${process.env.VALIDATION_SERVICE_URL}/health`, {
      cache: 'no-store',
    })
      .then((res) => res.ok)
      .catch(() => false);

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        api: apiHealth,
        validation: validationHealth,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Health check failed',
      },
      { status: 503 }
    );
  }
}
