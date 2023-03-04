import { ImageSkeleton } from '../atoms/skeletons/ImageSkeleton';
import { TitleSkeleton } from '../atoms/skeletons/TitleSkeleton';
import { SpanSkeleton } from '../atoms/skeletons/SpanSkeleton';
import { ButtonSkeleton } from '../atoms/skeletons/ButtonSkeleton';
import React from 'react';

export const CardSkeleton = () => (
  <div role="status" className="animate-pulse w-full space-y-8">
    <ImageSkeleton />
    <div className="w-full">
      <div className="flex justify-between">
        <TitleSkeleton />
        <TitleSkeleton width={'w-12'} />
      </div>
      <SpanSkeleton />
      <SpanSkeleton />
      <ButtonSkeleton />
    </div>
  </div>
);
