import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import MainRouter from './routers/MainRouter';


EStyleSheet.build({
	$darkText: '#868686',
	$primaryBlack: '#0b0C10',
	$border: "#e2e2e2",
	$darkGrey: '#1F2833',
	$lightGrey: "#f0f0f0",
	$white: "#fff",
})


export default () => <MainRouter />;