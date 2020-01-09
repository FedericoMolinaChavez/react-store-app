import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from '../Login';
import MainDrawer from './MainDrawerStack';
import React from 'react';
import SecondDrawer from './SecondDrawer';
import ThirdDrawer from './ThirdDrawer';
import FourthDrawer from './FourthDrawer';
import FifthDrawer from './FifthDrawer';
import { Button } from 'react-native';
const Navigator = createStackNavigator(
    {
        Login: {screen: Login , 
            navigationOptions:({ navigate, navigation })=>({
                title: "strings.register",
                headerBackTitle:null,
                header: null
        })},
        Drawer: {screen: MainDrawer,
        navigationOptions:({navigate, navigation})=> ({
            headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer'></Button>)
        })},
        Gaseosas: {screen: SecondDrawer,
            navigationOptions:({navigate, navigation})=> ({
                headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
            })},
        Desayunos: {screen: ThirdDrawer,
            navigationOptions:({navigate, navigation})=> ({
                headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
            })},
        Almuerzos: {screen: FourthDrawer,
            navigationOptions:({navigate, navigation})=> ({
                headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
            })},
        Vinos: {screen: FifthDrawer,
            navigationOptions:({navigate, navigation})=> ({
                headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
            })}
        

    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions:{
            /*title:'INICIO',//*/ /*ponerlo dinamico que cambie con elcomponente*/
     
             headerStyle: {
               backgroundColor: '#6747ef',
               height: 45,
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
             fontWeight: 'bold',
             },
           }
    }
);

export default createAppContainer(Navigator)