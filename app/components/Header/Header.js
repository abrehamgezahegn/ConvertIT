import React from "react";
import {View , Text , Platform , TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import styles from './styles';

const iconPrefix = Platform === 'md' ? 'md' : 'ios';

const Header = ({title}) => (
	<View style={styles.headerContainer}>
	<TouchableOpacity style={{padding: 0}}>
			<Ionicons
	 		 name={`${iconPrefix}-arrow-forward`} 
			 color="#868686" 
			 size={30}
		/>
	</TouchableOpacity>

		<Text style={styles.headerTitle}> {title} </Text>
	</View>	
)

export default Header;