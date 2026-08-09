"use client";

import { SearchingIcon } from "@hugeicons/core-free-icons";
import type { OrbData } from "./data";
import ParticleOrb from "./interaction/Orb";
import SearchingOrb from "./interaction/SearchOrb";
import WorkingOrb from "./interaction/WorkingOrb";
import ListeningOrb from "./interaction/listening";

interface Props {
  orb: OrbData;
}

export default function OrbAnimation({ orb }: Props) {
  switch (orb.type) {
    case "particle":
      return (
        <ParticleOrb
          size={90}
          color="currentColor"
          particleCount={72}
        />
      );


      case "search":
      return (
        <SearchingOrb
          size={90}
          color="currentColor"
          particleCount={72}
        />
      );

      case "work":
      return (
        <WorkingOrb
          size={90}
          color="currentColor"
          particleCount={72}
        />
      );


       case "listen":
      return (
        <ListeningOrb
          size={90}
          color="currentColor"
          particleCount={72}
        />
      );


    default:
      return null;
  }
}