import React from "react";
import {View,Text,FlatList , StatusBar} from "react-native";
import currencies from "../../data/currencyList"
import {ListItem} from '../../components/ListItem'
import {Header} from "../../components/Header";


class CurrencyList extends React.Component{

	
	handleSelect = () => {
		console.log("item clicked bro");
	}
	
	render(){
		return(
			<View style={{flex: 1}}>
				<StatusBar barStyles='default' translucent={false}/>
				<Header title={this.props.navigation.state.params.title} onBack={()=> {this.props.navigation.goBack()}}/>
				<FlatList data = {currencies} renderItem={({item})=> <ListItem selected ={item === "USD"} item={item} onPress={this.handleSelect}/> } keyExtractor = {(item)=> item} />
			</View>

		)
	}	
}



export default CurrencyList;