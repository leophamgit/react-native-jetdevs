import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation";

function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
