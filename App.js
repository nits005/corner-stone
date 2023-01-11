import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import Routes from './app/Routes';

export default function App() {
  return (
    <TailwindProvider>
      < Routes />
    </TailwindProvider>
  );
}
