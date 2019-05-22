import React from "react";
import {View,Image} from "react-native"
import styles from "./styles"

const Icon = () => (
	<View style={styles.icon}>


				<Image source={require('./images/check.png')} style={styles.check}/></View>
)
	

export default Icon;