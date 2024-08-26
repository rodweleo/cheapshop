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
import { Provider } from 'react-redux';
import store from './store.ts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@algolia/autocomplete-theme-classic';


const queryClient = new QueryClient()

const PAYPAL_OPTIONS: ReactPayPalScriptOptions = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "USD",
}

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <Provider store={store}>
        <BrowserRouter>
          <Toaster />
          <App />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </PayPalScriptProvider>
  </QueryClientProvider>
  ,
)
