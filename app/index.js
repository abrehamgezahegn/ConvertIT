import React from "react";
import Home from "./screens/Home/Home";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
	$primaryBlack: '#0b0C10',
	$border: "#e2e2e2",
	$darkGrey: '#1F2833',
	$lightGrey: "#f0f0f0",
	$white: "#fff"
})


export default () => <Home />;