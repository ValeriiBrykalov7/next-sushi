import { Container } from "@/components/ui/shared/container";
import { Filters } from "@/components/ui/shared/filters";
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
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* products list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Products list</div>
          </div>
        </div>
      </Container>
    </>
  );
}
