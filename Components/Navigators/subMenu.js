import { createBottomTabNavigator } from 'react-navigation-tabs';
import Fake1 from '../SubComponents/Categories/Fake1'
import Fake2 from '../SubComponents/Categories/Fake2'
import OtherSub from './OtherSub'
const SubMenu = createBottomTabNavigator({
    Desayunos: {
        screen: Fake1 
    },
    Fake1: {
        screen: Fake2 
    },
    Fake3: {
        screen: OtherSub
    }
})

export default SubMenu;