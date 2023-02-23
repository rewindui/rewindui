module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-rewindui`
  extends: ["rewindui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
