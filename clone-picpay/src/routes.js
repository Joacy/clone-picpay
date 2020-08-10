import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Pay from './pages/Pay';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

const Tab = createBottomTabNavigator();

export default function Routes () {
    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle: {
                    justifyContent: "center",
                    alignItems: "center",
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    title: 'Carteira',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="creditcard" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Pay"
                component={Pay}
                options={{
                    title: 'Pagar',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="creditcard" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notificações"
                component={Notifications}
                options={{
                    title: 'Notificações',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-notifications-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: 'Ajustes',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}