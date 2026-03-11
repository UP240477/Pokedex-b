import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PokemonData() {
  const { name, id } = useLocalSearchParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  return (
    <View>
      <Text>Pokemon Data</Text>
      <Text>{name}</Text>
      <Text>{url}</Text>
    </View>
  );
}
