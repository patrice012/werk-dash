import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filterContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <BrowserRouter>    
            <App />       
        </BrowserRouter>
      </FilterProvider>
    </QueryClientProvider>
  </StrictMode>
);
