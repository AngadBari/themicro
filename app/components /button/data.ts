import { ArrowRight02Icon, Download ,Setting07Icon,Like,SentIcon,CircleCheckBigIcon} from "@hugeicons/core-free-icons";



export type InteractionType =
  | "slide-arrow"
  | "setting"
  | "like"
  | "send" 

export interface ButtonConfig {
  id: number;
  category: string;
  label: string;
  dis: string;

  interactionType: InteractionType;

  icon1: any;
  icon1Name: string;

  icon2?: any;
  icon2Name?: string;
}

export const buttons:ButtonConfig[] = [
{
  id:1,
  category:"Button",
  label:"  Download for Mac",
  dis:" Slide arrow interaction",

  interactionType:"slide-arrow",

  icon1:Download,
  icon1Name:"Download",

  icon2:ArrowRight02Icon,
  icon2Name:"ArrowRight02Icon"
},
{
    id: 2,
    category: "Button",
    label: "Settings",
    dis: "Rotate interaction",

    interactionType: "setting",

    icon1: Setting07Icon,
    icon1Name: "Setting07Icon",
  },


  {
    id: 3,
    category: "Button",
    label: "Like",
    dis: " Like interaction",

    interactionType: "like",

    icon1: Like,
    icon1Name: "Like",
  },

   {
    id: 4,
    category: "Button",
    label: "Send",
    dis: " Send interaction",

    interactionType: "send",

    icon1: CircleCheckBigIcon,
    icon1Name: "CircleCheckBigIcon",

    
    
  },

];