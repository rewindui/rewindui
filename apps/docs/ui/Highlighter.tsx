import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer';
import * as React from 'react';
import colors from 'tailwindcss/colors';

const theme: PrismTheme = {
  plain: {
    color: '#d6deeb',
    backgroundColor: colors.slate[800],
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(162, 191, 252)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted', 'attr-name'],
      style: {
        color: colors.amber[300],
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(99, 119, 119)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: 'rgb(173, 219, 103)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(214, 222, 235)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(247, 140, 108)',
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: 'rgb(130, 170, 255)',
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ['punctuation'],
      style: {
        color: colors.sky[200],
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: 'rgb(199, 146, 234)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: colors.violet[400],
      },
    },
    {
      types: ['tag', 'operator', 'keyword'],
      style: {
        color: colors.lime[300],
      },
    },
    {
      types: ['boolean'],
      style: {
        color: colors.red[400],
      },
    },
    {
      types: ['property'],
      style: {
        color: colors.lime[100],
      },
    },
    {
      types: ['namespace'],
      style: {
        color: 'rgb(178, 204, 214)',
      },
    },
  ],
};

export const Highlighter = ({ code }: { code: string }) => {
  return (
    <Highlight {...defaultProps} code={code} language="tsx" theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="text-left p-6 shadow-md font-mono rounded-l-md text-sm relative h-full"
          style={style}
        >
          {tokens.map((line, i) => {
            const { key, ...rest } = getLineProps({ line, key: i, className: 'table-row' });
            return (
              <div key={key} {...rest}>
                <span className="table-cell">
                  {line.map((token, key) => {
                    const { key: tokenKey, ...rest } = getTokenProps({ token, key });
                    return <span key={tokenKey} {...rest} />;
                  })}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};
