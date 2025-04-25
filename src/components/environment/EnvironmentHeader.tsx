import React from "react";
import { X } from "lucide-react";

interface EnvironmentHeaderProps {
  onClose: () => void;
}

export const EnvironmentHeader: React.FC<EnvironmentHeaderProps> = ({
  onClose,
}) => {
  return (
    <div className="flex w-full max-w-[358px] items-center gap-[40px_45px] justify-between">
      <div className="flex min-w-60 items-center gap-3">
        <div className="bg-blue-900 flex items-center w-10 h-10 px-3 py-2.5 rounded-full">
          <div className="flex w-4 items-center py-0.5">
            <div className="flex min-h-4 w-4 items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/d88b5ad82b9b109122c69f1bc5703a437d33fedb?placeholderIfAbsent=true"
                alt="Environment icon"
                className="w-4 h-4 object-contain"
              />
            </div>
          </div>
        </div>
        <h1 className="text-blue-900 text-xl font-normal leading-none w-[232px]">
          Create new environment
        </h1>
      </div>
      <button
        onClick={onClose}
        className="flex items-center justify-center w-[29px]"
        aria-label="Close"
      >
        <X className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};
