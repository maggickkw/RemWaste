import { useState } from "react";
import { ProgressStepper } from "./components/ProgressStepper";
import { SkipSelection } from "./components/SkipSelection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

  const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      // retry: 0,
      retryDelay: 500,
      //  staleTime: 1000 * 60 * 60 * 24, // 24 hours
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      networkMode: 'offlineFirst',
      refetchOnReconnect: 'always',
    },
  },
});;

function App() {

  const [currentStep, setCurrentStep] = useState(2);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-900">
        <ProgressStepper currentStep={currentStep} />
        <main className="pb-8">
          <SkipSelection />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
