import Image from "next/image";
import ThemeToggle from "./components /theme/ThemeToggle";
import NavBar from "./components /ui/NavBar";
import Hero from "./components /ui/Hero";
import Category from "./components /section/Category";

import GithubStars from "./components /GithubStars";

import Orb from "./components /orbs/interaction/Orb";

import WorkOrb from "./components /orbs/interaction/WorkingOrb";
import SearchingOrb from "./components /orbs/interaction/SearchOrb";
import SearchButton from "./components /ex";

export default function Home() {
  return (
     <main className=" ">
        <Hero/>
        <Category/>
       
      
        <SearchButton/>
        
     </main>
  );
}
