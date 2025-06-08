import React, { useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import type { SkipI } from '../types';
import SkipImage from '../assets/skip.jpg';
import Skip20Image from '../assets/skip20.jpg';

interface SkipCardProps {
  skip: SkipI;
  selectedId: string | number | null;
  setSelectedId: (selectedId: string | number | null) => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({ skip, selectedId, setSelectedId }) => {
  const isSelected = selectedId === skip.id;
  
  const handleSelect = useCallback(() => {
    if (isSelected) {
      setSelectedId(null); // Deselect if already selected
    } else {
      setSelectedId(skip.id); // Select this skip
    }
  }, [skip.id, isSelected, setSelectedId]);
 
  return (
    <div className={`relative rounded-2xl shadow-lg border transition-all duration-300 overflow-hidden group ${
      isSelected 
        ? 'bg-gray-800 border-blue-500 shadow-xl ring-2 ring-blue-400' 
        : 'bg-gray-800 border-gray-700 hover:shadow-xl hover:border-gray-600'
    }`}>
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
            {skip.size} Yards
          </span>
        </div>
        
        {!skip.allowed_on_road && (
          <div className="absolute bottom-4 left-4 z-10">
            <span className="bg-yellow-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg flex items-center">
              <span className="mr-1">⚠</span>
              Not Allowed On The Road
            </span>
          </div>
        )}
        
        <img
          src={skip?.size < 20 ? SkipImage : Skip20Image}
          alt={skip.postcode}
          className="w-full h-48 sm:h-56 object-cover"
        />
      </div>
     
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{skip.size} Yard Skip</h3>
        <p className="text-gray-400 text-sm mb-6">{skip.hire_period_days} day hire period</p>
       
        <div className="mb-6">
          <div className="text-3xl sm:text-4xl font-bold text-blue-400">
            £{skip.price_before_vat}
          </div>
        </div>
       
        <button
          onClick={handleSelect}
          className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group ${
            isSelected
              ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
              : 'bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white'
          }`}
        >
          <span className="text-base">{isSelected ? "Selected" : "Select This Skip"}</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};