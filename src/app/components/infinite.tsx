"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite";

export function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add similar items for other testimonials
    {
      image: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    },
    {
      image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image: "https://images.unsplash.com/photo-1631771819642-90cee9a2ccac?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image: "https://media.istockphoto.com/id/1410056529/photo/3d-rendering-of-solar-panels-isolated-from-the-background-with-copy-space.jpg?s=1024x1024&w=is&k=20&c=bz3CbvOpUwbFn_d9oG3emHjUfdPfphD5BpfjmOc-cJ8=",
    },
    {
      image: "https://media.istockphoto.com/id/1455169709/photo/solar-panels-reflect-sparkling-light-and-golden-sky-clean-energy-and-environment.jpg?s=1024x1024&w=is&k=20&c=K2B4UNS7aIXex6sp5uEk9eduxAzmHgq3Klel-_ADW4o=",
    },
  ];

  return (
    <div className="h-[13rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
