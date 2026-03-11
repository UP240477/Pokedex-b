import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView } from "react-native";
import PokemonCards from "../components/PokemonCard";

export default function Index() {
  // Estado para almacenar la lista de pokemones obtenida de la API
  // Se inicializa como un arreglo vacío
  const [results, setResults] = useState<any>([]);

  // useEffect se ejecuta cuando el componente se monta (al entrar en pantalla)
  // El arreglo vacío [] al final asegura que solo se ejecute una vez
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  // Función asíncrona para obtener los datos de la PokéAPI
  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

    // Realizamos la petición HTTP usando fetch
    const response = await fetch(URL, {
      method: "GET",
    });

    // Convertimos la respuesta a formato JSON
    const data = await response.json();

    // Guardamos la propiedad 'results' del JSON en nuestro estado
    setResults(data.results);

    // Log para verificar la estructura de los datos en consola
    console.log(data);
  };

  return (
    <ScrollView>
      <Button title="New Screen" onPress={() => router.push("/new-screen")} />
      <Button title="Pokemon Screen" onPress={() => router.push("/pokemon")} />
      <Button title="Dynamic" onPress={() => router.push("/pokemon/[name]")} />

      {results.map((pokemon: { name: any; url: any }) => (
        <PokemonCards
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </ScrollView>
  );
}
