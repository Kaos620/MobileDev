import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState<number>(0.0);
  const [altura, setAltura] = useState<number>(0.0);
  const [imc, setImc] = useState<number | null>(null);

  const calcularIMC = () => {
    if (peso && altura) {
      // const alturaCalc = altura / 100; // Convertendo altura para metros
      
      const alturaCalc = altura * altura
      const IMC = peso / alturaCalc
      setImc(IMC);
    } else {
      setImc(null); // Define o IMC como nulo para que não seja exibido na tela
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculo de imc</Text>
      <TextInput 
        placeholder='Digite sua altura'
        onChangeText={(txtAltura) => setAltura(parseFloat(txtAltura))}
        keyboardType='numeric'
        style={styles.input}
      />
      <TextInput 
        placeholder='Digite seu peso'
        onChangeText={(txtPeso) => setPeso(parseFloat(txtPeso))}
        keyboardType='numeric'
        style={styles.input}
      />

      <Button title="Calcular" onPress={calcularIMC}/> 
      {imc !== null ? (
        <Text style={styles.text}>Seu IMC é: {imc.toFixed(2)}</Text>
      ) : (
        <Text style={styles.text}>Valores Inválidos</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    width: '15%',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'yellow',
    borderRadius: 15,
    borderColor: 'white',
  },
  
  text: {
    padding: 4,
    color: 'yellow'
  },
});
