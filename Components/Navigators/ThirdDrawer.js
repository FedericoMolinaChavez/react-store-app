import { createBottomTabNavigator } from 'react-navigation-tabs';
import Initial from '../SubComponents/Initial';
import Desayunos from '../SubComponents/Categories/Desayunos';
import subMenu from './subMenu';
const ThirdDrawer = createBottomTabNavigator({
    Desayunos: {
        screen: Desayunos 
    },
    Fake1: {
        screen: subMenu
    },
})

export default ThirdDrawer;