'use client';

import Lottie from 'lottie-react';
import loading from '@/assets/loading.json';

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-max-[720px] h-max-screen">
        <Lottie animationData={loading} />
      </div>
    </div>
  );
}
