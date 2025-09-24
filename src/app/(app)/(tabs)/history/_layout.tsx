import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "History",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="workout-record"
        options={{
          title: "Workout Record",
          headerTitleAlign: "center",
          headerShown: true,
          headerBackTitle: "Workouts",
        }}
      />
    </Stack>
  );
};

export default Layout;
