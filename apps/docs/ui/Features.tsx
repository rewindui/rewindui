'use client';
import { Card } from '@rewind-ui/core';
import * as React from 'react';

export const Features = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-medium text-slate-700 text-center">Features</h1>
        <h3 className="text-base md:text-xl text-slate-500 text-center">
          Aiming to become the most feature-rich React UI component library
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <Card className="shadow-neutral-200" radius="lg" shadow="sm">
          <Card.Header>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 fill-purple-500"
                viewBox="0 0 512 512"
              >
                <path
                  className=""
                  d="M32 0C14.3 0 0 14.3 0 32V416c0 53 43 96 96 96s96-43 96-96V32c0-17.7-14.3-32-32-32H32zm96 64v64H64V64h64zM64 192h64v64H64V192zM96 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                />
                <path
                  className="opacity-50"
                  d="M64 64v64h64V64H64zM173.1 473.1c5.9-3.7 11.4-8.1 16.5-13.2L435.2 214.4c12.5-12.5 12.5-32.8 0-45.3L344.7 78.6c-12.5-12.5-32.8-12.5-45.3 0L192 186V416c0 19.9-6 38.4-16.4 53.7c-.8 1.2-1.6 2.3-2.5 3.5zM480 512c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H374.8l-192 192L480 512zM128 192H64v64h64V192z"
                />
              </svg>

              <div className="flex flex-col">
                <span className="text-gray-700">Pre-styled</span>
                <span className="text-gray-400 text-sm">Nicely crafted components</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="text-gray-600">
            We all love headless UI libraries, but sometimes we just want to get started quickly.
            Rewind-UI comes with pre-styled components that you can use out of the box.
          </Card.Body>
        </Card>

        <Card className="shadow-neutral-200" radius="lg" shadow="sm">
          <Card.Header>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 fill-purple-500"
                viewBox="0 0 512 512"
              >
                <path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-96 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                <path
                  className="opacity-50"
                  d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-700">Themeable</span>
                <span className="text-gray-400 text-sm">CVA based styling files</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="text-gray-600">
            Using the CVA library, Rewind-UI provides a themeable styling system that allows you to
            easily customize the look and feel of your components.
          </Card.Body>
        </Card>

        <Card className="shadow-neutral-200" radius="lg" shadow="sm">
          <Card.Header>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 fill-purple-500"
                viewBox="0 0 512 512"
              >
                <path d="M256 80a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM129.9 182.5c5.2-12.2 19.3-17.8 31.5-12.6l11.9 5.1c26.1 11.2 54.2 17 82.7 17s56.5-5.8 82.7-17l11.9-5.1c12.2-5.2 26.3 .4 31.5 12.6s-.4 26.3-12.6 31.5l-11.9 5.1c-17.3 7.4-35.2 12.9-53.6 16.3v50.1c0 4.3 .7 8.6 2.1 12.6l28.7 86.1c4.2 12.6-2.6 26.2-15.2 30.4s-26.2-2.6-30.4-15.2l-24.4-73.2c-1.3-3.8-4.8-6.4-8.8-6.4s-7.6 2.6-8.8 6.4l-24.4 73.2c-4.2 12.6-17.8 19.4-30.4 15.2s-19.4-17.8-15.2-30.4l28.7-86.1c1.4-4.1 2.1-8.3 2.1-12.6V235.5c-18.4-3.5-36.3-8.9-53.6-16.3l-11.9-5.1c-12.2-5.2-17.8-19.3-12.6-31.5z" />
                <path
                  className="opacity-50"
                  d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-700">Accessible</span>
                <span className="text-gray-400 text-sm">WAI-ARIA compliant</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="text-gray-600">
            Rewind-UI is built with accessibility in mind. All components are WAI-ARIA compliant and
            follow the best practices for accessibility, including keyboard interactions.
          </Card.Body>
        </Card>

        <Card className="shadow-neutral-200" radius="lg" shadow="sm">
          <Card.Header>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 fill-purple-500"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H352 256 96c-17.7 0-32 14.3-32 32s14.3 32 32 32H256h96 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM264 200l-38.8 16.6c-6.5 2.8-6.5 11.9 0 14.7L264 248l16.6 38.8c2.8 6.5 11.9 6.5 14.7 0L312 248l38.8-16.6c6.5-2.8 6.5-11.9 0-14.7L312 200l-16.6-38.8c-2.8-6.5-11.9-6.5-14.7 0L264 200zM168.8 78.3L160 96l-17.7 8.8c-5.9 2.9-5.9 11.4 0 14.3L160 128l8.8 17.7c2.9 5.9 11.4 5.9 14.3 0L192 128l17.7-8.8c5.9-2.9 5.9-11.4 0-14.3L192 96l-8.8-17.7c-2.9-5.9-11.4-5.9-14.3 0z" />
                <path
                  className="opacity-50"
                  d="M64 416c0-17.7 14.3-32 32-32H416v64H96c-17.7 0-32-14.3-32-32z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-gray-700">Interactive documentation</span>
                <span className="text-gray-400 text-sm">Detailed examples and code snippets</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="text-gray-600">
            Rewind-UI comes with a detailed documentation that includes interactive examples and
            code snippets for each component. You can also find a list of all the available props
            and variants.
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
