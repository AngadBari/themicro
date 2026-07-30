import { IconConfig, icons } from "./data";

import { motion } from "framer-motion";
import GitHubIco from "./interaction/GitHubIco";
  import { getIconCode } from "@/app/components /IconCodeMaker";
import TwitterIco from "./interaction/Twitterico";
import YouTubeIco from "./interaction/YouTubeico";
import LinkedInIco from "./interaction/LinkedInIco";
import NotificationIco from "./interaction/NotificationIco";
import SparkTextIco from "./interaction/SparkTextIco";
import BookIco from "./interaction/BookIco";
import DeleteIco from "./interaction/DeleteIco";
import CloseIco from "./interaction/CloseIco";
import HdIco from "./interaction/HDico";
import NotificationRingIco from "./interaction/ NotificationRingIco";
import BellOffIco from "./interaction/BellOffIco";

import ArrowAllDirIco from "./interaction/ArrowAllDicIco";

import ExPandIco from "./interaction/ExapandIco";
import ArrowLeftIco from "./interaction/ArrowLeftIco";
import { ArrowMoveLeftDownIcon } from "@hugeicons/core-free-icons";
import ArrowDownIco from "./interaction/ArrowDownIco";
import ArrowUpIco from "./interaction/ArrowUpIco";
import ArrowRightIco from "./interaction/ArrowRightIco";
import CheckIco from "./interaction/CheckIco";
import ShrinkIco from "./interaction/ShrinkIco";
import AwardIco from "./interaction/AwardIco";
import VerifiedBadgeIco from "./interaction/VerifiedBadgeIco";
import StarAwardIco from "./interaction/StarIco";
import FristPlaceIco from "./interaction/FirstMedalIco";
import SecondPlaceIco from "./interaction/SecondMedalIco";
import ThirdPlaceIco from "./interaction/ThirdMedalIco";
import FavIco from "./interaction/FavIco";
import StarIco from "./interaction/Star01Ico";
import SupportIco from "./interaction/SupportIco";
import LikeIcon from "./interaction/LikeIco";
import DislikeIcon from "./interaction/DisLikeIco";

interface IconAnimationProps {
  icons:IconConfig;
}


export default function IconAnimation({ icons }: IconAnimationProps ) {

  


const copyCode = () => {
  const code = getIconCode(icons);

  navigator.clipboard.writeText(code);
};

    return(

    <motion.div
              className=" h-20 w-20 bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-500 border cursor-copy shadow-md  border-gray-300 p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 duration-200 flex gap-2 justify-center items-center"
              initial="rest"
              whileHover="hover"
              
              onClick={copyCode}
            >
              
            {icons.interactionType == "GitHub" && (
                <GitHubIco/>
            )}

            {icons.interactionType == "X" && (
                <TwitterIco/>
            )}

             {icons.interactionType == "YouTube" && (
                <YouTubeIco/>
            )}
             {icons.interactionType == "LinkedIn" && (
               <LinkedInIco/>
            )}

            {icons.interactionType == "Notification" && (
               <NotificationIco/>
            )}

            {icons.interactionType == "SparkText" && (
               <SparkTextIco/>
            )}

             {icons.interactionType == "Book" && (
               <BookIco/>
            )}

              {icons.interactionType == "Delete" && (
               <DeleteIco/>
            )}

              {icons.interactionType == "Close" && (
               <CloseIco/>
            )}

             {icons.interactionType == "Hd" && (
               <HdIco/>
            )}

              {icons.interactionType == "NotificationRing" && (
               <NotificationRingIco/>
            )}

               {icons.interactionType == "BellOff" && (
              <BellOffIco/>
            )}


            {icons.interactionType == "ArrowAllDir" && (
             <ArrowAllDirIco/>
            )}

            {icons.interactionType == "Expand" && (
            <ExPandIco/>
            )}

             {icons.interactionType == "Shrink" && (
             <ShrinkIco/>
            )}

             {icons.interactionType == "ArrowLeft" && (
              <ArrowLeftIco/>
            )}

              {icons.interactionType == "ArrowDown" && (
              <ArrowDownIco/>
            )}

             {icons.interactionType == "ArrowUp" && (
              <ArrowUpIco/>
            )}

             {icons.interactionType == "ArrowRight" && (
              <ArrowRightIco/>
            )}

             {icons.interactionType == "Check" && (
              <CheckIco/>
            )}

             {icons.interactionType == "Award" && (
              <AwardIco/>
            )}

             {icons.interactionType == "VerifiedBadge" && (
              <VerifiedBadgeIco/>
            )}

             {icons.interactionType == "Star" && (
              <StarAwardIco/>
            )}

             {icons.interactionType == "Place1" && (
              <FristPlaceIco/>
            )}

             {icons.interactionType == "Place2" && (
              <SecondPlaceIco/>
            )}
            {icons.interactionType == "Place3" && (
              <ThirdPlaceIco/>
            )}

             {icons.interactionType == "Fav" && (
              <FavIco/>
            )}

             {icons.interactionType == "Star01" && (
              <StarIco/>
            )}

              {icons.interactionType == "Support" && (
              <SupportIco/>
            )}

               {icons.interactionType == "Like" && (
              <LikeIcon/>
            )}

               {icons.interactionType == "Dislike" && (
              <DislikeIcon/>
            )}

            




            </motion.div>

    )

 }