import React, { useState, useEffect, } from 'react'
import { 
    StatusBar, 
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Animated,
    AsyncStorage,
} from 'react-native'



export default function Main(){
    const [nome, setNome] = useState('')
    const [input, setInput] = useState('')


    useEffect(()=>{
        async function getStorage(){
           const nomeStorage = await AsyncStorage.getItem('nomes')
           if(nomeStorage!==null){
               setNome(nomeStorage)
           }
        }

        getStorage()
    },[])

    useEffect(()=>{
        async function saveStorage(){
            await AsyncStorage.setItem('nomes', nome)
        }

        saveStorage()
    },[nome])
    
    function alteraNome(){
        setNome(input)
        setInput('')
    }

    return(

        <View style={styles.container}>
            <StatusBar/>
                <Text style={styles.title}>{nome}</Text>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={alteraNome}
                >
                    <Text style={styles.btnText}>Alterar nome</Text>
                </TouchableOpacity>

                <TextInput 
                    placeholder='seu nome'
                    value={input}
                    onChangeText={text => setInput(text)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#262626',
        textAlign: 'center'
    },
    btn:{
        height: 45,
        width: 100,
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 8,
    },
    btnText:{
        color: '#f3f3f3',
        fontWeight: 'bold'
    }
})