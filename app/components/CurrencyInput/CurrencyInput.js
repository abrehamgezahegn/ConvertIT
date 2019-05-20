import React from "react";
import {View, TouchableHighlight, TextInput ,Text} from "react-native";
import color from "color";
import styles from "./styles"


const CurrencyInput = ({buttonText,onPress , editable = true,defaultValue}) => {
		
	const containerStyles = [styles.container]
	if(editable === false)
		containerStyles.push(styles.containerDisabled)

	const underlayColor = color("#fff").darken(0.2);
		

	return(	<View  style={containerStyles}>
			<TouchableHighlight underlayColor = {underlayColor}  style={styles.buttonContainer} onPress={onPress}>
			 <Text style={styles.buttonText}>{buttonText}</Text>
			  </TouchableHighlight> 
			  <View style={styles.border}/>
			 <TextInput style={styles.input} editable={editable} keyboardType='numeric' defaultValue={defaultValue}/>
		</View>
)
}
	

export default CurrencyInput;
