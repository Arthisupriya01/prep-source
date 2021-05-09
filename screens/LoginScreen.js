import React from 'react';
import { Image, View, StyleSheet, Text, Button, Linking, TextInput, TouchableOpacity , StatusBar} from 'react-native';
import { SocialIcon } from 'react-native-elements';
import * as SplashScreen from 'expo-splash-screen';
import Fire from '../Fire';

export default class LoginScreen extends React.Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }


    render() {


        return (
            <View style={styles.container}>
                <Image
                    source={require("../assets/Search.jpg")}
                    style={{ height: 100, width: 100, borderRadius: 100 }}

                />

                <Text style={{ fontSize: 20 }}>Login to continue{"\n"}</Text>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="gray"
                    style={styles.input}
                    onChangeText={email => this.setState({ user: { ...this.state.user, email } })}
                    value={this.state.user.email}
                />
                <Text>{"\n"}</Text>
                <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ user: { ...this.state.user, password } })}

                /><Text>{"\n"} </Text>
                <TouchableOpacity onPress={() => { Fire.shared.login(this.state.user) }} style={{ width: 300, borderRadius: 20, backgroundColor: 'dodgerblue', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '400' }}>Login</Text>
                </TouchableOpacity>

                <View>
                    <SocialIcon type="google" button style={{ width: 300 }} title="Login with Google" onPress={() => { Linking.openURL('https://www.google.com/') }} />
                    <SocialIcon type="facebook" button style={{ width: 300 }} title="Login with Facebook" onPress={() => { Linking.openURL('https://www.facebook.com/') }} />
                </View>

                <TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>new User?<Text style={{ color: 'deepskyblue' }} onPress={() => this.props.navigation.navigate('Register')}>{" "}Register</Text></Text>
                </TouchableOpacity>
            </View>
        );


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: "lightgray",
        width: 400,
        padding: 10,
        borderRadius: 15

    }
})