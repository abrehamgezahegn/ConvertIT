import React from "react";
import Home from "./screens/Home/Home";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
	$primaryBlack: '#0b0C10',
	$darkGrey: '#1F2833',
	$lightGrey: "#C5c6c7",
	$electricBlue: "#66fcf1",
	$electricBlueD: "#45a29e"
})


export default () => <Home />;