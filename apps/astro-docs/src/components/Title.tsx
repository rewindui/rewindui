import type { FC } from 'react';

export const Title: FC = (props: any) => {
  return (
    <h1
      id={props.id}
      className="group mt-8 text-3xl text-gray-800 font-semibold scroll-mt-[7rem]"
      {...props}
    >
      <a
        href={`#${props.id}`}
        className="group-hover:before:visible before:invisible before:content-['#'] before:text-purple-200 before:mr-1 before:-ml-6"
      >
        {props.children}
      </a>
    </h1>
  );
};
