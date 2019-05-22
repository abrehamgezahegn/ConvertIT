import React from "react";
import {View,Image,TouchableOpacity} from "react-native";
import styles from "./styles"


const CurrencyInput = ({onPress}) => (
	<View style={styles.container}>
		 <TouchableOpacity style={styles.iconContainer}> 
		 	<Image style={styles.icon} resizeMode="contain" source={require("./images/gear.png")}/> 
		</TouchableOpacity> 
	</View>
)
	

export default CurrencyInput;
