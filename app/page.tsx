import { Container } from "@/components/ui/shared/container";
import { Filters } from "@/components/ui/shared/filters";
import { ProductsGroupList } from "@/components/ui/shared/products-group-list";
import { Title } from "@/components/ui/shared/title";
import { TopBar } from "@/components/ui/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Our sushi" size="lg" className="font-extrabold"></Title>
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          {/* filtration */}
          <div className="w-62">
            <Filters />
          </div>

          {/* products list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Maki"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "California Roll",
                    price: 10,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Salmon", "Rice", "Seaweed"],
                  },
                  {
                    id: 2,
                    name: "Spicy Tuna Roll",
                    price: 12,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Tuna", "Rice", "Seaweed", "Spicy Sauce"],
                  },
                  {
                    id: 3,
                    name: "Dragon Roll",
                    price: 15,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Eel", "Avocado", "Rice", "Seaweed"],
                  },
                  {
                    id: 4,
                    name: "Rainbow Roll",
                    price: 18,
                    imageUrl: "/images/california1.png",
                    ingredients: [
                      "Crab",
                      "Avocado",
                      "Cucumber",
                      "Tuna",
                      "Salmon",
                      "Yellowtail",
                    ],
                  },
                ]}
              />
              <ProductsGroupList
                title="Nigiri"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Salmon Nigiri",
                    price: 8,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Salmon", "Rice"],
                  },
                  {
                    id: 2,
                    name: "Tuna Nigiri",
                    price: 9,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Tuna", "Rice"],
                  },
                  {
                    id: 3,
                    name: "Eel Nigiri",
                    price: 10,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Eel", "Rice"],
                  },
                ]}
              />
              <ProductsGroupList
                title="Sashimi"
                categoryId={3}
                items={[
                  {
                    id: 1,
                    name: "Salmon Sashimi",
                    price: 12,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Salmon"],
                  },
                  {
                    id: 2,
                    name: "Tuna Sashimi",
                    price: 14,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Tuna"],
                  },
                  {
                    id: 3,
                    name: "Yellowtail Sashimi",
                    price: 16,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Yellowtail"],
                  },
                ]}
              />
              <ProductsGroupList
                title="Combos"
                categoryId={4}
                items={[
                  {
                    id: 1,
                    name: "Sushi Combo A",
                    price: 25,
                    imageUrl: "/images/california1.png",
                    ingredients: [
                      "California Roll",
                      "Salmon Nigiri",
                      "Tuna Nigiri",
                    ],
                  },
                  {
                    id: 2,
                    name: "Sushi Combo B",
                    price: 30,
                    imageUrl: "/images/california1.png",
                    ingredients: [
                      "Spicy Tuna Roll",
                      "Eel Nigiri",
                      "Yellowtail Sashimi",
                    ],
                  },
                  {
                    id: 3,
                    name: "Sushi Combo C",
                    price: 35,
                    imageUrl: "/images/california1.png",
                    ingredients: [
                      "Rainbow Roll",
                      "Volcano Roll",
                      "Spider Roll",
                    ],
                  },
                ]}
              />
              <ProductsGroupList
                title="Special Rolls"
                categoryId={5}
                items={[
                  {
                    id: 1,
                    name: "Rainbow Roll",
                    price: 18,
                    imageUrl: "/images/california1.png",
                    ingredients: [
                      "Crab",
                      "Avocado",
                      "Cucumber",
                      "Tuna",
                      "Salmon",
                      "Yellowtail",
                    ],
                  },
                  {
                    id: 2,
                    name: "Volcano Roll",
                    price: 20,
                    imageUrl: "/images/california1.png",
                    ingredients: [
                      "Shrimp Tempura",
                      "Avocado",
                      "Cucumber",
                      "Spicy Mayo",
                    ],
                  },
                  {
                    id: 3,
                    name: "Spider Roll",
                    price: 22,
                    imageUrl: "/images/california1.png",
                    ingredients: [
                      "Soft Shell Crab",
                      "Avocado",
                      "Cucumber",
                      "Eel Sauce",
                    ],
                  },
                ]}
              />
              <ProductsGroupList
                title="Deserts"
                categoryId={6}
                items={[
                  {
                    id: 1,
                    name: "Mochi Ice Cream",
                    price: 6,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Mochi", "Ice Cream"],
                  },
                  {
                    id: 2,
                    name: "Green Tea Ice Cream",
                    price: 5,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Green Tea", "Ice Cream"],
                  },
                  {
                    id: 3,
                    name: "Tempura Ice Cream",
                    price: 7,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Tempura", "Ice Cream"],
                  },
                  {
                    id: 4,
                    name: "Dorayaki",
                    price: 4,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Red Bean Paste", "Pancake"],
                  },
                  {
                    id: 5,
                    name: "Taiyaki",
                    price: 5,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Red Bean Paste", "Fish-shaped Cake"],
                  },
                ]}
              />
              <ProductsGroupList
                title="Drinks"
                categoryId={7}
                items={[
                  {
                    id: 1,
                    name: "Sake",
                    price: 8,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Rice Wine"],
                  },
                  {
                    id: 2,
                    name: "Green Tea",
                    price: 3,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Green Tea Leaves"],
                  },
                  {
                    id: 3,
                    name: "Ramune",
                    price: 4,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Carbonated Soft Drink"],
                  },
                  {
                    id: 4,
                    name: "Soda",
                    price: 2,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Carbonated Soft Drink"],
                  },
                  {
                    id: 5,
                    name: "Milk",
                    price: 3,
                    imageUrl: "/images/california1.png",
                    ingredients: ["Milk"],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
