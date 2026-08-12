import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../button";
import { Plus } from "lucide-react";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  className?: string;
  ingredients: string[];
};

export const ProductCard: React.FC<ProductCardProps> = ({
  className,
  id,
  imageUrl,
  name,
  price,
  ingredients,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-65">
          <Image
            alt={name}
            width={215}
            height={215}
            src={imageUrl ? imageUrl : ""}
          ></Image>
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">{ingredients.join(", ")}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} $</b>
          </span>

          <Button
            variant="secondary"
            className="text-base font-bold flex items-center gap-2"
          >
            Add to cart
            <Plus size={20} className="mr-1"></Plus>
          </Button>
        </div>
      </Link>
    </div>
  );
};
