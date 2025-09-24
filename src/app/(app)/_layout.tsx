import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Layout = () => {
  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();
  console.log(isSignedIn);

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={"large"} color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Protected guard={isSignedIn}>
        <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
        <Stack.Screen
          options={{
            headerShown: false,
            presentation: "modal",
            gestureEnabled: true,
            animationTypeForReplace: "push",
          }}
          name="exercise-detail"
        />
      </Stack.Protected>

      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
};

export default Layout;
