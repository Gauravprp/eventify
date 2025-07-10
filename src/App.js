import React from 'react';
import { createRoot } from 'react-dom/client';
import RouterApp from './RouterApp';


function App() {
  return <RouterApp />;
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
