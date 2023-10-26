import { useEffect, useState } from 'react'
import { highlighter } from '@lib/highlighter';

export const CodeBlock = ({ code }: { code?: string }) => {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    const init = async () => {
      const output = code ? await highlighter(code, 'tsx') : '';
      setHtml(output);
    }

    init();
  }, [code]);

  return (<div
    dangerouslySetInnerHTML={{ __html: html }}
    className="text-[0.85rem] px-6 py-5 bg-[#0d1117] rounded-md shadow-md shadow-gray-400/75 mt-5 font-mono font-normal antialiased" />);
};
