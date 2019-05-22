import EStyleSheet from "react-native-extended-stylesheet";
import {StatusBar} from 'react-native';



export default EStyleSheet.create({
	container: {
		position: "absolute",
		top: 0,
		right: 0,
		left:0,
		'@media ios': {
			paddingTop: 20
		},
		'@media android': {
			paddingTop: StatusBar.currentHeight
		}
	},
	iconContainer: {
		alignSelf: "flex-end",
		padding: 20,

	},
	icon: {
		height: 24,
		width: 24,
	},
	headerContainer: {
		height: "15%",
		flexDirection: "row",
		alignItems: "flex-end",
		paddingVertical: 10,
		paddingHorizontal: 20,
		width: "100%",
		backgroundColor: "yellow",
		shadowColor: '#000',
    	shadowOffset: { width: -20, height: 20 },
    	shadowOpacity: 0.8,
    	shadowRadius: 10
    },
	headerTitle: {
		fontWeight: "700",
		color: "rgba(0,0,0,0.8)",
		fontSize: 20,
		marginLeft: 30
	}
})