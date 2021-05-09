import React, { useState } from 'react';
import { View, StyleSheet, Text, SectionList, TouchableHighlight, Linking, TouchableOpacity, Button ,StatusBar } from 'react-native';
import Fire from '../Fire';

const sections = [
    {
        id: 0,
        title: 'SAT',
        link: 'https://studyabroad.shiksha.com/exams/sat/everything-you-need-to-know-about-sat',
        data: [
            { id: 0, name: 'PrepScholar', link: 'https://www.prepscholar.com/' },
            { id: 1, name: 'Official SAT Website - The College Board', link: 'https://collegereadiness.collegeboard.org/sat' },
            { id: 2, name: 'Khan Academy', link: 'https://www.khanacademy.org/test-prep/sat' },
            { id: 3, name: 'CrackSAT', link: 'https://www.cracksat.net/sat-downloads/' },
        ]

    },
    {
        id: 1,
        title: 'GRE',
        link: 'https://www.ets.org/gre/revised_general/about',
        data: [
            { id: 4, name: 'Manhattan Prep', link: 'https://www.manhattanprep.com/gre/' },
            { id: 5, name: 'Princeton Review', link: 'https://www.princetonreview.com/grad/gre-test-prep?exid=e0067721-23dc-4d67-8bd1-479eac341e19' },
            { id: 6, name: 'Magoosh', link: 'https://gre.magoosh.com/' },
            { id: 7, name: 'Official guide to the GRE general test', link: 'https://bayanebartar.org/file-dl/library/GRE/The-Official-Guide-to-the-GRE-General-Test.pdf' },
        ]
    },
    {
        id: 2,
        title: 'TOEFL',
        link: 'https://www.toeflgoanywhere.org/what-is-toefl',
        data: [
            { id: 8, name: 'Magoosh', link: 'https://magoosh.com/toefl/2017/best-free-toefl-resources/' },
            { id: 9, name: 'ETS TOEFL free preparation resources', link: 'https://www.toeflgoanywhere.org/free-preparation-resources' },
            { id: 10, name: 'learn4good.com', link: 'https://www.learn4good.com/languages/spec_english_toefl.htm' },
        ]
    },
    {
        id: 3,
        title: 'IELTS',
        link: 'https://www.ielts.org/what-is-ielts/ielts-introduction',
        data: [
            { id: 11, name: 'ielts.org', link: 'https://www.ielts.org/' },
            { id: 12, name: 'ielts-simon', link: 'https://ielts-simon.com/' },
            { id: 13, name: 'ielts buddy', link: 'https://www.ieltsbuddy.com/' },
            { id: 14, name: 'ielts Liz Youtube channel', link: 'https://www.youtube.com/user/ieltsliz' },
        ]
    },
    {
        id: 4,
        title: 'GMAT',
        link: 'https://studyabroad.shiksha.com/exams/gmat',
        data: [
            { id: 15, name: 'Manhattan Prep', link: 'https://www.manhattanprep.com/gmat/' },
            { id: 16, name: 'Magoosh', link: 'https://magoosh.com/gmat/practice-tests/free-gmat-practice-test-resources/' },
            { id: 17, name: 'GMAT PDF book', link: 'https://www.pdfdrive.com/gmat-official-guide-2019-e185817808.html' },
        ]
    },

]

export default class HomeScreen extends React.Component {

    renderItem = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => Linking.openURL(item.link)}>
                <Text
                    style={styles.rows}

                > {item.name} </Text>
            </TouchableHighlight>
        )
    }
    renderSectionHeader = ({ section }) => {
        return (
            <TouchableHighlight onPress={() => Linking.openURL(section.link)}>
                <Text style={styles.headers}

                >{section.title}</Text>
            </TouchableHighlight>
        )
    }
    render() {

        return (
            <View style={styles.container}>
                <StatusBar></StatusBar>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "100%" }}><Text style={styles.textheading}>International Exams prepration</Text>
                    {/* <Button
                        title="Sign Out"
                        style={{ position: 'absolute', top: 10, right: 20 }}
                        onPress={Fire.shared.signOutMethod}
                    /> */}
                </View>
                <SectionList
                    style={styles.container}
                    sections={sections}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                />
                <Button
                    title="Sign Out"
                    color="red"
                    style={{ margin: 5, }}
                    onPress={Fire.shared.signOutMethod}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //backgroundColor: 'white',
        //alignItems: 'center',

    },
    rows: {
        padding: 10,
        //marginBottom: 5,
        backgroundColor: 'skyblue',
        justifyContent: 'center'
    },
    headers: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    logincontainer: {
        flexDirection: 'row',
        backgroundColor: 'white',


    },
    buttoncontainer: {
        flexDirection: 'row',

    },
    textheading: {
        fontSize: 35,
        color: 'purple',
        alignItems: 'center',
    }
});
