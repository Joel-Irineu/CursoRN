import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'; 

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Send from './pages/Send'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const icons = {
    Home: {
        name: 'ios-home'
    },
    About: {
        name: 'ios-people'
    },
    Contact: {
        name: 'ios-call'
    }
}

function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({color, size}) => {
                    const {name} = icons[route.name]
                    return <Ionicons name={name} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                style:{
                    backgroundColor: '#262626'
                },
                activeTintColor: '#f3f3f3'
            }}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='About' component={About} />
            <Tab.Screen name='Contact' component={Contact} />
        </Tab.Navigator>
    )
}

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Tabs} options={{headerShown: false}} />
                <Stack.Screen name='Send' component={Send} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}