import React from 'react';
import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import Fire from '../Fire';

export default class RegisterScreen extends React.Component {

    state = {
        user: {
            email: '',
            password: '',
            name: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Register to start preparing!</Text>
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="gray"
                    style={styles.input}
                    autoCapitalize='none'
                    onChangeText={name => this.setState({ user: { ...this.state.user, name } })}
                    value={this.state.user.name}
                />
                <Text>{"\n"}</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="gray"
                    style={styles.input}
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ user: { ...this.state.user, email } })}
                    value={this.state.user.email}
                /><Text>{"\n"}</Text>
                <TextInput
                    placeholder="Create Password"
                    placeholderTextColor="gray"
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={password => this.setState({ user: { ...this.state.user, password } })}
                    value={this.state.user.password}
                /><Text>{"\n"} </Text>
                <Button
                    title="Register"
                    onPress={() => { Fire.shared.createUser(this.state.user) }}
                />
                <TouchableOpacity>
                    <Text style={{ fontSize: 15 }}>Already have an account?<Text style={{ color: 'deepskyblue' }} onPress={() => this.props.navigation.navigate('Login')}>{" "}Login</Text></Text>
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
    heading: {
        fontSize: 20,

    },
    input: {
        backgroundColor: "lightgray",
        width: 400,
        padding: 10,
        borderRadius: 15

    },
})
