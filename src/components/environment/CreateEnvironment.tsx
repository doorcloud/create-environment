
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EnvironmentHeader } from "./EnvironmentHeader";
import { NameInput } from "./NameInput";
import { ZoneSelect } from "./ZoneSelect";
import { ResourceSlider } from "./ResourceSlider";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EnvironmentFormData {
  name: string;
  zone: string;
  projectId: string;
  memory: number;
  cpu: number;
  storage: number;
}

interface CreateEnvironmentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateEnvironment: React.FC<CreateEnvironmentProps> = ({
  isOpen,
  onClose,
}) => {
  const { register, handleSubmit, setValue, watch } =
    useForm<EnvironmentFormData>({
      defaultValues: {
        name: "",
        zone: "",
        projectId: "",
        memory: 0,
        cpu: 0,
        storage: 0,
      },
    });

  const [isProduction, setIsProduction] = useState(false);

  const onSubmit = (data: EnvironmentFormData) => {
    console.log("Form submitted:", { ...data, isProduction });
    onClose();
  };

  // Mock projects data - in a real app, this would come from an API
  const projects = [
    { id: "1", name: "Project A" },
    { id: "2", name: "Project B" },
    { id: "3", name: "Project C" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="w-[480px] p-0 border-[rgba(206,212,218,1)] border-2">
        <ScrollArea className="h-full">
          <div className="bg-gray-50 w-full pt-4 pb-6 px-4">
            <EnvironmentHeader onClose={onClose} />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[358px] mt-8 mx-auto"
            >
              <div className="w-full mb-6">
                <div className="flex gap-[3px] text-base font-normal whitespace-nowrap pt-0.5 pb-2.5">
                  <span className="text-blue-600">Project</span>
                  <span className="text-red-500 leading-none">*</span>
                </div>
                <Select
                  value={watch("projectId")}
                  onValueChange={(value) => setValue("projectId", value)}
                >
                  <SelectTrigger className="w-full h-[50px] bg-white border-blue-200">
                    <SelectValue placeholder="Select a project" />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

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
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
