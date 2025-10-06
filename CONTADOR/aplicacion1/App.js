import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador en React Native</Text>
      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.botones}>
        <TouchableOpacity style={styles.botonMas} onPress={incrementar}>
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonMenos} onPress={decrementar}>
          <Text style={styles.textoBoton}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#210F37", 
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: "bold",
    color: "#DCA06D",
    textAlign: "center",
    fontFamily: "Times New Roman",
  },
  numero: {
    fontSize: 60,
    marginBottom: 30,
    fontWeight: "bold",
    color: "#A55B4B",
    fontFamily: "Times New Roman",
  },
  botones: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  botonMas: {
    backgroundColor: "#4F1C51", 
    paddingHorizontal: 25,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  botonMenos: {
    backgroundColor: "#A55B4B", 
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textoBoton: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
});


