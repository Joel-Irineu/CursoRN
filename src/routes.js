import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                    options={{
                        title: 'Inicio',
                        headerStyle: {
                            backgroundColor: '#262626'
                        },
                        headerTintColor: '#f3f3f3',
                        headerShown: false
                    }}
                />
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='Contact' component={Contact} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}