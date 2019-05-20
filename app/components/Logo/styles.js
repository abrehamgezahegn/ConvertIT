import {Dimensions} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

let imageWidth = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent:"center"
	},
	containerImage: {
		justifyContent:"center",
		alignItems: "center",
		width: imageWidth,
		height: imageWidth
	},
	image: {
		width: imageWidth / 2,
		height: imageWidth / 2
	},
	text: {
		color: "$white",
		marginTop: 30,
		fontWeight: '700',
		fontSize: 24 ,
		letterSpacing: 0.5

	}
})