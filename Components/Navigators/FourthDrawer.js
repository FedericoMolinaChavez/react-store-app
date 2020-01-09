import { createBottomTabNavigator } from 'react-navigation-tabs';
import Initial from '../SubComponents/Initial';
import Almuerzos from '../SubComponents/Categories/Almuerzos';
import Fake5 from '../SubComponents/Categories/Fake5';
import Fake6 from '../SubComponents/Categories/Fake6';
const FourthDrawer = createBottomTabNavigator({
    Almuerzos: {
        screen: Almuerzos
    },
    Fake5: {
        screen: Fake5
    },
    Fake6: {
        screen: Fake6
    }
})

export default FourthDrawer;