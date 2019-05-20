import React, { Component } from 'react';
import {View , Text , StatusBar} from "react-native";
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";


class Home extends Component {
	
	render() {
				return (
		<Container >
			<StatusBar translusent= {false}  barStyle="light-content" />
			<Logo />
		</Container>
		);
	}
}

export default Home;