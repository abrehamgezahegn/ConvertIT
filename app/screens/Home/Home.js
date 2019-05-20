import React, { Component } from 'react';
import {View , Text , StatusBar} from "react-native";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import CurrencyInput from "../../components/CurrencyInput/CurrencyInput";

const buttonText = "USD";


class Home extends Component {
	convertableHandle = () => {
			console.log("convertableHandle")
		};
		resultHandle = () => {
			console.log("resultHandle")
		}
	

	render() {
		return (
		<Container>
			<StatusBar translusent= {false}  barStyle="light-content" />
			<Logo />
			<CurrencyInput onPress={this.convertableHandle} buttonText="USD" defaultValue="100"/>
			<CurrencyInput onPress={this.resultHandle} buttonText="ETB" editable={false}/>
		</Container>
		);
	}
}

export default Home;