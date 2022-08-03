import React from 'react';

export interface ResetProps {
  height: string;
  width: string;
  fontSize: string;
  onClick: () => void;
}

export const ResetButton = ({
  height,
  width,
  fontSize,
  onClick,
}: ResetProps) => {
  const CameraIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-slate-900"
      style={{ width: `${width}`, height: `${height}` }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
    </svg>
  );

  return (
    <div className="bg-white rounded-lg inline-block text-slate-900 cursor-pointer shadow-md">
      <div
        className="flex py-2 px-4 items-center align-middle self-center"
        onClick={onClick}
      >
        <div>{CameraIcon}</div>
        <div
          className="ml-2 hidden sm:inline-block"
          style={{ fontSize: `${fontSize}` }}
        >
          Reset
        </div>
      </div>
    </div>
  );
};
