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
    const [largA, setLargA] = useState(new Animated.Value(150))
    const [altA, setAltA] = useState(new Animated.Value(150))
    const [opacityA, setOpacityA] = useState(new Animated.Value(1))

    Animated.loop(
        Animated.parallel([
            Animated.sequence([
                Animated.timing(
                    largA,{
                        toValue: 300,
                        duration: 2000,
                        useNativeDriver: false,
                    }
                ),
    
                Animated.timing(
                    largA,{
                        toValue: 150,
                        duration: 2000,
                        useNativeDriver: false,
                    }
                )
            ]),

            Animated.sequence([
                Animated.timing(
                    altA,{
                        toValue: 300,
                        duration: 2000,
                        useNativeDriver: false,
                    }
                ),
    
                Animated.timing(
                    altA,{
                        toValue: 150,
                        duration: 2000,
                        useNativeDriver: false,
                    }
                )
            ])
        ])
    ).start()
    
    return(
        <View style={styles.container}>
            <StatusBar/>
            <Animated.View style={{width: largA, height: altA, opacity: opacityA, backgroundColor: '#4169e1', justifyContent: 'center'}}>
                <Text style={styles.title}>Carregando...</Text>
            </Animated.View>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
})