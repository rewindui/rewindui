'use client';
import { CustomSandpack } from '@/ui/configurators/CustomSandpack';
import * as React from 'react';

export const ConfigurationTheme = () => {
  const code = `function App() {
  const defaultTheme = useTheme();

  const themeContext: ThemeContextType = {
    theme: {
      components: {
        ...defaultTheme.components,
        Alert: alertStyles,
      }
    },
  };

  return (
    <div className="App">
      <ThemeProvider value={themeContext}>
        <Alert>This is a branded Alert!</Alert>
      </ThemeProvider>
    </div>
  );
}

export default App;`;

  return (
    <div className="flex flex-col">
      <div className="flex ml-auto items-center text-purple-600 text-2xl font-black justify-center border-4 border-purple-50 shadow shadow-purple-200 rounded-full bg-gradient-to-bl from-purple-100 to-purple-200 p-2 w-16 h-16 mb-4">
        4.
      </div>

      <div className="flex gap-6">
        <div className="w-1/3">
          <CustomSandpack>{code}</CustomSandpack>
        </div>

        <div className="w-2/3">
          <h4 className="font-semibold text-xl text-slate-700 mb-2">Customize through Variants</h4>

          <p className="text-lg text-slate-600">
            All components are highly customizable through parameters. The end styles of each
            component are a result of the given parameters or their combinations.
          </p>
        </div>
      </div>
    </div>
  );
};
