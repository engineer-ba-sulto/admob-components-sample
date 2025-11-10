import adsService from "@/admob/services";
import { Slot } from "expo-router";
import { useEffect } from "react";
import "../global.css";

export default function Layout() {
  useEffect(() => {
    // AdsServiceを使用してAdMobを初期化
    adsService
      .initialize()
      .then(() => {
        console.log("AdMob initialized successfully");
      })
      .catch((error) => {
        console.error("Failed to initialize AdMob:", error);
      });
  }, []);

  return <Slot />;
}
