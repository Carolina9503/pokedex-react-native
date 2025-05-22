import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function Pokemon() {
  const route = useRoute();
  const { id } = route.params as { id: number };

  return (
    <View>
      <Text>Pokemon ID: {id}</Text>
    </View>
  );
}
