import {Dimensions} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

let imageSize = Dimensions.get("window").width / 2;

export default EStyleSheet.create({
	
	$largeContainerSize : imageSize,
	$largeImageSize :imageSize / 2,
	$smallContainerSize : imageSize / 2,
	$smallImageSize : imageSize / 4,

	container: {
		alignItems: "center",
		justifyContent:"center"
	},
	containerImage: {
		justifyContent:"center",
		alignItems: "center",
		width: '$largeContainerSize',
		height: '$largeContainerSize'
	},
	image: {
		width: '$largeImageSize',
		height: '$largeImageSize'
	},
	text: {
		color: "$white",
		marginTop: 30,
		fontWeight: '700',
		fontSize: 24 ,
		letterSpacing: 0.5

	}
})