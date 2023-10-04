'use client';
import { Configurator } from '@/ui/Configurator';
import { Image, Tabs } from '@idb-dab/ui-core';
import * as React from 'react';
import Link from 'next/link';

export const Hero = () => {
  const [copying, setCopying] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install @idb-dab/ui-core');
    setCopying(true);
    setTimeout(() => setCopying(false), 1500);
  };

  return (
    <div className="flex flex-wrap md:flex-row items-center overflow-hidden">
      <div className="w-full xl:w-1/2 mx-auto intent-y-0 flex items-center py-20 h-full">
        <div className="w-full flex flex-col gap-8 p-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-700 font-black flex flex-col items-center">
            <span>A fully customizable</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500">
              React-TailwindCSS
            </span>
            <span>component library</span>
          </h1>

          <h2 className="text-lg md:text-2xl text-slate-600 text-center">
            Expressive, variant driven styling and configuration
          </h2>

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap md:flex-row justify-center items-center mx-auto gap-4">
              <Link
                href="/introduction"
                className="flex items-center font-medium text-sm space-x-2 bg-gradient-to-r from-purple-600 hover:from-purple-700 to-purple-500 hover:to-purple-600 text-white border border-purple-600 text-purple-600 py-3 px-5 rounded-lg shadow-lg shadow-purple-200/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M223.7 391.9c-4-56-49.1-100.6-105.3-103.8c21.4-47.9 58.4-126.6 88.8-171.5C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-44.7 30.3-123.1 66.2-171.6 87.2zM424 128a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
                  <path
                    className="opacity-50"
                    d="M118.5 288H24c-8.7 0-16.7-4.7-20.9-12.2s-4.1-16.8 .4-24.2l52.8-86.9C69.3 143.2 92.6 130 117.8 130h80.8c-28.5 45.8-60.7 114.5-80.1 158zM382 313.4v80.8c0 25.2-13.1 48.5-34.6 61.5l-86.9 52.8c-7.4 4.5-16.7 4.7-24.2 .4s-12.2-12.2-12.2-20.9l0-96.2c43.9-19.1 112.4-50.3 158-78.4zM166.5 470C132.3 504.3 66 511 28.3 511.9c-16 .4-28.6-12.2-28.2-28.2C1 446 7.7 379.7 42 345.5c34.4-34.4 90.1-34.4 124.5 0s34.4 90.1 0 124.5zm-46.7-36.4c11.4-11.4 11.4-30 0-41.4s-30-11.4-41.4 0c-10.1 10.1-13 28.5-13.7 41.3c-.5 8 5.9 14.3 13.9 13.9c12.8-.7 31.2-3.7 41.3-13.7z"
                  />
                </svg>
                <span>Get started</span>
              </Link>

              <a
                href="https://github.com/rewindui/rewindui"
                target="_blank"
                className="bg-gradient-to-r from-gray-700 to-black text-sm flex space-x-2 items-center border border-gray-900 text-gray-600 py-3 px-5 rounded-lg shadow-lg shadow-gray-400/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                  height="1em"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <span className="text-white">GitHub</span>
              </a>
            </div>

            <div onClick={handleCopy} className="flex group items-center cursor-copy relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-600 mr-2"
                height="0.75em"
                viewBox="0 0 576 512"
              >
                <path d="M9.4 41.4C-3.1 53.9-3.1 74.1 9.4 86.6L178.7 256 9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0z" />
                <path
                  className="opacity-50"
                  d="M224 448c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32z"
                />
              </svg>
              <span className="text-slate-500 group-hover:text-slate-600 transition-colors">
                npm install @idb-dab/ui-core
              </span>
              <span className="invisible group-hover:visible ml-2 absolute -right-6">
                {copying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-green-600"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-slate-600"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M448 352H288c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H396.1c4.2 0 8.3 1.7 11.3 4.7l67.9 67.9c3 3 4.7 7.1 4.7 11.3V320c0 17.7-14.3 32-32 32zM497.9 81.9L430.1 14.1c-9-9-21.2-14.1-33.9-14.1H288c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V416H256v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32H192V128H64z" />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full xl:w-1/2 pt-4">
        <div className="absolute bottom-0 h-[10rem] w-full z-40 bg-gradient-to-t from-neutral-900"></div>
        <div className="flex md:items-end -top-10 left-6 md:-left-40 md:bottom-32 absolute">
          <span className="italic text-slate-600">Give it a go</span>
          <Image
            className="h-10 ml-2 mt-2 md:mt-0 md:mb-2 rotate-90 md:rotate-0"
            src="images/curved-arrow.svg"
            alt="Curved arrow pointing to configurator"
          />
        </div>

        <Tabs defaultTab="accordion" method="unmount" size="sm" className="w-full">
          <Tabs.List className="mb-4">
            <Tabs.Tab anchor="accordion">Accordion</Tabs.Tab>
            <Tabs.Tab anchor="selector">Selector</Tabs.Tab>
            <Tabs.Tab anchor="progress">Progress</Tabs.Tab>
            <Tabs.Tab anchor="button">Button</Tabs.Tab>
            <Tabs.Tab anchor="combobox" className="hidden md:visible">
              Combobox
            </Tabs.Tab>
            <Tabs.Tab anchor="dummy" className="hidden md:visible" disabled>
              20+ components...
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Content anchor="accordion">
            <Configurator component="accordion" background="none" />
          </Tabs.Content>

          <Tabs.Content anchor="selector">
            <Configurator component="selector" background="none" />
          </Tabs.Content>

          <Tabs.Content anchor="progress">
            <Configurator component="progress" background="none" />
          </Tabs.Content>

          <Tabs.Content anchor="button">
            <Configurator component="button" background="none" />
          </Tabs.Content>

          <Tabs.Content anchor="combobox">
            <Configurator component="combobox" background="none" />
          </Tabs.Content>
        </Tabs>
      </div>
    </div>
  );
};
