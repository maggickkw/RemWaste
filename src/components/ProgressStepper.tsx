import React from 'react';
import { MapPin, Trash2, Truck, FileCheck, Calendar, CreditCard } from 'lucide-react';

interface Step {
  id: string;
  label: string;
  icon: React.ReactNode;
  completed: boolean;
  current: boolean;
}

interface ProgressStepperProps {
  currentStep: number;
}

export const ProgressStepper: React.FC<ProgressStepperProps> = ({ currentStep }) => {
  const steps: Step[] = [
    { id: 'postcode', label: 'Postcode', icon: <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />, completed: currentStep > 0, current: currentStep === 0 },
    { id: 'waste-type', label: 'Waste Type', icon: <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />, completed: currentStep > 1, current: currentStep === 1 },
    { id: 'select-skip', label: 'Select Skip', icon: <Truck className="w-3 h-3 sm:w-4 sm:h-4" />, completed: currentStep > 2, current: currentStep === 2 },
    { id: 'permit', label: 'Permit Check', icon: <FileCheck className="w-3 h-3 sm:w-4 sm:h-4" />, completed: currentStep > 3, current: currentStep === 3 },
    { id: 'date', label: 'Choose Date', icon: <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />, completed: currentStep > 4, current: currentStep === 4 },
    { id: 'payment', label: 'Payment', icon: <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />, completed: currentStep > 5, current: currentStep === 5 },
  ];

  return (
    <div className="w-full bg-gray-900 shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">

        <div className="block sm:hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-xs font-medium text-blue-600">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  steps[currentStep].completed
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : steps[currentStep].current
                    ? 'bg-blue-50 border-blue-600 text-blue-600'
                    : 'bg-gray-50 border-gray-200 text-gray-400'
                }`}
              >
                {steps[currentStep].icon}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {steps[currentStep].label}
            </span>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 transition-all duration-300 ${
                      step.completed
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : step.current
                        ? 'bg-blue-50 border-blue-600 text-blue-600'
                        : 'bg-gray-50 border-gray-200 text-gray-400'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`mt-2 text-xs lg:text-sm font-medium transition-colors duration-300 text-center max-w-20 ${
                      step.completed || step.current ? 'text-blue-600' : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-2 lg:mx-4">
                    <div
                      className={`h-0.5 transition-colors duration-300 ${
                        step.completed ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};