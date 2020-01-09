import { createBottomTabNavigator } from 'react-navigation-tabs';
import Initial from '../SubComponents/Initial';
import Vinos from '../SubComponents/Categories/Vinos';
import Fake9 from '../SubComponents/Categories/Fake9';
import Fake8 from '../SubComponents/Categories/Fake8';
const FifthDrawer = createBottomTabNavigator({
    Vinos: {
        screen: Vinos  
    },
    Fake8: {
        screen: Fake8 
    },
    Fake9: {
        screen: Fake9
    }
})

export default FifthDrawer;