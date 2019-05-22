import React from 'react';
import {Text} from "react-native"
import moment from "moment";
import styles from './styles';


const LastConverted = ({base,quote,conversionRate, date,}) => (
		<Text style={styles.smallText}> 1 {base} = {conversionRate} {quote} as of {moment(date).format("MMMM DD, YY")} </Text>
		)


export default LastConverted;