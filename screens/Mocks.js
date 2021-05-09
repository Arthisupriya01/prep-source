import React from 'react';
import { View, StyleSheet, Button, TextInput, ScrollView, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


// const qa = [
//     {
//         id: '1',
//         question: "this is a question",
//         option1: "option 1",
//         option2: "option 2",
//         option3: "option 3",
//         option4: "option 4",
//         answer: "option 1"
//     },
//     {
//         id: '2',
//         question: "this is a question",
//         option1: "option 1",
//         option2: "option 2",
//         option3: "option 3",
//         option4: "option 4",
//         answer: "option 3"
//     },
//     {
//         id: '3',
//         question: "this is a question",
//         option1: "option 1",
//         option2: "option 2",
//         option3: "option 3",
//         option4: "option 4",
//         answer: "option 4"
//     },
//     {
//         id: '4',
//         question: "this is a question",
//         option1: "option 1",
//         option2: "option 2",
//         option3: "option 3",
//         option4: "option 4",
//         answer: "option 2"
//     },
//     {
//         id: '5',
//         question: "this is a question",
//         option1: "option 1",
//         option2: "option 2",
//         option3: "option 3",
//         option4: "option 4",
//         answer: "option 3"
//     },
// ]
const qa = [
    {
        id: '1',
        question: "If n is an even integer, which one of the following is an odd integer?",
        option1: "n2",
        option2: "(n +1)/2",
        option3: "–2n – 4",
        option4: " 2n*n– 3",
        option5: "sqrt (n*n+2)",
        answer: " 2n*n– 3"
    },
    {
        id: '2',
        question: "If n is an integer, which of the following CANNOT be an integer?",
        option1: "(n-2)/2",
        option2: "sqrt(n)",
        option3: "2/(n+1)",
        option4: "sqrt((n*n)+3)",
        option5: "sqrt(1/(n*n+2)",
        answer: "2/(n+1)"
    },
    {
        id: '3',
        question: "If x, y, and z are positive integers such that x < y < z and x + y + z = 6, then what is the value of z ? ",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "4",
        option5: "5",
        answer: "4"
    },
    {
        id: '4',
        question: " By how much is the greatest of five consecutive even integers greater than the smallest among them?",
        option1: "1",
        option2: "2",
        option3: "4",
        option4: "8",
        option5: "10",
        answer: "2"
    },
    {
        id: '5',
        question: "Which one of the following could be an integer?",
        option1: "The average of two consecutive integers",
        option2: "The average of three consecutive integers",
        option3: "The average of four consecutive integers",
        option4: "The average of six consecutive integers",
        option5: "The average of 6 and 9",
        answer: "The average of three consecutive integers"
    },
    {
        id: '6',
        question: "(The average of five consecutive integers starting from m) – (the average of six consecutive integers starting from m) =",
        option1: "–1/4",
        option2: "–1/2",
        option3: "0",
        option4: "1/2",
        option5: "1/4",
        answer: "–1/2"
    },
    {
        id: '7',
        question: "The remainder when the positive integer m is divided by n is r. What is the remainder when 2m is divided by 2n ? ",
        option1: "r",
        option2: "2r",
        option3: "2n",
        option4: "m-nr",
        option5: " 2(m – nr)",
        answer: " 2(m – nr)"
    },
    {
        id: '8',
        question: "If 1 < p < 3, then which of the following could be true?  (I) p2<2p (II) p2=2p (III) p2>2p ",
        option1: "I only",
        option2: "II only",
        option3: "III only",
        option4: "I and II only",
        option5: "I, II, and III",
        answer: "I, II, and III"
    },
    {
        id: '9',
        question: "If 42.42 = k(14 + m/50), where k and m are positive integers and m < 50, then what is the value of k + m ? ",
        option1: "6",
        option2: "7",
        option3: "8",
        option4: "9",
        option5: "10",
        answer: "10"
    },
    {
        id: '10',
        question: "If p and q are both positive integers such that p/9 + q/10 is also an integer, then which one of the following numbers could p equal? ",
        option1: "3",
        option2: "4",
        option3: "9",
        option4: "11",
        option5: "19",
        answer: "9"
    },
]

export default class Mocks extends React.Component {

    constructor() {
        super();
        this.state = {
            resultText: "",
            calculationText: "",
            ans: "",
            modalVisible: false,
            totalScore: 0,
            button: false

        };
        this.operations = ['D', '+', '-', '*', '/'];
    }

    calculateResult() {
        const text = this.state.resultText

        this.setState({
            calculationText: eval(text)
        })
    }

    clearScreen() {
        this.setState({
            resultText: "",
            calculationText: ""
        });
    }

    validate() {
        const text = this.state.resultText
        switch (text.slice(-1)) {
            case '+':
            case '-':
            case '*':
            case '/':
                return false
        }
        return true
    }

    buttonPressed(text) {
        if (text === '=') {
            return this.validate() && this.calculateResult()
        }
        this.setState({
            resultText: this.state.resultText + text
        })
    }

    operate(operation) {
        switch (operation) {
            case 'D':
                let text = this.state.resultText.split('')
                text.pop()
                this.setState({
                    resultText: text.join('')
                })
                break
            case '+':
            case '-':
            case '*':
            case '/':
                const lastChar = this.state.resultText.split('').pop()

                if (this.operations.indexOf(lastChar) > 0) return

                if (this.state.resultText == "") {
                    return
                }
                this.setState({
                    resultText: this.state.resultText + operation
                })

        }
    }

    renderQuestions = qa => {
        return (
            <View style={{
                backgroundColor: '#FFF',
                borderRadius: 5,
                padding: 8,
                marginVertical: 8,
            }}>

                <Text>{qa.id + ")"} {qa.question} </Text>
                <TouchableOpacity onPress={() => this.setState({ ans: qa.option1 })}><Text>A. {qa.option1}{"\n"}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ ans: qa.option2 })}><Text>B. {qa.option2}{"\n"}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ ans: qa.option3 })}><Text>C. {qa.option3}{"\n"}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ ans: qa.option4 })}><Text>D. {qa.option4}</Text></TouchableOpacity>


                <Button
                    title="check"
                    onPress={() => {
                        if (this.state.ans === qa.answer) { this.setState({ totalScore: this.state.totalScore + 1 }); }
                        else { alert('You have selected the wrong answer, the correct answer is: ' + qa.answer); }
                        this.setState({ ans: "" })
                    }}

                />

            </View>
        );
    }



    render() {
        let rows = [];
        let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(<TouchableOpacity key={nums[i][j]} style={styles.btn}>
                    <Text onPress={() => this.buttonPressed(nums[i][j])} style={styles.btntext}>{nums[i][j]}</Text>
                </TouchableOpacity>);
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>);
        }

        let ops = [];
        for (let i = 0; i < 5; i++) {
            ops.push(<TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={() => this.operate(this.operations[i])}>
                <Text style={[styles.btntext, styles.white]}>{this.operations[i]}</Text>
            </TouchableOpacity>)
        }
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }}><Ionicons name="md-menu" size={24} color="black" style={{ marginLeft: 20 }} /></TouchableOpacity>
                    <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: '500', }}>Mock Test</Text>
                    <Text style={{ marginRight: 15 }}>Total Score: {this.state.totalScore}/{qa.length}</Text>

                </View>
                <View style={{ flexDirection: 'row', marginLeft: 15, flex: 1 }}>
                    <View style={styles.calculator}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { this.setState({ resultText: "", calculationText: "" }) }}><Text style={{ justifyContent: 'center', marginLeft: 5 }}>Clear</Text></TouchableOpacity>

                        <View style={styles.result}>

                            <Text style={styles.resultText}>{this.state.resultText}</Text>
                        </View>
                        <View style={styles.calculation}>
                            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
                        </View>
                        <View style={styles.buttons}>
                            <View style={styles.numbers}>
                                {rows}
                            </View>
                            <View style={styles.operations}>
                                {ops}
                            </View>
                        </View>

                    </View>







                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={qa}
                            renderItem={({ item }) => this.renderQuestions(item)}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={true}

                        />

                    </View>


                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        paddingTop: 30,
        backgroundColor: '#fff',
        paddingBottom: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF4',
        shadowColor: '#f0f8ff',
        shadowOffset: { height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        zIndex: 10,
        justifyContent: 'space-between'
    },
    calculator: {
        marginRight: 10,
        width: "30%",
        backgroundColor: '#fff',
        height: 250

    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btntext: {
        fontSize: 30,

    },
    white: {
        color: 'white'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    calculationText: {
        fontSize: 24,
        color: 'white',
    },
    resultText: {
        fontSize: 30,
        color: 'white',
    },
    result: {
        flex: 2,
        backgroundColor: '#8bc2f9',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex: 1,
        backgroundColor: '#4ba0f4',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10
    },
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        backgroundColor: '#82868c'
    },
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: '#b8babc'
    }
});
