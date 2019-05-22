import React, { Component } from 'react';
import {View , Text , StatusBar} from "react-native";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import CurrencyInput from "../../components/CurrencyInput/CurrencyInput";
import ReverseButton from "../../components/ReverseButton/ReverseButton";
import {LastConverted} from "../../components/Text";
import {HomeHeader} from "../../components/Header";


class Home extends Component {


		baseCurrencyHandle = () => {
			this.props.navigation.navigate("CurrencyList",{title: "Base Currency" })
		};
		quoteCurrencyHandle = () => {
			this.props.navigation.navigate("CurrencyList" , {title: "Quote Currency"})
		};
		
		swapCurrency = () => {
			console.log("reversing")
		}

	render() {
		return (
		<Container>
			<StatusBar translusent= {false}  barStyle="light-content" />
			<HomeHeader />
			<Logo />
			<CurrencyInput onPress={this.baseCurrencyHandle} buttonText="USD" defaultValue="100"/>
			<CurrencyInput onPress={this.quoteCurrencyHandle} buttonText="ETB" editable={false}/>
			<LastConverted base="USD" quote="ETB" conversionRate={30} date={new Date()}/>
			<ReverseButton onPress={this.swapCurrency} text="reverse currency" />
		</Container>
		);
	}
}

export default Home;