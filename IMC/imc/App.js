import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100;
    if (!pesoNum || !alturaNum) {
      setMensaje("Por favor, ingresa peso y altura válidos.");
      setImc(null);
      return;
    }
    const resultado = pesoNum / (alturaNum * alturaNum);
    setImc(resultado.toFixed(2));
    if (resultado < 18.5) setMensaje("Bajo peso");
    else if (resultado < 24.9) setMensaje("Peso normal");
    else if (resultado < 29.9) setMensaje("Sobrepeso");
    else setMensaje("Obesidad");
  };

  return (
    <View style={styles.container}>
      {/* Imagen local junto a App.js */}
      <Image source={require("./imagen.jpg")} style={styles.imagen} />

      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso en kg"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura en cm"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.boton} onPress={calcularIMC}>
        <Text style={styles.textoBoton}>Calcular</Text>
      </TouchableOpacity>

      {imc && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>Tu IMC es: {imc}</Text>
          <Text style={styles.textoMensaje}>{mensaje}</Text>
        </View>
      )}

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imagen: {
    width: 140,
    height: 140,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 12,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#00BFFF",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#00BFFF",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
    color: "#fff",
    backgroundColor: "#111",
  },
  boton: {
    backgroundColor: "#00BFFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  textoBoton: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultado: {
    marginTop: 30,
    alignItems: "center",
  },
  textoResultado: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  textoMensaje: {
    fontSize: 20,
    color: "#00BFFF",
    marginTop: 8,
  },
});
