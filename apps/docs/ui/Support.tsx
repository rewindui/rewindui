'use client';
import * as React from 'react';

export const Support = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="flex flex-col w-full lg:w-1/2 gap-4">
        <h1 className="text-3xl md:text-3xl font-medium text-slate-700 text-center">
          Support the project
        </h1>
        <h3 className="text-xl md:text-xl text-slate-500 text-center">
          We are still in beta, but you can help us grow!
        </h3>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
        <p className="text-lg text-slate-600 text-center">
          If you see value in this project, please consider supporting it.
        </p>
        <ul className="flex flex-col md:flex-row items-center gap-2">
          <li className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-purple-500"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path
                className="fa-primary"
                d="M544 32c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32zM160 384c0 53 43 96 96 96c46.8 0 85.8-33.5 94.3-77.8L303.7 389c-2.5 24.2-22.9 43-47.7 43c-26.5 0-48-21.5-48-48c0-7.4 1.7-14.5 4.7-20.8L166.2 350c-4 10.6-6.2 22-6.2 34z"
              />
              <path
                className="opacity-25"
                d="M64 190.9L512 64V448L64 321.1C63.4 338.2 49.3 352 32 352c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32c17.3 0 31.4 13.8 32 30.9z"
              />
            </svg>
            <span className="text-slate-500">Spread the word</span>
          </li>
          <li className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-purple-500"
              height="1em"
              viewBox="0 0 576 512"
            >
              <path d="M213.4 157.4c-8.8-17.9-34.3-17.9-43.1 0l-46.3 94L20.5 266.5C.9 269.3-7 293.5 7.2 307.4l74.9 73.2L64.5 483.9c-3.4 19.6 17.2 34.6 34.8 25.3l92.6-48.8 92.6 48.8c17.6 9.3 38.2-5.7 34.8-25.3L301.6 380.6l74.9-73.2c14.2-13.9 6.4-38.1-13.3-40.9L259.7 251.4l-46.3-94z" />
              <path
                className="opacity-25"
                d="M312 104l13.8 48.3c1.3 4.6 5.5 7.7 10.2 7.7s8.9-3.1 10.2-7.7L360 104l48.3-13.8c4.6-1.3 7.7-5.5 7.7-10.2s-3.1-8.9-7.7-10.2L360 56 346.2 7.7C344.9 3.1 340.7 0 336 0s-8.9 3.1-10.2 7.7L312 56 263.7 69.8c-4.6 1.3-7.7 5.5-7.7 10.2s3.1 8.9 7.7 10.2L312 104zM428.8 243.2l11 38.6c1 3.6 4.4 6.2 8.2 6.2s7.1-2.5 8.2-6.2l11-38.6 38.6-11c3.6-1 6.2-4.4 6.2-8.2s-2.5-7.1-6.2-8.2l-38.6-11-11-38.6c-1-3.6-4.4-6.2-8.2-6.2s-7.1 2.5-8.2 6.2l-11 38.6-38.6 11c-3.6 1-6.2 4.4-6.2 8.2s2.5 7.1 6.2 8.2l38.6 11z"
              />
            </svg>
            <span className="text-slate-500">Star Rewind-UI repo on GitHub</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
