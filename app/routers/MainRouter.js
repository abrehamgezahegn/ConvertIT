import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home/Home';
import CurrencyList from '../screens/CurrencyList/CurrencyList';


const MainRouter =  createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	CurrencyList: {
		screen: CurrencyList,
		navigationOptions: {
			header: null
		}
	},
},{
	mode: "modal"
})


export default createAppContainer(MainRouter);