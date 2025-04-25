
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ZoneSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const ZoneSelect: React.FC<ZoneSelectProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <div className="flex w-full items-stretch gap-[3px] text-base font-normal whitespace-nowrap pt-0.5 pb-2.5">
        <span className="text-blue-600">Zone</span>
        <span className="text-red-500 leading-none">*</span>
      </div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-white border-blue-200 border mt-2 px-4 py-3 rounded-lg">
          <SelectValue placeholder="Select Zone" />
        </SelectTrigger>
        <SelectContent className="bg-white border-blue-200">
          <SelectItem value="us-east">US East</SelectItem>
          <SelectItem value="us-west">US West</SelectItem>
          <SelectItem value="eu-central">EU Central</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
