export default {
  '**/*.{ts,tsx,js,jsx}': [
    'prettier --write',
    'cross-env ESLINT_USE_FLAT_CONFIG=true eslint --fix src',
  ],
  '**/*.{md,mdx,yml,json}': ['prettier --write'],
}
