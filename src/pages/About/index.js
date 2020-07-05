import React from 'react'
import { 
    StatusBar, 
    View, 
    Text,
    StyleSheet,
    Button,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function About({route}){
    const navigation = useNavigation()
    const data = route.params

    navigation.setOptions({
        title: `Sobre ${data?.nome}`
    })

    function toHome(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.title}>About</Text>
            <Text>{data?.nome}</Text>
            <Text>{data?.email}</Text>
            <Button 
                title='ir para home'
                onPress={toHome}
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
})