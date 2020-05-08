import React from "react";
import { useLinking, NavigationContainerRef } from "@react-navigation/native";
import { Linking } from "expo";

export function useUrlLinking(
  containerRef: React.RefObject<any>
) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "root",
        screens: {
          Home: "home",
          Links: "links",
          Settings: "settings",
        },
      },
    },
  });
}
