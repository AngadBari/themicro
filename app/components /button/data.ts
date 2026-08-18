import { ArrowRight02Icon, Download ,Setting07Icon,Like,CircleCheckBigIcon,GithubIcon,StarIcon,
        SentIcon,Sent02Icon,Link03Icon,Search01Icon,Cancel01Icon,Delete02Icon,Moon02Icon,Sun02Icon,ReloadIcon,
        FavouriteIcon,CheckmarkBadge01Icon,CheckmarkBadge03Icon,AlarmClockIcon,AlarmClockOffIcon
} from "@hugeicons/core-free-icons";



export type InteractionType =
  | "slide-arrow"
  | "setting"
  | "like"
  | "send" 
  | "star"
  | "submit"
  | "Sher"
  | "Search"
  |"Delete"
  |"theme"
  |"reload"
  |"Fav"
  |"verifly"
  |"Time"

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
    id: 1,
    category: "Button",
    label: "Send",
    dis: " Send transition ",

    interactionType: "send",

    icon1: CircleCheckBigIcon,
    icon1Name: "CircleCheckBigIcon",

    
    
  },

{
    id: 2,
    category: "Button",
    label: "Settings",
    dis: "Rotate transition",

    interactionType: "setting",

    icon1: Setting07Icon,
    icon1Name: "Setting07Icon",
  },


  {
    id: 3,
    category: "Button",
    label: "Like",
    dis: " Like transition",

    interactionType: "like",

    icon1: Like,
    icon1Name: "Like",
  },

  {
  id:4,
  category:"Button",
  label:"  Download for Mac",
  dis:" Slide arrow transition",

  interactionType:"slide-arrow",

  icon1:Download,
  icon1Name:"Download",

  icon2:ArrowRight02Icon,
  icon2Name:"ArrowRight02Icon"
},
  
  {
  id:5,
  category:"Button",
  label:" Star on GitHub",
  dis:" Color transition",

  interactionType:"star",

  icon1:GithubIcon,
  icon1Name:"GithubIcon",

  icon2:StarIcon,
  icon2Name:"StarIcon"
},

{
  id:6,
  category:"Button",
  label:" Submit",
  dis:" Submit transition",

  interactionType:"submit",

  icon1:SentIcon,
  icon1Name:"SentIcon",

  icon2:Sent02Icon,
  icon2Name:"Sent02Icon"
},


{
  id:7,
  category:"Button",
  label:"Share ",
  dis:" Share transition",

  interactionType:"Sher",

  icon1:Link03Icon,
  icon1Name:"Link03Icon",

  icon2:SentIcon,
  icon2Name:"SentIcon"
},

{
  id:8,
  category:"Button",
  label:"Search ",
  dis:" Search... transition",

  interactionType:"Search",

  icon1:Search01Icon,
  icon1Name:"Search01Icon",

  icon2:Cancel01Icon,
  icon2Name:"Cancel01Icon"
},
 {
    id: 9,
    category: "Button",
    label: "Delete",
    dis: " Delete transition with Color",

    interactionType: "Delete",

    icon1: Delete02Icon,
    icon1Name: "Delete02Icon",
  },

    {
  id:10,
  category:"Button",
  label:" Theme",
  dis:"Moon to Sun transition ",

  interactionType:"theme",

  icon1:Moon02Icon,
  icon1Name:"Moon02Icon",

  icon2:Sun02Icon,
  icon2Name:"Sun02Icon"
},

 {
    id: 11,
    category: "Button",
    label: "Reload",
    dis: "Rotate transition",

    interactionType: "setting",

    icon1: ReloadIcon,
    icon1Name: "ReloadIcon",
  },

  {
    id: 12,
    category: "Button",
    label: "Favorite",
    dis: " Favorite transition with Color",

    interactionType: "Fav",

    icon1: FavouriteIcon,
    icon1Name: "FavouriteIcon",
  },


  {
  id:13,
  category:"Button",
  label:"Verifly ",
  dis:"Verifly transition",

  interactionType:"verifly",

  icon1:CheckmarkBadge01Icon,
  icon1Name:"CheckmarkBadge01Icon",

  icon2:CheckmarkBadge03Icon,
  icon2Name:"CheckmarkBadge03Icon"
},

{
  id:14,
  category:"Button",
  label:"Time ",
  dis:"Time transition",

  interactionType:"Time",

  icon1:AlarmClockIcon,
  icon1Name:"AlarmClockIcon",

  icon2:AlarmClockOffIcon,
  icon2Name:"AlarmClockOffIcon"
},

];