export type InteractionType =
  | "Carousel"
  | "RotateCarousel"
  | "Stack"


export interface CardData {
  id: number;
  category: string;
  title: string;
  dis: string;
  interactionType: InteractionType;
}


export const cards: CardData[] = [
  {
    id: 1,
    category: "Carousel",
   title: " Carousel",
    dis: "Animated Carousel",
    interactionType: "Carousel",
  },

  {
    id: 2,
    category: "Carousel",
   title: " RotateCarousel",
    dis: "Rotate Carousel",
    interactionType: "RotateCarousel",
  },

   {
    id: 3,
    category: "Carousel",
   title: " StackCarousel",
    dis: " 3D Stack Carousel",
    interactionType: "Stack",
  },
];