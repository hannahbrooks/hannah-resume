import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

(function () {
  let devtoolsOpen = false;
  const threshold = 160;
  function detectDevTools() {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if ((widthThreshold || heightThreshold) && !devtoolsOpen) {
      devtoolsOpen = true;
      const cat = `
          /\\_/\\  (
         ( ^.^ ) _)
           \\"/  (     Hello! This is Hannah Brooks' resume site.
         ( | | )
        (__d b__)
      `;
      console.log(cat);
    } else if (!(widthThreshold || heightThreshold) && devtoolsOpen) {
      devtoolsOpen = false;
    }
  }
  window.addEventListener('resize', detectDevTools);
  setInterval(detectDevTools, 1000);
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
