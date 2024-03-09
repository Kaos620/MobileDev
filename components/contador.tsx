import { useState } from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Octicons";


export default function Contador (){
    
    const [likes, setLikes] = useState<number>(0)
    const incrementarContador = () => setLikes(likes + 1)
    const reduzirContador = () => setLikes(likes - 1)
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Seu total de likes é: {likes}</Text>

            <TouchableOpacity onPress={incrementarContador} style= {styles.button}>
                <Icon name = "thumbsup" size = {20} color={"white"}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={reduzirContador} style= {styles.button}>
                <Icon name = "thumbsdown" size = {20} color={"white"}/>
            </TouchableOpacity>

        </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            gap: 3,
            borderWidth: 1,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center'

          },

        button:{
            borderColor: 'white',
            padding: 5,
        },

        text: {
            padding: 4,
            color: 'yellow'
          },
    })