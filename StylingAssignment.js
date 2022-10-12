import { Text, View, Image, StyleSheet, ScrollView, Button, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export class StylingAssignment extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.Container}>
                    <Image source={require('./Images/Back1.png')} style={{ marginBottom: 10 }} />
                    <Text style={styles.mainText}>Product details</Text>
                    <Image source={require('./Images/bookmark.png')} />
                </View>
                <ScrollView>


                    <View style={styles.container1}>
                        <Image source={require('./Images/movie1.jpeg')} style={styles.ImageStyle} />
                    </View>
                    <View style={styles.container2}>
                        <Text>How to train yourDragon The Hidden World</Text>
                        <Text style={styles.textstyle}>part III</Text>
                    </View>
                    <View style={styles.container3}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.ButtonText}>Adventure</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.ButtonText}>Family</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.ButtonText}>Fantasy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.year}>
                        <Text style={styles.yearText}>Area</Text>
                        <Text style={styles.yearText}>Country</Text>
                        <Text style={styles.yearText}>Length</Text>
                    </View>
                    <View style={styles.year}>
                        <Text>2019</Text>
                        <Text>USA</Text>
                        <Text>112</Text>
                    </View>
                    <View style={styles.AboutM}>
                        <Text style={styles.aboutText}>About Movie</Text>
                        <Text style={styles.aboutText1}>When Hiccup discovers Toothless isn't the only Night Fury, he
must seek "The Hidden World", a secret Dragon Utopia before a
hired tyrant named Grimmel finds it first.</Text>
                    </View>
                    <View style={styles.AboutS}>
                        <Text style={styles.aboutText}>Screenshots</Text>
                        <View style={styles.sc}>
                            <ScrollView
                                horizontal={true}>
                                <Image source={require('./Images/sc1.jpeg')} style={styles.sc1} />
                                <Image source={require('./Images/sc3.jpeg')} style={styles.sc2} />
                                <Image source={require('./Images/sc4.jpeg')} style={styles.sc4} />
                            </ScrollView>
                        </View>
                    </View>

                </ScrollView>
                <TouchableOpacity style={styles.buyTicket}>
                    <Text style={styles.buyText}>Buy Ticket</Text>
                </TouchableOpacity>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:"red",
        paddingTop: 10,
    },
    mainText: {
        fontSize: 20,
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        backgrounColor: 'rgb(247,248,253)',
    },
    ImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 400,
        borderRadius: 30,
    },
    container2: {
        paddingHorizontal: 50,
        paddingVertical: 30
    },
    textstyle: {
        paddingHorizontal: 120,
        paddingTop: 10,
    },
    buttonContainer: {
        backgroundColor: 'rgb(90,128,236)',
        borderRadius: 10,
        width: "30%",
        marginBottom: 130,
    },
    ButtonText: {
        fontSize: 15,
        color: "#fff",
        textAlign: "center",
        padding: 5,
    },
    container3: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 40,
        marginBottom: 20,
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey',
    },
    year: {
        paddingHorizontal: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
    },
    yearText: {
        color: "grey",
    },
    AboutM: {
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    aboutText1: {
        fontSize: 13,
        paddingBottom: 20,
        color:"grey"
    },
    aboutText: {
        fontSize: 15,
        paddingBottom: 15,
    },
    AboutS: {
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    sc: {
        flexDirection: "row",
    },
    sc1: {
        height: 150, width: 150,
        marginRight: 30,
    },
    sc2: {
        height: 150, width: 150,
        marginRight: 30,
    },
    sc4: {
        height: 150, width: 150
    },
    buyTicket: {
        backgroundColor: 'rgb(90,128,236)',
        width: "90%",
        marginTop: 50,
        marginLeft: 20,
        //    marginHorizontal:10,
    },
    buyText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        padding: 15,
    }
});
export default StylingAssignment;