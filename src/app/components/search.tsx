"use client";

import * as React from "react";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  HelpCircle,
  LucideIcon,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
  value: string;
  label: string;
  icon: LucideIcon;
};

const statuses: Status[] = [
  {
    value: "no",
    label: "No",
    icon: HelpCircle,
  },
  {
    value: "adopted",
    label: "Adopted",
    icon: Circle,
  },
  {
    value: "draft",
    label: "Draft",
    icon: ArrowUpCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

import { ChangeEvent } from "react";

function SearchPopover() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    if (inputText.trim().length > 0) {
      setOpen(true); // Open the modal when user starts typing
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground font-medium">Status</p>
      <Command>
        <CommandInput
          placeholder="Change status..."
          onChangeCapture={handleInputChange} // Add the onChange event handler
        />
        {open && ( // Render the modal only when open is true
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {statuses.map((status) => (
                <CommandItem
                  key={status.value}
                  onSelect={(value: string) => {
                    setSelectedStatus(
                      statuses.find((priority) => priority.value === value) ||
                        null
                    );
                    setOpen(false);
                  }}
                >
                  <status.icon
                    className={cn(
                      "mr-2 h-4 w-4",
                      status.value === selectedStatus?.value
                        ? "opacity-100"
                        : "opacity-40"
                    )}
                  />
                  <span>{status.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}

export function Search() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <SearchPopover />
    </div>
  );
}
