import EStyleSheet from "react-native-extended-stylesheet";


export default EStyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	image: {
		width: 25,
		height: 25
	},
	text: {
		color: "$white",
		fontWeight: "800",
		marginLeft: 10
	}
})