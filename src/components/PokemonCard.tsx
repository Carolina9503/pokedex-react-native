import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { capitalize } from "lodash"; //Lo use para poner la primera letra en mayuscula
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Pokemon = {
  id: number;
  name: string;
  order: number;
  image: string;
  pokemonType: string;
};
type PokemonProps = {
  pokemon: Pokemon;
};
type RootStackParamList = {
  Pokedex: undefined;
  Pokemon: { id: number };
};

export default function PokemonCard({ pokemon }: PokemonProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
  const pokemonColor = getColorByPokemonType(pokemon.pokemonType);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStylesPokemon };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{pokemon.order.toString().padStart(3, "0")}
            </Text>

            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStylesPokemon: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    paddingTop: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
});
