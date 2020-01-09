import { createBottomTabNavigator } from 'react-navigation-tabs';
import Fake3 from '../SubComponents/Categories/Fake3'
import Fake4 from '../SubComponents/Categories/Fake4'

const OtherSub = createBottomTabNavigator({
    Fake3: {
        screen: Fake3 
    },
    Fake4: {
        screen: Fake4 
    }
})

export default OtherSub;