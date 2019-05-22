import React from "react";
import {ScrollView, StatusBar, Platform} from "react-native"
import {Ionicons} from "@expo/vector-icons";
import {ListItem} from "../../components/ListItem";

class Options extends React.Component{
		
	themePress = () => {
		console.log("theme press");
	};
	
	linkPress = () => {
		console.log("link press");
	}

	render(){
		const iconPrefix = Platform === 'ios' ? "ios" : "md";

		return(
			<ScrollView>
				<StatusBar translusent={false} barStyles="default"/>
				<ListItem
					 onPress = {this.themePress} 
					 item="Themes" 
					 customIcon={
					 	<Ionicons
					 		 name={`${iconPrefix}-arrow-forward`} 
							 color="#868686" 
							 size={30}
						/>
					 }
				 />
				<ListItem 
					onPress = {this.linkPress}  
					item="link" 
					customIcon={
						<Ionicons
					 		 name={`${iconPrefix}-link`} 
							 color="#868686" 
							 size={30}											
						/>
					}
				/>
			</ScrollView>
		)
	}
}

export default Options;