import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret');
    const path = request.nextUrl.searchParams.get('path');

    if (secret !== process.env.REVALIDATION_SECRET) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    if (!path) {
        return NextResponse.json({ message: 'Path is required' }, { status: 400 });
    }

    revalidatePath(path);

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
