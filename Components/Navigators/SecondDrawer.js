import { createBottomTabNavigator } from 'react-navigation-tabs';
import Initial from '../SubComponents/Initial';
import Gaseosas from '../SubComponents/Categories/Gaseosas';
import SinAzucar from '../SubComponents/Categories/SinAzucar';
import ConAzucar from '../SubComponents/Categories/ConAzucar';
const SecondDrawer = createBottomTabNavigator({
    GaseosasScreen: {
        screen: Gaseosas 
    },
    SinAzucar: {
        screen: SinAzucar
    },
    ConAzucar : {
        screen: ConAzucar
    }
})

export default SecondDrawer;