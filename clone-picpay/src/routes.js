import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Wallet from './pages/Wallet';

const Tab = createBottomTabNavigator();

export default function Routes () {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    tabStyle: {
                        justifyContent: "center",
                        alignItems: "center",
                    },
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Wallet" component={Wallet} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}