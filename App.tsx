import { NavigationContainer } from "@react-navigation/native";
import Navigaton from "./src/navigation/Navigation";

import * as React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <Navigaton></Navigaton>
    </NavigationContainer>
  );
}
