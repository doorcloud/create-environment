import React from "react";
import * as Slider from "@radix-ui/react-slider";

interface ResourceSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
  unit: string;
  unitPlural?: string;
}

export const ResourceSlider: React.FC<ResourceSliderProps> = ({
  label,
  value,
  onChange,
  max,
  unit,
  unitPlural = unit + "s",
}) => {
  return (
    <div className="flex w-full flex-col items-stretch">
      <div className="gap-2.5 text-base text-blue-600 font-normal whitespace-nowrap py-0.5">
        {label}
      </div>
      <div className="bg-neutral-200 border flex h-2 w-full flex-col justify-center mt-[9px] rounded-full border-[rgba(183,181,181,1)] border-solid">
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[value]}
          max={max}
          step={1}
          onValueChange={(values) => onChange(values[0])}
        >
          <Slider.Track className="bg-neutral-200 relative grow h-2 rounded-full">
            <Slider.Range className="absolute bg-[rgba(0,117,255,1)] h-full rounded-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-[18px] h-[18px] bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Resource value"
          />
        </Slider.Root>
      </div>
      <div className="flex w-full items-center gap-[40px_100px] text-sm font-normal justify-between mt-[9px]">
        <div className="flex items-center gap-[5px] text-gray-600 whitespace-nowrap py-px">
          <span className="w-[63px]">Selected:</span>
          <span className="leading-none">{value}</span>
          <span>{value === 1 ? unit : unitPlural}</span>
        </div>
        <div className="text-blue-600 py-px">
          Available: {max} {max === 1 ? unit : unitPlural}
        </div>
      </div>
    </div>
  );
};
