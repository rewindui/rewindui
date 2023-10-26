import { Button } from '@rewind-ui/core';

export const ComponentLinks = (props: any) => {
  const { source, theme, variants } = props;
  const config = {
    github: {
      repo_url: 'https://github.com/rewindui/rewindui/tree/main/packages/core/src',
      component_dir: 'components',
      theme_dir: 'theme/styles',
      variants_dir: 'theme/variants',
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {source && (
        <Button
          as="a"
          href={`${config.github.repo_url}/${config.github.component_dir}/${source}`}
          target="_blank"
          color="white"
          size="sm"
          shadow="sm"
        >
          <img
            src="/github.svg"
            className="mr-1.5"
            height={14}
            width={14}
            alt="Open source code"
          />
          <span>Source code</span>
        </Button>
      )}

      {theme && (
        <Button
          as="a"
          href={`${config.github.repo_url}/${config.github.theme_dir}/${theme}`}
          target="_blank"
          color="white"
          size="sm"
          shadow="sm"
        >
          <img
            src="/github.svg"
            className="mr-1.5"
            height={14}
            width={14}
            alt="Open source code"
          />
          <span>Theme</span>
        </Button>
      )}

      {variants && (
        <Button
          as="a"
          href={`${config.github.repo_url}/${config.github.variants_dir}/${variants}`}
          target="_blank"
          color="white"
          size="sm"
          shadow="sm"
        >
          <img
            src="/github.svg"
            className="mr-1.5"
            height={14}
            width={14}
            alt="Open source code"
          />
          <span>Variants</span>
        </Button>
      )}
    </div>
  );
};
