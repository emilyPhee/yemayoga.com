import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    // This Pages Router app uses React 18 without the React Compiler.
    // Keep the existing effect patterns during the deployment migration.
    rules: {
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  globalIgnores(['.next/**', '.netlify/**', 'out/**', 'build/**']),
]);
