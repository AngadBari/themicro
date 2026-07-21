import { ArrowRight02Icon, Download ,Setting07Icon} from "@hugeicons/core-free-icons";


export type InteractionType =
  | "slide-arrow"
  | "setting";

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

];