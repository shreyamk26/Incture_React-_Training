// main.jsx

//  Import StrictMode (optional) for highlighting potential problems in development
import { StrictMode } from 'react'
import './index.css'

// createRoot is the modern React 18+ way to render your app
import { createRoot } from 'react-dom/client'

// Import the Redux store you created in your project (usually inside redux/store.js)
// import store from './redux/store.js'

// Provider is a special component from react-redux 
//    It makes the Redux store available to your entire app
import { Provider } from 'react-redux'

// Import the main App component (your application entry point)
import App from './App.jsx'

import store from './new_redux/store.js'

// Attach your React app to the root <div> in index.html
//    and wrap <App /> with <Provider> so all components can access the Redux store
createRoot(document.getElementById('root')).render(
  
  // Provider shares the Redux store with all components inside App
  <Provider store={store}>
    <App />
  </Provider>
)
