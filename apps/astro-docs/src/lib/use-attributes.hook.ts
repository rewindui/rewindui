export function useAttributes(state: any, defaultProps: any) {
  const attributes = [];

  for (const key of Object.keys(state)) {
    if (state[key] && state[key] !== defaultProps[key]) {
      attributes.push(`${key}="${state[key]}"`);
    }
  }

  if (attributes.length) {
    attributes.unshift(null);
  }

  return attributes;
}
