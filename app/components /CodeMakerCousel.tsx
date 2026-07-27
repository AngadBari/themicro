import { CardData, cards } from "./card/data";

export function getComponentCodeCousel(card: CardData) {

  switch (card.interactionType) {


    case "Carousel":

      return `
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
];


export default function ${card.title.replace(/\s+/g, "")}(){

  const [active,setActive] = useState(2);


  const prev = () => {
    setActive((prev)=>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };


  const next = () => {
    setActive((prev)=>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };


  return (

    <section className="w-full">

      <div className="relative h-80 overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-950">
        {slides.map((item,index)=>{
          const offset = index - active;
          const absOffset = Math.abs(offset);
          return (

            <img
              key={index}
              src={item.image}
              alt={\`Slide \${index + 1}\`}
              loading="lazy"
              className="absolute left-1/2 top-5 h-64 w-44 rounded-2xl object-cover transition-all duration-500"
              style={{
                transform:
                \`translateX(calc(-50% + \${offset * 140}px)) scale(\${
                  offset === 0 ? 1 : 0.86
                }) rotate(\${offset * 8}deg)\`,
                opacity:
                absOffset > 2 ? 0 : 1,
                zIndex:
                20 - absOffset,
                filter:
                \`blur(\${absOffset > 1 ? 2 : 0}px)\`,
                boxShadow:
                "0 20px 50px rgba(0,0,0,.35)"
              }}
            />
          )
        })}
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          <ChevronLeft size={18}/>
        </button>
        <div className="flex gap-2">
          {slides.map((_,index)=>(
            <button
              key={index}
              onClick={()=>setActive(index)}
             className={\`
                    h-2 rounded-full transition-all duration-300
                    \${active === index
                    ? "w-8 bg-neutral-900 dark:bg-white"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-600"
                    }
                    \`}
                   />
          ))}
        </div>
        <button
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          <ChevronRight size={18}/>
        </button>
      </div>
    </section>
  );
}
`;



case "RotateCarousel":
  return `
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
];


export default function ${card.title.replace(/\s+/g, "")}(){

  const [active, setActive] = useState(2);

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full">
      <div className="relative h-80 overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-950">
        {slides.map((item, index) => {
          const offset = index - active;
          const absOffset = Math.abs(offset);
          return (
            <img
              key={index}
              src={item.image}
              alt={\`Slide \${index + 1}\`}
              loading="lazy"
              className="absolute left-1/2 top-15 h-30 w-30 rounded-2xl object-cover transition-all duration-500"
              style={{
                transform:
                \`translateX(calc(-80% + \${
                  offset * 140
                }px)) scale(\${
                  offset === 0 ? 1 : 0.86
                }) rotate(\${
                  offset * 50
                }deg)\`,
                opacity: absOffset > 2 ? 0 : 1,
                zIndex: 20 - absOffset,
                filter:\`blur(\${ absOffset > 1 ? 2 : 0 }px)\`,
                boxShadow: "0 20px 50px rgba(0,0,0,.35)",
              }}
            />
          );
        })}

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
          <button onClick={prev} className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800" >
            <ChevronLeft size={13} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button key={index} onClick={() => setActive(index)}
                className={\` h-2 rounded-full transition-all duration-300
                \${ active === index
                   ? "w-3 bg-neutral-900 dark:bg-white"
                 : "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-600"
                  }
                \`}
              />
            ))}
          </div>

          <button  onClick={next} className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
`;

case "Stack":
  return `
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets:["latin"],
  weight:["600"],
});

type Slide = {
  image:string;
  title:string;
};

const DEFAULT_ASSETS:Slide[] = [
{
 image:
 "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
 title:"Sunset Beach",
},

{
 image:
 "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
 title:"Misty Mountains",
},

{
 image:
 "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
 title:"Forest Trail",
},

{
 image:
 "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
 title:"Sunlight Woods",
},

{
 image:
 "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
 title:"Green Hills",
}

];



export default function ${card.title.replace(/\s+/g, "")}(){
const [active,setActive] = useState(2);
  const prev = () => {
     setActive((current)=>
       current === 0 ? DEFAULT_ASSETS.length - 1 : current - 1
     );
  };



const next = () => {
       setActive((current)=>
        current === DEFAULT_ASSETS.length - 1 ? 0 : current + 1
);
};

    return (   
      <section className="relative flex h-[420px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-950"
        style={{
              perspective:"1000px"
            }}>


     <div className="relative flex h-[300px] w-full items-center justify-center"
       style={{ transformStyle:"preserve-3d"}} >
        { DEFAULT_ASSETS.map((item,index)=>{

              const offset = index - active;
            const distance = Math.abs(offset); 
     return (
            <motion.div key={index} onClick={()=>setActive(index)}
               className="absolute h-64 w-44 cursor-pointer"
              initial={false}
              animate={{ x: offset * 100,
              rotateY:offset === 0 ? 0 : offset < 0 ? 40 : -40,
              z: offset === 0 ? 100 : -distance * 50,
              scale: offset === 0 ? 1.1 : 1 - distance * 0.12,
            opacity:  distance > 2 ? 0 : 1 - distance * 0.25,
            }}
            transition={{
            type:"spring",
            stiffness:200,
            damping:25

            }}
            style={{ zIndex:100-distance,
            transformStyle:"preserve-3d"
            }}
            >


          <img
            src={item.image}
            alt={item.title}

             className="h-full w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
            /> 
        <motion.p
        className={\`absolute -bottom-8 left-0 w-full text-center text-[12px] \${outfit.className} dark:text-white\`}
        animate={{
        opacity: offset === 0 ? 1 : 0,
        y: offset === 0 ? 0 : -5,
        }} >
        {item.title}
        </motion.p>

        </motion.div>
        );
    })

  }
        </div>

        <div className="mt-10 flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
        <button
        onClick={prev}
        className="rounded-full p-1 text-black transition hover:bg-white/10 hover:text-white dark:text-white/70">
        <ChevronLeft size={18}/>
        </button>
        <div className="flex items-center gap-2">

        {
        DEFAULT_ASSETS.map((_,index)=>(
        <button
        key={index}
        onClick={()=>setActive(index)}
        className={\`
        h-2 rounded-full transition-all duration-300
        \${
        active === index
        ? "w-3 bg-black dark:bg-white"
        : "w-2 bg-black/30 dark:bg-white/30 hover:bg-white/50"
        }
        \`}>
        </button>
        ))
        }
        </div>
        <button
        onClick={next}
        className="rounded-full p-1 text-black transition hover:bg-white/10 hover:text-white dark:text-white/70">
        <ChevronRight size={18}/>
        </button>
        </div>
        </section>

        );

        }

`;
    default:
      return "";
  }
}
