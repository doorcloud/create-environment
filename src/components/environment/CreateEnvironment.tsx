import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EnvironmentHeader } from "./EnvironmentHeader";
import { NameInput } from "./NameInput";
import { ZoneSelect } from "./ZoneSelect";
import { ResourceSlider } from "./ResourceSlider";

interface EnvironmentFormData {
  name: string;
  zone: string;
  memory: number;
  cpu: number;
  storage: number;
}

interface CreateEnvironmentProps {
  onClose: () => void;
}

export const CreateEnvironment: React.FC<CreateEnvironmentProps> = ({
  onClose,
}) => {
  const { register, handleSubmit, setValue, watch } =
    useForm<EnvironmentFormData>({
      defaultValues: {
        name: "",
        zone: "",
        memory: 0,
        cpu: 0,
        storage: 0,
      },
    });

  const [isProduction, setIsProduction] = useState(false);

  const onSubmit = (data: EnvironmentFormData) => {
    console.log("Form submitted:", { ...data, isProduction });
  };

  return (
    <div className="bg-white max-w-[480px] w-full overflow-hidden mx-auto rounded-lg border-[rgba(206,212,218,1)] border-solid border-2">
      <div className="w-full">
        <div className="bg-gray-50 min-h-[844px] w-full pt-4 pb-[215px] px-4">
          <EnvironmentHeader onClose={onClose} />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[358px] mt-8"
          >
            <NameInput
              value={watch("name")}
              onChange={(value) => setValue("name", value)}
              isProduction={isProduction}
              onProductionChange={setIsProduction}
            />

            <div className="mt-6">
              <ZoneSelect
                value={watch("zone")}
                onChange={(value) => setValue("zone", value)}
              />
            </div>

            <div className="mt-6">
              <ResourceSlider
                label="Memory"
                value={watch("memory")}
                onChange={(value) => setValue("memory", value)}
                max={16}
                unit="Gi"
              />
            </div>

            <div className="mt-6">
              <ResourceSlider
                label="CPU"
                value={watch("cpu")}
                onChange={(value) => setValue("cpu", value)}
                max={4}
                unit="core"
              />
            </div>

            <div className="mt-6">
              <ResourceSlider
                label="Storage"
                value={watch("storage")}
                onChange={(value) => setValue("storage", value)}
                max={100}
                unit="Gi"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-base text-white font-normal text-center mt-6 px-[153px] py-3.5 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
