import Image from "next/image";
import ThemeToggle from "./components /theme/ThemeToggle";
import NavBar from "./components /ui/NavBar";
import Hero from "./components /ui/Hero";
import Category from "./components /section/Category";

import GithubStars from "./components /GithubStars";





export default function Home() {
  return (
     <main className="mt-20 ">
        <Hero/>
        <Category/>
        
       

      
       
     </main>
  );
}
