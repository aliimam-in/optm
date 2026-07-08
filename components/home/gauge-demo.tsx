"use client";

import * as React from "react";
import { useMotionValue, useSpring } from "motion/react";
import {
  Gauge,
  GaugeIndicator,
  GaugeLabel,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/components/ui/gauge";

export function GaugeDemo1() {
  const biologicalMotion = useMotionValue(0);
  const chronologicalMotion = useMotionValue(0);

  const biologicalSpring = useSpring(biologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const chronologicalSpring = useSpring(chronologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const [biologicalValue, setBiologicalValue] = React.useState(0);
  const [chronologicalValue, setChronologicalValue] = React.useState(0);

  React.useEffect(() => {
    biologicalMotion.set(58);
    chronologicalMotion.set(47);

    const unsubscribe1 = biologicalSpring.on("change", (latest) => {
      setBiologicalValue(Math.round(latest));
    });

    const unsubscribe2 = chronologicalSpring.on("change", (latest) => {
      setChronologicalValue(Math.round(latest));
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, [
    biologicalMotion,
    chronologicalMotion,
    biologicalSpring,
    chronologicalSpring,
  ]);

  return (
    <div className="hidden md:block">

      <Gauge className="absolute left-1/2 bottom-1/3 translate-x-[100%] translate-y-1/2" value={biologicalValue} size={100} thickness={8}>
        <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
          <GaugeTrack className="bg-white" />
          <GaugeRange stroke="white" />
        </GaugeIndicator>

        <GaugeValueText className="text-white">{biologicalValue}</GaugeValueText>

        <GaugeLabel className="text-white">Biological</GaugeLabel>
      </Gauge>
      <Gauge className="absolute right-1/4 bottom-1/4 translate-x-[200%] -translate-y-1/2" value={chronologicalValue} size={100} thickness={8}>
        <GaugeIndicator className="bg-white/10 rounded-full backdrop-blur-sm">
          <GaugeTrack className="bg-white" />
          <GaugeRange stroke="white" />
        </GaugeIndicator>

        <GaugeValueText className="text-white">{chronologicalValue}</GaugeValueText>

        <GaugeLabel className="text-white">Chronological</GaugeLabel>
      </Gauge>
    </div>
  );
}

export function GaugeDemo2() {
  const biologicalMotion = useMotionValue(0);
  const chronologicalMotion = useMotionValue(0);

  const biologicalSpring = useSpring(biologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const chronologicalSpring = useSpring(chronologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const [biologicalValue, setBiologicalValue] = React.useState(0);
  const [chronologicalValue, setChronologicalValue] = React.useState(0);

  React.useEffect(() => {
    biologicalMotion.set(58);
    chronologicalMotion.set(47);

    const unsubscribe1 = biologicalSpring.on("change", (latest) => {
      setBiologicalValue(Math.round(latest));
    });

    const unsubscribe2 = chronologicalSpring.on("change", (latest) => {
      setChronologicalValue(Math.round(latest));
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, [
    biologicalMotion,
    chronologicalMotion,
    biologicalSpring,
    chronologicalSpring,
  ]);

  return (
    <div className="hidden md:block">

      <Gauge className="absolute left-1/3 bottom-1/2 translate-x-[220%] translate-y-1/2" value={biologicalValue} size={100} thickness={8}>
        <GaugeIndicator className="rounded-full backdrop-blur-sm">
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText>{biologicalValue}</GaugeValueText>

        <GaugeLabel>Biological</GaugeLabel>
      </Gauge>
      <Gauge className="absolute right-1/4 bottom-1/5 translate-x-[220%] -translate-y-1/2" value={chronologicalValue} size={100} thickness={8}>
        <GaugeIndicator className=" rounded-full backdrop-blur-sm">
          <GaugeTrack   />
          <GaugeRange  />
        </GaugeIndicator>

        <GaugeValueText  >{chronologicalValue}</GaugeValueText>

        <GaugeLabel  >Chronological</GaugeLabel>
      </Gauge>
    </div>
  );
}

export function GaugeDemo3() {
  const biologicalMotion = useMotionValue(0);
  const chronologicalMotion = useMotionValue(0);

  const biologicalSpring = useSpring(biologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const chronologicalSpring = useSpring(chronologicalMotion, {
    stiffness: 60,
    damping: 15,
  });

  const [biologicalValue, setBiologicalValue] = React.useState(0);
  const [chronologicalValue, setChronologicalValue] = React.useState(0);

  React.useEffect(() => {
    biologicalMotion.set(58);
    chronologicalMotion.set(47);

    const unsubscribe1 = biologicalSpring.on("change", (latest) => {
      setBiologicalValue(Math.round(latest));
    });

    const unsubscribe2 = chronologicalSpring.on("change", (latest) => {
      setChronologicalValue(Math.round(latest));
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, [
    biologicalMotion,
    chronologicalMotion,
    biologicalSpring,
    chronologicalSpring,
  ]);

  return (
    <div className="hidden md:block">

      <Gauge className="absolute left-1/3 top-1/3 translate-x-[400%] translate-y-1/2" value={biologicalValue} size={100} thickness={8}>
        <GaugeIndicator className="rounded-full backdrop-blur-sm">
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText>{biologicalValue}</GaugeValueText>

        <GaugeLabel>Biological</GaugeLabel>
      </Gauge>
      <Gauge className="absolute right-1/4 bottom-1/4 -translate-y-1/2" value={chronologicalValue} size={100} thickness={8}>
        <GaugeIndicator className=" rounded-full backdrop-blur-sm">
          <GaugeTrack   />
          <GaugeRange  />
        </GaugeIndicator>

        <GaugeValueText  >{chronologicalValue}</GaugeValueText>

        <GaugeLabel  >Chronological</GaugeLabel>
      </Gauge>
    </div>
  );
}