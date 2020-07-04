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
} from 'react-native'



export default function Main(){
    const [largA, setLargA] = useState(new Animated.Value(0))
    const [altA, setAltA] = useState(new Animated.Value(50))
    const [opacityA, setOpacityA] = useState(new Animated.Value(1))
    const [animation, setAnimation] = useState(false)

    Animated.timing(
        largA,{
            toValue: 100,
            duration: 5000,
            useNativeDriver: false
        }
    ).start()
    
    let porcA = largA.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    })

    return(

        <View style={styles.container}>
            <StatusBar/>
            <Animated.View style={{width: porcA, height: altA, backgroundColor: '#4169e1', justifyContent: 'center'}}>
                <Text style={styles.title}>carregando...</Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    title:{
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
})