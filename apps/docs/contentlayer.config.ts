import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export type ComponentSlug = 'accordion' | 'button' | 'selector' | 'progress' | 'combobox';

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the page',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(0).join('/'),
    },
  },
}));

const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: `components/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the page',
      required: true,
    },
    intro: {
      type: 'string',
      description: 'The introduction of the page',
      required: true,
    },
    source: {
      type: 'string',
      required: true,
    },
    theme: {
      type: 'string',
      required: true,
    },
    variants: {
      type: 'string',
      required: false,
    },
    storybook: {
      type: 'string',
      required: false,
    },
    polymorphic: {
      type: 'boolean',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}));

const options = {
  // getHighlighter: async () => {
  //   const theme = await loadTheme(path.join(process.cwd(), 'lib/theme.json'));
  //   return await getHighlighter({ theme });
  // },
  theme: 'material-theme-ocean',

  // Keep the background or use a custom background color?
  keepBackground: false,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('bg-yellow-800');
  },
  onVisitHighlightedWord(node: any, id: 'v' | 's' | 'i') {
    node.properties.className = ['word'];

    // `id` will be either 'v', 's', or 'i'.
    // State (v)alue, (s)etter, and (i)nitial value
    if (id) {
      const backgroundColor = {
        v: 'rgb(196 42 94 / 59%)',
        s: 'rgb(0 103 163 / 56%)',
        i: 'rgb(100 50 255 / 35%)',
      }[id];

      const color = {
        v: 'rgb(255 225 225 / 100%)',
        s: 'rgb(175 255 255 / 100%)',
        i: 'rgb(225 200 255 / 100%)',
      }[id];

      // If the word spans across syntax boundaries (e.g. punctuation), remove
      // colors from the child nodes.
      if (node.properties['data-rehype-pretty-code-wrapper']) {
        node.children.forEach((childNode: any) => {
          childNode.properties.style = '';
        });
      }

      node.properties.style = `background-color: ${backgroundColor}; color: ${color};`;
    }
  },
};

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Page, Component],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypeSlug]],
  },
});
