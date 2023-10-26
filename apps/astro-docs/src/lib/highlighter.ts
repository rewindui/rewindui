import { getHighlighter, setCDN } from 'shiki';
import type { Highlighter, Lang } from 'shiki';

setCDN('/assets/shiki/')

const highlighterPromise: Promise<Highlighter> = getHighlighter({
  theme: 'github-dark',
  langs: ['tsx'],
  paths: {
    wasm: 'wasm/',
  }
});

export async function highlighter(code: string, language: Lang) {
  const highlighter: Highlighter = await highlighterPromise;

  return highlighter.codeToHtml(code, { lang: language })
}
