import React from "react";
import { Switch } from "@radix-ui/react-switch";

interface NameInputProps {
  value: string;
  onChange: (value: string) => void;
  isProduction: boolean;
  onProductionChange: (value: boolean) => void;
}

export const NameInput: React.FC<NameInputProps> = ({
  value,
  onChange,
  isProduction,
  onProductionChange,
}) => {
  return (
    <div className="w-full">
      <div className="flex w-full items-stretch gap-5 justify-between">
        <div className="flex gap-[3px] text-base font-normal whitespace-nowrap pt-0.5 pb-2.5">
          <span className="text-blue-600">Name</span>
          <span className="text-red-500 leading-none">*</span>
        </div>
        <div className="flex items-stretch gap-4">
          <span className="text-blue-600 text-base font-normal leading-none">
            Production
          </span>
          <Switch
            checked={isProduction}
            onCheckedChange={onProductionChange}
            className="bg-gray-300 relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span
              className={`${
                isProduction ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border-blue-200 border w-full h-[50px] mt-4 rounded-lg border-solid px-4"
        placeholder="Enter environment name"
        required
      />
    </div>
  );
};
