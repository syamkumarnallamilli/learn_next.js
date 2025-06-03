// app/order/success/page.tsx
import { CheckCircle } from 'lucide-react';

import Link from 'next/link';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-6">
      <CheckCircle size={64} className="text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your order is being processed and will be delivered soon.
      </p>

      <Link href="/">
        <button className="bg-green-600 hover:bg-green-700 text-white">Go to Home</button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
