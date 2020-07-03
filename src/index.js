import React, { useState} from 'react'
import { 
    StatusBar, 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native'

import api from './services/api'

// 


export default function Main({moedaA, moedaB}){
    const [moedaAValue, setMoedaAValue] = useState(0)
    const [moedaBValue, setMoedaBValue] = useState(0)
    const [convertedValue, setConvertedValue] = useState(0)

    async function toConvert(){
        let fromTo = `${moedaA}_${moedaB}`
        const response = await api.get(`/convert?q=${fromTo}&compact=ultra&apiKey=82ff10a9cdd45201e36f`)
        let quotation = response.data[fromTo]
        if(moedaBValue !== ''){
            let conversion = (quotation * parseFloat(moedaBValue))
            setConvertedValue(conversion)
    
            Keyboard.dismiss()
        }else{
            alert('Digite um valor!')
        }
        
    }

    return(
        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.title}>{moedaA} Para {moedaB}</Text>
            <TextInput 
                placeholder='Digite o valor'
                style={styles.input}
                onChangeText={(moedaBValue)=> setMoedaBValue(moedaBValue)}
                keyboardType='numeric'
                placeholderTextColor='#26262688'
                nderlineColorAndroid='transparent'
            />
            <TouchableOpacity 
                style={styles.btn}
                onPress={toConvert}
            >
                <Text style={styles.btnText}>Converter</Text>
            </TouchableOpacity>

            {convertedValue === 0?
                (<Text style={styles.convertedValue}></Text>)
            :
                (<Text style={styles.convertedValue}>{convertedValue.toFixed(2)}</Text>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        backgroundColor: '#ffffee'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#262626',
    },
    input:{
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        color: '#262626',
        padding: 5,
        fontSize: 15,
        textAlign: 'center',
        borderRadius: 5,
    },
    btn:{
        width: 150,
        height: 45,
        backgroundColor: '#f26',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 8,
    },
    btnText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f3f3f3'
    },
    convertedValue:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#262626'
    },
})