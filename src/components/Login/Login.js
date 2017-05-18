import React, { Component } from 'react';
import { StyleSheet, View, Image, Text,KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo} 
						source={require('../../images/logo_180.png')}
					/>
					<Text style={styles.title}>An app mode for aidbox using React Native</Text>
				</View>
				<View style={styles.formContainer}>
					<LoginForm />
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#B4E1DA'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		// width: 100,
		// height: 40
	},
	title: {
		color: '#192F3D',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity: 0.9
	}
});