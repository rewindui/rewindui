import type { FC } from 'react'
import { useEffect, useState } from 'react'

type TOCProps = {
  headings: any;
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | undefined | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -90% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

export const TOC: FC<TOCProps> = (props: TOCProps) => {
  const headings = props.headings.filter((heading: any) => heading.depth <= 2);
  const activeId = useActiveItem(headings.map((heading: any) => heading.slug));

  return (<div className="flex flex-col gap-4">
    <h2 className="text-base font-semibold text-neutral-600">Table of Contents</h2>
    <ul className="flex flex-col gap-y-1 border-l-2 border-purple-50 text-sm">
      {headings.map((heading: any) => (
        <li
          key={heading.slug}
          style={{ paddingLeft: `${(heading.depth - 1) * 0.25 + 0.75}rem` }}
          className={`${activeId === heading.slug ? 'text-purple-500 border-purple-600 bg-purple-50/50' : 'text-neutral-600 border-purple-50'} py-1.5 -ml-0.5 flex items-center border-l-2`}>
          {heading.depth === 2 && <span className={`${activeId === heading.slug ? 'bg-purple-300' : 'bg-neutral-300'} w-1 h-1 mr-2 inline-block rounded-full`} />}
          <a href={`#${heading.slug}`}>{heading.text}</a>
        </li>
      ))}
    </ul>
  </div>);
};
