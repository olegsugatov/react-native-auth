import React, { Component } from 'react';
import { 
	StyleSheet, 
	View, 
	TextInput, 
	TouchableOpacity, 
	Text, 
	StatusBar, 
	AsyncStorage } from 'react-native';

const ACCESS_TOKEN = 'access_token';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }

	async onLoginPressed() {
	  this.setState({showProgress: true})
	  try {
	    let response = await fetch('https://mobile.aidbox.io/signin', {
	                    method: 'POST',
	                    headers: {
	                      'Accept': 'application/json',
	                      'Content-Type': 'application/json',
	                    },
	                    body: JSON.stringify({
	                    	email: this.state.email,
	                    	password: this.state.password
	                    })
	                  });
	    let res = await response.text();
	    if (response.status >= 200 && response.status < 300) {
	        //Handle success
	        let accessToken = res;
	        console.log(accessToken);
	        //On success we will store the access_token in the AsyncStorage
	        // this.storeToken(accessToken);
	        // this.redirect('home');
	    } else {
	        //Handle error
	        let error = res;
	        throw error;
	    }
	  } catch(error) {
	      this.setState({error: error});
	      console.log("error " + error);
	      this.setState({showProgress: false});
	  }
	}

	render() {
		return (
			<View style={styles.container}>
			<StatusBar
				barStyle="dark-content"
			/>
				<Text style={styles.error}>
          			{this.state.error}
        		</Text>
				
				<TextInput
				onChangeText={ (text)=> this.setState({email: text}) }
				placeholder="Email"
				placeholderTextColor="rgba(255, 255, 255, 0.7)"
				returnKeyType="next"
				onSubmitEditing={() => this.passwordInput.focus()}
				keyboardType="email-address"
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.input}
				/>
				
				<TextInput 
				onChangeText={ (text)=> this.setState({password: text}) }
				placeholder="Password"
				placeholderTextColor="rgba(255, 255, 255, 0.7)"
				returnKeyType="go"
				secureTextEntry
				style={styles.input} 
				ref={(input) => this.passwordInput = input}
				/>

				<TouchableOpacity 
					onPress={this.onLoginPressed.bind(this)}
					style={styles.buttonContainer}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 45,
		backgroundColor: 'rgba(255, 255, 255, 1)',
		marginBottom: 10,
		color: '#192F3D',
		paddingHorizontal: 10
	},
	buttonContainer: {
		backgroundColor: '#2B4961',
		paddingVertical: 15
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFF',
		fontWeight: '700'
	},
	error: {
	  color: 'red',
	  marginBottom: 10
	}
});