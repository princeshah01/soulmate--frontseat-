import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId="437935142696-88omncf6297qomivju8nl8uklt15ui6h.apps.googleusercontent.com">

    <App />
</GoogleOAuthProvider>

)
