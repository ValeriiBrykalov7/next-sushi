import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../input";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

type FiltersProps = {
  className?: string;
};

const sushiIngredients = [
  { text: "Salmon", value: "1" },
  { text: "Tuna", value: "2" },
  { text: "Shrimp", value: "3" },
  { text: "Eel", value: "4" },
  { text: "Crab", value: "5" },
  { text: "Scallop", value: "6" },
  { text: "Octopus", value: "7" },
  { text: "Avocado", value: "8" },
  { text: "Cucumber", value: "9" },
  { text: "Cream cheese", value: "10" },
  { text: "Tamago", value: "11" },
  { text: "Tobiko", value: "12" },
  { text: "Sesame", value: "13" },
  { text: "Spicy sauce", value: "14" },
  { text: "Teriyaki sauce", value: "15" },
  { text: "Green onion", value: "16" },
];

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* Top checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Custom" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>
      {/* Price filter */}
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

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        items={sushiIngredients}
        defaultItems={sushiIngredients}
      />
    </div>
  );
};
