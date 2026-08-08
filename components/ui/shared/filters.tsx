import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../input";

type FiltersProps = {
  className?: string;
};

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Custom" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral 100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="100" min={100} max={1000} />
        </div>
      </div>
    </div>
  );
};
