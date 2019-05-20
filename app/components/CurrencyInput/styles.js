import EStyleSheet from "react-native-extended-stylesheet";

const inputHieght = 50;
const borderRadius = 4;


export default EStyleSheet.create({
	container: {
		backgroundColor: "$white",
		height: inputHieght,
		width: "85%",
		borderRadius: borderRadius,
		flexDirection: "row",
		marginVertical: 15
	},
	containerDisabled: {
		backgroundColor: "$border"
	},
	buttonContainer: {
		backgroundColor: "$white",
		height: inputHieght,
		alignItems: "center",
		justifyContent: "center",
		borderTopLeftRadius: borderRadius,
		borderBottomLeftRadius: borderRadius 

	},
	buttonText: {
		color: "$darkGrey",
		fontWeight: '800',
		fontSize: 18,
		paddingHorizontal: 10

	},
	input: {
		flex: 1,
		fontSize: 20,
		height: inputHieght,
		paddingHorizontal: 15,
	},
	border: {
		backgroundColor: "$border",
		width: 1,
		height: inputHieght
	}

})