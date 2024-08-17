import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from "react-router-dom"
import { Toaster } from './components/ui/toaster.tsx'
import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";

const queryClient = new QueryClient()

const PAYPAL_OPTIONS: ReactPayPalScriptOptions = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture"
}

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </PayPalScriptProvider>

  </QueryClientProvider>
  ,
)
