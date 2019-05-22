import React from "react";
import {View , TouchableHighlight , Text} from "react-native"
import Icon from './Icon';
import styles from "./styles"

const ListItem = ({onPress , item , selected=false ,customIcon=null}) => (
	<View>
		<TouchableHighlight onPress = {onPress} underlayColor={styles.underlayColor}>
			<View style={styles.row}>
				<Text style = {styles.text}> {item} </Text>
				{selected && <Icon /> }
				{customIcon}
			</View>
		</TouchableHighlight>
		<View style = {styles.separator}/>
	</View>

)
	

export default ListItem;