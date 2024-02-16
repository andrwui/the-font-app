import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/fonts/geist.css'
import './styles/fonts/geist-mono.css'
import './styles/index.css'
import './styles/colors.css'
import './styles/specifics.css'
import { BrowserRouter } from 'react-router-dom'

// Main React component, just renders the <App /> component

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
