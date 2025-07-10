import React from 'react';
import { createRoot } from 'react-dom/client';

import RouterApp from './RouterApp';
import WhatsAppButton from './components/WhatsAppButton';   // ⬅️ import the button

function App() {
  return (
    <>
      <RouterApp />
      {/* Floating WhatsApp button (bottom‑right, always on every page) */}
      <WhatsAppButton />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
