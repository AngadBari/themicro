export interface OrbData {
  id: number;
  type: string;
  label: string;
  dis: string;
}

export const orbs: OrbData[] = [
  {
    id: 1,
    type: "particle",
    label: "Orb",
    dis: "Agent",
  },
   {
    id: 2,
    type: "search",
    label: "searching-Orb",
    dis: " Searching  Agent",
  },

  {
    id: 3,
    type: "work",
    label: "Working-Orb",
    dis: " Working  Agent",
  },
   {
    id: 4,
    type: "listen",
    label: "listening ",
    dis: " listening  Agent",
  },
];