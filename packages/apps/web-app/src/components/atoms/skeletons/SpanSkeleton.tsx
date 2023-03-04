import React, { FC } from 'react';
import clsx from 'clsx';

interface SpanSkeletonProps {
  maxWidth?: string;
}

export const SpanSkeleton: FC<SpanSkeletonProps> = ({ maxWidth }) => (
  <div
    className={clsx(
      'h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5',
      maxWidth && `max-w-[maxWidth]`
    )}
  ></div>
);
