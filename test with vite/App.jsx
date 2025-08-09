import { useState } from 'react'

import './App.css'

// to test :  https://dev.to/teyim/effortless-testing-setup-for-react-with-vite-typescript-jest-and-react-testing-library-1c48
// then install : npm install -D jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event
// step2: create jest.setup.js
// step 3: create jest.config.js
// step 4: then install babel-jest : >npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer  (this is availabel in 


export default function App() {
  return (
    <div>
      <h1>Hello, Testing World!</h1>
    </div>
  );
}
