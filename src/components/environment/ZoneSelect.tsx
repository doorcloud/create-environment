import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

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
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className="bg-white border-blue-200 border flex w-full items-center justify-between mt-2 px-4 py-3 rounded-lg border-solid"
          aria-label="Zone"
        >
          <Select.Value placeholder="Select Zone" />
          <Select.Icon>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="bg-white border border-blue-200 rounded-lg shadow-lg">
            <Select.Viewport className="p-2">
              <Select.Item
                value="us-east"
                className="relative flex items-center px-8 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md cursor-pointer outline-none"
              >
                <Select.ItemText>US East</Select.ItemText>
              </Select.Item>
              <Select.Item
                value="us-west"
                className="relative flex items-center px-8 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md cursor-pointer outline-none"
              >
                <Select.ItemText>US West</Select.ItemText>
              </Select.Item>
              <Select.Item
                value="eu-central"
                className="relative flex items-center px-8 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md cursor-pointer outline-none"
              >
                <Select.ItemText>EU Central</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
