"use client";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientWrapper() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return <LoadingScreen />;
}
