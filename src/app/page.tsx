import { Suspense } from 'react';
import Test from './_components/Test';

export default function Home() {
  return (
    <Suspense>
      <Test/>
    </Suspense>
  );
}
