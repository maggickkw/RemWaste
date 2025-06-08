import React, { useState } from "react";
import { SkipCard } from "./SkipCard";
import { useSkipData } from "../services/queries/skip-query";
import type { SkipI } from "../types";
import { Loader, ArrowRight } from "lucide-react";



export const SkipSelection: React.FC = () => {
  const [selectedSkipId, setSelectedSkipId] = useState<string | number | null>(null);

  const { data, isLoading } = useSkipData();

  const selectedSkip = data?.find((skip: SkipI) => skip.id === selectedSkipId);


  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <Loader size={50} color="blue" />
      </div>
    );
  }

  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Choose Your Skip Size
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {data?.map((skip: SkipI) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selectedId={selectedSkipId}
              setSelectedId={setSelectedSkipId}
            />
          ))}
        </div>

   
        <div className="text-center text-xs text-gray-500 mb-20">
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
        </div>

      
        {selectedSkip && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {selectedSkip.size} Yard Skip
                    </h4>
                    <p className="text-sm text-gray-400">
                      £{selectedSkip.price_before_vat} 14 day hire
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-white font-medium">
                    Back
                  </button>
                  <button
                    onClick={() => {}}
                    className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center group"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};