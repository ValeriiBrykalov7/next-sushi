import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("border border-b")}>
      <Container className="flex items-center justify-between py-8">
        {/* Left part */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="sushi logo"
            width={50}
            height={50}
          ></Image>
          <div>
            <h1 className="text-2xl uppercase font-black">Next Sushi</h1>
            <p className="text-sm text-gray-400 leading-3">
              It can`t get any tastier
            </p>
          </div>
        </div>
        {/* Right part */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-ceneter gap-1">
            <User size={16} />
            Sign in
          </Button>

          <div>
            <Button className="group relative">
              <b>300 $</b>
              <span className="h-full w-px bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
