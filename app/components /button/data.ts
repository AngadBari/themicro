import { ArrowRight02Icon, Download } from "@hugeicons/core-free-icons";


export interface ButtonConfig {
  id:number;
  category: String,
  label:string;
  dis:String;
  
  interactionType:"slide-arrow" ;

  icon1:any;
  icon1Name:string;

  icon2:any;
  icon2Name:string;
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
}
];