export type InteractionType =
    | "GitHub"
    | "X"
    | "YouTube"
    | "LinkedIn"
    | "Notification"
    | "SparkText"
    | "Book"
    | "Delete"
    | "Close"
    | "Hd"
    | "NotificationRing"
    | "BellOff"
    | "ArrowAllDir"
    | "Expand"
    |"ArrowLeft"
    | "ArrowDown"
    |"ArrowUp"
    |"ArrowRight"
    | 'Check'
    |"Shrink"
    |"Award"
    |"VerifiedBadge"
    |"Star"
    |"Place1"
    |"Place2"
    |"Place3"
    | "Fav"
    | "Star01"
    |"Support"
    |"Like"
    |"Dislike"

export interface IconConfig {
    id: number;
    category: string;
    label: string;

    interactionType: InteractionType;
}

export const icons: IconConfig[] = [
    {
        id: 1,
        category: "Icons",
        label: "GitHub",

        interactionType: "GitHub",
    },

    {
        id: 2,
        category: "Icons",
        label: "Twitter",

        interactionType: "X",
    },
    {
        id: 3,
        category: "Icons",
        label: "YouTube",

        interactionType: "YouTube",
    },
    {
        id: 4,
        category: "Icons",
        label: "LinkedIn",

        interactionType: "LinkedIn",
    },
    {
        id: 5,
        category: "Icons",
        label: "Notification",

        interactionType: "Notification",
    },

    {
        id: 6,
        category: "Icons",
        label: "SparkText",

        interactionType: "SparkText",
    },

    {
        id: 7,
        category: "Icons",
        label: "AiBookIco",

        interactionType: "Book",
    },

    {
        id: 8,
        category: "Icons",
        label: "Delete",

        interactionType: "Delete",
    },
    {
        id: 9,
        category: "Icons",
        label: "Close",

        interactionType: "Close",
    },
    {
        id: 10,
        category: "Icons",
        label: "HD",

        interactionType: "Hd",
    },

    {
        id: 11,
        category: "Icons",
        label: "Bell+Ring",

        interactionType: "NotificationRing",
    },
     {
        id: 12,
        category: "Icons",
        label: "BellOff",

        interactionType: "BellOff",
    },
      {
        id: 13,
        category: "Icons",
        label: "ArrowAllDir",

        interactionType: "ArrowAllDir",
    },

    {
        id: 14,
        category: "Icons",
        label: "Expand",

        interactionType: "Expand",
    },

     {
        id: 15,
        category: "Icons",
        label: "Shrink",

        interactionType: "Shrink",
    },

     {
        id: 16,
        category: "Icons",
        label: "Arrow-Left",

        interactionType: "ArrowLeft",
    },

      {
        id: 17,
        category: "Icons",
        label: "Arrow-Down",

        interactionType: "ArrowDown",
    },
    {
        id: 18,
        category: "Icons",
        label: "Arrow-Up",

        interactionType: "ArrowUp",
    },

     {
        id: 19,
        category: "Icons",
        label: "Arrow-Right",

        interactionType: "ArrowRight",
    },
     {
        id: 20,
        category: "Icons",
        label: "Check",

        interactionType: "Check",
    },

     {
        id: 21,
        category: "Icons",
        label: "Award",

        interactionType: "Award",
    },
     {
        id: 22,
        category: "Icons",
        label: "Badge",

        interactionType: "VerifiedBadge",
    },
    {
        id: 23,
        category: "Icons",
        label: "Star-Award",

        interactionType: "Star",
    },

    {
        id: 24,
        category: "Icons",
        label: "First-Place",

        interactionType: "Place1",
    },
     {
        id: 25,
        category: "Icons",
        label: "Second-Place",

        interactionType: "Place2",
    },
    {
        id: 26,
        category: "Icons",
        label: "Third-Place",

        interactionType: "Place3",
    },
     {
        id: 27,
        category: "Icons",
        label: "Favourite",

        interactionType: "Fav",
    },
     {
        id: 28,
        category: "Icons",
        label: "Star",

        interactionType: "Star01",
    },

     {
        id: 29,
        category: "Icons",
        label: "Support",

        interactionType: "Support",
    },

      {
        id: 30,
        category: "Icons",
        label: "Like",

        interactionType: "Like",
    },

        {
        id: 31,
        category: "Icons",
        label: "Dislike",

        interactionType: "Dislike",
    },


   
];
