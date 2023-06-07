'use client';
import { Configurator } from '@/ui/Configurator';
import { Tabs } from '@rewind-ui/core';
import * as React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="flex flex-wrap md:flex-row items-center overflow-hidden">
      <div className="w-full xl:w-1/2 mx-auto intent-y-0 flex items-center py-20 h-full">
        <div className="w-full flex flex-col gap-8 p-2">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-slate-700 font-black flex flex-col items-center">
            <span>A fully customizable</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-500">
              React-TailwindCSS
            </span>
            <span>component library</span>
          </h1>

          <h2 className="md:text-2xl text-slate-600 text-center">
            Expressive, variant driven styling and configuration
          </h2>

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

            <div className="bg-gradient-to-r from-gray-50 to-white font-mono text-sm flex space-x-2 items-center border border-gray-200 text-gray-600 py-3 px-5 rounded-lg shadow-lg shadow-neutral-100/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-600"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M9.4 41.4C-3.1 53.9-3.1 74.1 9.4 86.6L178.7 256 9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0z" />
                <path
                  className="opacity-50"
                  d="M224 448c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32z"
                />
              </svg>
              <span>npm install @rewind-ui/core</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full xl:w-1/2 pt-4">
        <div className="absolute bottom-0 h-[15rem] w-full z-50 bg-gradient-to-t from-neutral-900"></div>
        <div className="flex md:items-end -top-10 left-6 md:-left-40 md:bottom-32 absolute">
          <span className="italic text-slate-600">Give it a go</span>
          <img
            className="h-10 ml-2 mt-2 md:mt-0 md:mb-2 rotate-90 md:rotate-0"
            src="images/curved-arrow.svg"
            alt="Curved arrow pointing to configurator"
          />
        </div>

        <Tabs defaultTab="accordion" size="sm" className="w-full">
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
