import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [resultado, setResultado] = useState('');

  const sumar = () => setResultado(Number(a) + Number(b));
  const restar = () => setResultado(Number(a) - Number(b));
  const multiplicar = () => setResultado(Number(a) * Number(b));
  const dividir = () => {
    if (Number(b) === 0) {
      setResultado('Error: división entre 0');
    } else {
      setResultado(Number(a) / Number(b));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Básica</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa el primer valor"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresa el segundo valor"  
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <View style={styles.botones}>
        <TouchableOpacity style={[styles.boton, { backgroundColor: '#4F1C51' }]} onPress={sumar}>
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, { backgroundColor: '#A55B4B' }]} onPress={restar}>
          <Text style={styles.textoBoton}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, { backgroundColor: '#210F37' }]} onPress={multiplicar}>
          <Text style={styles.textoBoton}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, { backgroundColor: '#DCA06D' }]} onPress={dividir}>
          <Text style={styles.textoBoton}>÷</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#210F37',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A55B4B',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#FFF',
  },
  botones: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    width: '80%',
  },
  boton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4F1C51',
  },
});

