"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

type CategoriesProps = {
  className?: string;
};

const cats = [
  { id: 1, name: "Maki" },
  { id: 2, name: "Nigiri" },
  { id: 3, name: "Sashimi" },
  { id: 4, name: "Combos" },
  { id: 5, name: "Special Rolls" },
  { id: 6, name: "Deserts" },
  { id: 7, name: "Drinks" },
];
export const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer transition-all duration-300",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
          key={index}
          href={`/#${name}`}
        >
          <button className="focus:outline-none cursor-pointer"> {name} </button>
        </a>
      ))}
    </div>
  );
};
