"use client";
import { Plus, X } from "lucide-react";
import { useState, useEffect } from "react";

const SeriesCard = ({ manufacturer, onAddSeries, onDeleteSeries }) => {
  const [seriesList, setSeriesList] = useState(manufacturer.series || []);

  useEffect(() => {
    setSeriesList(manufacturer.series || []);
  }, [manufacturer]);

  const handleDeleteSeries = (series) => {
    const updated = seriesList.filter((s) => s !== series);
    setSeriesList(updated);
    onDeleteSeries(manufacturer.name, series);
  };

  return (
    <div className="max-w-[625px] w-full h-fit min-h-[210px] bg-white px-3 py-2 rounded-lg shadow-md mt-2.5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="xl:text-lg font-medium">
          Series For ({manufacturer.name})
        </h3>
        <button
          onClick={() => onAddSeries(manufacturer.name)}
          className="bg-[#21BBA2] text-white rounded-full size-8 flex items-center justify-center"
        >
          <Plus className="size-5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {seriesList.length > 0 ? (
          seriesList.map((s, i) => (
            <div
              key={i}
              className="bg-[#F5F5F5] text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 custom-shadow-xl"
            >
              {s}
              <button type="button" onClick={() => handleDeleteSeries(s)}>
                <X size={14} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No series added yet.</p>
        )}
      </div>
    </div>
  );
};

export default SeriesCard;
