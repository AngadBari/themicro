"use client";

import React from "react";

import type { CardData } from "@/app/components /card/data";
import Carousel from "./interCrad/Carousel";
import Carousel3card from "./interCrad/Carousel3Card";
import StackCarousel from "./interCrad/StackCarousel";

interface Props {
  card: CardData;
}

const CardAnimation = ({ card }: Props) => {
  return (
    <div className="">
      {card.interactionType === "Carousel" && <Carousel />}
      {card.interactionType === "RotateCarousel" && < Carousel3card/>}
      {card.interactionType === "Stack" && < StackCarousel/>}
    </div>
  );
};

export default CardAnimation;