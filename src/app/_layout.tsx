import "../global.css";
import { Slot, Stack, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";

export default function Layout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  );
}
