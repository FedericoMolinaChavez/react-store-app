import { createDrawerNavigator } from "react-navigation-drawer";
import Initial from '../SubComponents/Initial';
import Gaseosas from '../SubComponents/Categories/Gaseosas';
import SinAzucar from '../SubComponents/Categories/SinAzucar';
import React from 'react';
import { Button } from 'react-native';
import SecondDrawer from './SecondDrawer';
import ThirdDrawer from "./ThirdDrawer";
import FourthDrawer from "./FourthDrawer";
import FifthDrawer from "./FifthDrawer";
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Initial,
        navigationOptions:({navigate, navigation})=> ({
            headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
        }) 
    },
    Gaseosas: {screen: SecondDrawer,
        navigationOptions:({navigate, navigation})=> ({
            headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
        })},
    Desayunos: {screen: ThirdDrawer,
        navigationOptions:({navigate, navigation})=> ({
            headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
        })
    },
    Almuerzos: {screen: FourthDrawer,
        navigationOptions:({navigate, navigation})=> ({
            headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
        })},
    Vinos: {screen: FifthDrawer,
        navigationOptions:({navigate, navigation})=> ({
            headerLeft : (<Button onPress= {()=> {navigation.openDrawer();}} title ='drawer2'></Button>)
        })} 
})


export default MyDrawerNavigator;