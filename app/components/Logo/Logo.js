import React from "react";
import {View,Text,Image ,ImageBackground,Keyboard,Animated} from "react-native";
import styles from "./styles";



class Logo extends React.Component {
	
	constructor(props){
		super(props);
		this.containerImageSize = new Animated.Value(styles.$largeContainerSize)
		this.imageSize = new Animated.Value(styles.$largeImageSize);
	}


	componentDidMount(){
		console.log("mounted mounted")
		this.keyboardShowListener = Keyboard.addListener('keyboardDidShow' , this.showKeyboard);
		this.keyboardHideListener = Keyboard.addListener('keyboardDidHide' , this.hideKeyboard);
	};

	componentWillUnmount(){
		this.keyboardShowListener.remove();
		this.keyboardHideListener.remove();
	}

	showKeyboard = () => {
		console.log('keyboard is up')
		// Animated.timing(this.containerImageSize , {
		// 	toValue: styles.$smallContainerImageSize,
		// 	duration: 250
		// }).start()
		// Animated.timing(this.imageSize , {
		// 	toValue: styles.$smallImageSize,
		// 	duration: 200
		// }).start()
	};

	hideKeyboard = () => {
		// console.log('keyboard is hidden');
		// Animated.timing(this.imageSize , {
		// 	toValue: styles.$largeImageSize,
		// 	duration: 250
		// })
	} 

	render(){
		const containerImageStyles = [styles.containerImage , {width: this.containerImageSize , height: this.containerImageSize}]
		const imageStyles = [styles.image , {width: this.imageSize , height: this.imageSize}]

		return(	
		<View style={styles.container}>
			<ImageBackground resizeMode="contain" style={containerImageStyles} source={require('./images/background.png')}>
				<Animated.Image resizeMode="contain"  style={imageStyles}  source={require("./images/logo.png")}/>  
			</ImageBackground>
			<Text style={styles.text}>Convert IT</Text>
		</View>)
	}
}

export default Logo;
