import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

type Pokemon = {
  id: number;
  name: string;
  order: number;
  image: string;
  pokemonType: string;
};

type PokemonListProps = {
  pokemons: Pokemon[];
  loadPokemons: () => {};
  isNext: string | null;
};

export default function PokemonList({
  pokemons,
  loadPokemons,
  isNext,
}: PokemonListProps) {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext ? loadMore : null}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext ? (
          <ActivityIndicator
            size="large"
            color="#AEAEAE"
            style={styles.spinner}
          />
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : -60,
  },
});
