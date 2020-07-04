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
    const [altA, setAltA] = useState(new Animated.Value(0))
    const [opacityA, setOpacityA] = useState(new Animated.Value(0))
    const [animation, setAnimation] = useState(false)

    function carregar(){
        if(animation === false){
            Animated.parallel([
                Animated.timing(
                    altA,{
                        toValue: 400,
                        duration: 2000,
                        useNativeDriver: false,
                    }
                ),
                Animated.timing(
                    opacityA,{
                        toValue: 1,
                        duration: 2000,
                        useNativeDriver: false,
                    }
                )
            ]).start()

            setAnimation(true)

        }else{
            Animated.parallel([
                Animated.timing(
                    altA,{
                        toValue: 0,
                        duration: 2000,
                        useNativeDriver: false,
                    }
                ),
                Animated.timing(
                    opacityA,{
                        toValue: 0,
                        duration: 2000,
                        useNativeDriver: false,
                    }
                )
            ]).start()

            setAnimation(false)
        }
    }
    
    return(
        <View style={styles.container}>
            <StatusBar/>
            <View style={{height: 80, alignItems: 'center', 
            justifyContent: 'center', flexDirection: 'row', backgroundColor: '#4169e1'}}>
                <TouchableOpacity
                    onPress={carregar}
                    style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
                >
                    <Text style={{fontSize: 20, color: '#eee'}}>Gerar Grafico</Text>
                </TouchableOpacity>

            </View>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                <Text>Vendas</Text>
                <Animated.View style={{width: largA, height: altA, backgroundColor: '#4169e1', justifyContent: 'center', opacity: opacityA}}>
                    <Text style={styles.title}>80%</Text>
                </Animated.View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }
})