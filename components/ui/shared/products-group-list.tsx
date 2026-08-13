"use client";

import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

type ProductsGroupListProps = {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId?: number;
};

export const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
  className,
  title,
  items,
  listClassName,
  categoryId,
}) => {
  const intersectionRef = React.useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.4,
    },
  );

  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId || 1);
    }
  }, [intersection?.isIntersecting, categoryId, title, setActiveCategoryId]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-12.5", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
