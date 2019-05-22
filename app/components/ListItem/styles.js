import EStyleSheet from "react-native-extended-stylesheet";
import {StyleSheet} from 'react-native'


export default EStyleSheet.create({
	
	$underlayColor: '$lightGrey',

	row: {
		paddingVertical: 20,
		paddingHorizontal: 20,
		flexDirection: 'row',
		backgroundColor: "$white",
		justifyContent: 'space-between',
		alignItems: "center"
	},
	text: {
		color: '$darkText',
		fontSize: 18,
		fontWeight: "600",
		textAlign: "left"
	},
	separator: {
		marginLeft: 20,
		flex: 1,
		backgroundColor: '$border',
		height: StyleSheet.hairlineWidth
	},
	icon: {
		backgroundColor: "$primaryBlack",
		width: 20,
		height: 20,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center"
	},
	check: {
		width: 10,
		height: 10
	}
})