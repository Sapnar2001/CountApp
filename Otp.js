import { Text, View, Image, StyleSheet, TextInput, ScrollView, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export default class StylingAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            num3: "",
            num4: "",
        }
    }

    render() {
        // const  {num1}=this.state
        return (
            <>
                <View style={styles.main}>
                    <Text style={styles.mainText}>Log into Saavn</Text>
                </View>
                <View style={styles.head}>
                    <Text style={styles.headText}>Enter your code</Text>
                </View>
                <View style={styles.mainOtpView}>
                    <TextInput
                        autoFocus={true}
                        onChangeText={(num1) => {
                            this.setState({ num1: num1 })
                            if (num1 != "") {
                                this.refs.num2ref.focus()
                            }
                        }}
                        value={this.state.num1}
                        maxLength={1}
                        ref={"num1ref"}
                        KeyboardType="number-pad"
                        style={styles.otpBox} />

                    <TextInput onChangeText={(num2) => {
                        this.setState({ num2: num2 })
                        if (num2 != "") {
                            this.refs.num3ref.focus()
                        }
                        else {
                            this.refs.num1ref.focus()
                        }




                    }}
                        value={this.state.num2}
                        maxLength={1}
                        ref={"num2ref"}
                        KeyboardType="number-pad" style={styles.otpBox} />
                    <TextInput onChangeText={(num3) => {
                        this.setState({ num3: num3 })
                        if (num3 != "") {
                            this.refs.num4ref.focus()
                        }
                        else {
                            this.refs.num2ref.focus()
                        }
                    }}
                        value={this.state.num3}
                        maxLength={1}
                        ref={"num3ref"}
                        KeyboardType="number-pad" style={styles.otpBox} />

                    <TextInput onChangeText={(num4) => {
                        this.setState({ num4: num4 })
                        if (num4 != "") {
                            this.refs.num4ref.focus()
                            alert("thankyou")
                        }
                        else {
                            this.refs.num3ref.focus()

                        }
                    }}
                        value={this.state.num4}
                        maxLength={1}
                        ref={"num4ref"}
                        KeyboardType="number-pad" style={styles.otpBox} />
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.lastScroll}>

                    <View style={styles.row1}>
                        <TouchableOpacity style={styles.textnum}
                        >
                            <Text>1</Text>
                          
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.textnum}>
                            <Text>2</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.textnum}>
                            <Text>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row1}>
                        <TouchableOpacity style={styles.textnum}>
                            <Text>4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.textnum}>
                            <Text>5</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.textnum}>
                            <Text>6</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row1}>
                        <TouchableOpacity style={styles.textnum}>
                            <Text>7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.textnum}>
                            <Text>8</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.textnum}>
                            <Text>9</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row1}>
                        <TouchableOpacity style={styles.textnum}>
                            <Text>0</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 10,
        backgroundColor: 'rgb(109,188,120)',
    },
    mainText: {
        color: "white",
        fontSize: 20,
    },
    head: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
    },
    headText: {
        fontSize: 25,
        color: "grey",
        marginBottom: 50,
    },
    mainOtpView: {
        margin: 10,
        marginHorizontal:50,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    otpBox: {
        justifyContent: 'center',
        fontWeight: "600",
        // backgroundColor: "grey",
        alignSelf: "center",
        padding: 5,
        fontSize: 15,
        height: 50,
        borderRadius: 5,
        bordeWidth: 2,
        width: 50,
        borderWidth: 1,
        borderColor: 'rgb(235,235,235)',
        textAlign:'center'
    },
    button: {
        backgroundColor: 'white',
        width: "75%",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderTopWidth: 1.5,
        borderTopColor: 'rgb(141,173,157)',
        borderLeftColor: 'rgb(218,235,225)',
        borderRightColor: 'rgb(172,189,179)',
        borderBottomColor: 'rgb(203,224,216)',
        marginBottom: 60,
    },
    buttonText: {
        fontSize: 18,
        color: 'rgb(121,160,139)',
        textAlign: "center",
        padding: 15,
    },
    btnView: {
        alignItems: 'center',
        marginTop: 40,
    },

    lastScroll: {
        marginTop: 80,
        backgroundColor: 'rgb(235,235,235)',
    },
    row1: {
        margin: 10,
        marginBottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-around",
    },
    textnum: {
        justifyContent: 'center',
        alignItems: "center",
        fontWeight: "600",
        backgroundColor: "white",
        alignSelf: "center",
        padding: 15,
        paddingLeft: 10,
        fontSize: 15,
        height: 50,
        borderRadius: 10,
        bordeWidth: 1,
        width: 117,
        borderColor: "white",
        borderWidth: 0.5,
    },
});