'use client';  // Required to use React hooks like usePathname

import { usePathname } from 'next/navigation';

export default function PathnameExample() {
  const pathname = usePathname();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Current Path</h2>
      <p>{pathname}</p>
    </div>
  );
}
