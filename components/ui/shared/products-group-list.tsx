import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

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
  return (
    <div className={className}>
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
