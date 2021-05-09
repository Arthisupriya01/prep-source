import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import firebase from 'firebase';

export default class LoadingScreen extends React.Component {

    componentDidMount() {
        try {
            firebase.auth().onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? "App" : "Auth");
            });
        }
        catch (error) {
            alert('Signed Out!!')
        }
        // let user = firebase.auth().getCurrentUser();
        // if (user){
        //     this.props.navigation.navigate('App')
        // }
        // else{
        //     this.props.navigation.navigate('Auth')
        // }
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator animated size="large" />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

});
