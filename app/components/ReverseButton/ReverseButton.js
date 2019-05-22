import React from 'react';
import {TouchableOpacity , View , Text , Image} from "react-native";
import styles from './styles';


const ReverseButton = ({onPress, text}) => (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}> 
				<Image resizeMode="contain" style={styles.image} source={require('./images/icon.png')}/> 
				<Text style={styles.text} >{text}</Text>
			</View>
		</TouchableOpacity>)


export default ReverseButton;