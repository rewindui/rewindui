export function codeProps(attributes: (string | null)[]) {
  const filteredAttributes = attributes.filter(Boolean);
  return filteredAttributes.length ? ` \n  ${filteredAttributes.join('\n  ')}\n` : '';
}
