import { NextResponse } from 'next/server';

let simulatedData = {
    user: { name: "Original Name" },
    cart: { items: 0 }
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'user') {
        simulatedData.user.name = "Updated Name " + Date.now();
    } else if (type === 'cart') {
        simulatedData.cart.items += 1;
    }

    return NextResponse.json(simulatedData);
}
