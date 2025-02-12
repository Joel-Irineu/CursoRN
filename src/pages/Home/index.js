import React from 'react'
import { 
    StatusBar, 
    View, 
    Text,
    StyleSheet,
    Button,
} from 'react-native'
import {useNavigation} from '@react-navigation/native'


export default function Home(){
    const navigation = useNavigation()

    function toSend(){
        navigation.navigate('Send')
    }

    return(

        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.title}>Home</Text>

            <Button 
                title='ir para conversa'
                onPress={toSend}
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