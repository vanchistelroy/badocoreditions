import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactPixel from 'react-facebook-pixel'
import './index.css'
import App from './App.jsx'

const PIXEL_ID = '1057835640078985'

ReactPixel.init(PIXEL_ID)
ReactPixel.pageView()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)