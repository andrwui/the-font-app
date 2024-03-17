import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/fonts/geist.css'
import './styles/fonts/geist-mono.css'
import './styles/index.css'
import './styles/specifics.css'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from 'components/ErrorBoundary.tsx'
// Main React component, just renders the <App /> component

if (import.meta.env.MODE !== 'production') {
  window.dev = true
} else {
  window.dev = false
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
)
