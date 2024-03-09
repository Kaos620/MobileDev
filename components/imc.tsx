import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default function IMC() {
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
        <Text style={styles.text}>Cálculo de IMC</Text>
        <TextInput 
          placeholder='Digite sua altura (Ex: 1.80)'
          onChangeText={(txtAltura) => setAltura(parseFloat(txtAltura))}
          keyboardType='numeric'
          style={styles.input}
        />
        <TextInput 
          placeholder='Digite seu peso (Ex: 95.2)'
          onChangeText={(txtPeso) => setPeso(parseFloat(txtPeso))}
          keyboardType='numeric'
          style={styles.input}
        />

        <TouchableOpacity onPress={calcularIMC} style={styles.button}>
          <Text style={styles.buttonText}>Calcular seu IMC</Text>
        </TouchableOpacity>
        {imc !== null ? 
        ( <Text style={styles.text}>Seu IMC é: {imc.toFixed(2)}</Text> ) 
          : 
        ( <Text style={styles.text}>Valores Inválidos</Text> )
        }
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
    gap: 3,
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
  button: {
    borderColor: 'white',
    backgroundColor: 'yellow',
    padding: 5,
    borderRadius: 5,
    borderWidth:  2,
},

  buttonText: {
    color:'black',
    fontSize: 14,
    padding: 5,
  }
});
