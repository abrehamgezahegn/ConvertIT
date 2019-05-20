import React from "react";
import {View,Text,Image ,ImageBackground} from "react-native";
import styles from "./styles";

const Logo = () => (
		<View style={styles.container}>
			<ImageBackground style={styles.containerImage} source={require('./images/background.png')}>
					<Image style={styles.image}  source={require("./images/logo.png")}/>  
			</ImageBackground>
			<Text styles={styles.text}>Convert the shit out of it</Text>
		</View>
	)

export default Logo;
