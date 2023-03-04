import React, { FC } from 'react';
import clsx from 'clsx';

interface TitleSkeletonProps {
  width?: string;
}

export const TitleSkeleton: FC<TitleSkeletonProps> = ({ width }) => (
  <div
    className={clsx(
      'h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4',
      width ? width : 'w-48'
    )}
  ></div>
);
