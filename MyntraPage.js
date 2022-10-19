import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react';

export class MyntraPage extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
                <View style={styles.secondMain} >
                    <Text style={styles.itemsText}>195 items</Text>
                    <View style={styles.sort}>

                        <View style={styles.sortView}>
                            <Image source={require('./Images/sort.png')} style={styles.sortImg} />
                            <TouchableOpacity>
                                <Text>SORT</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.sortView}>
                            <Image source={require('./Images/vertical.png')} style={styles.sortImg} />
                        </View>

                        <View style={styles.sortView}>
                            <Image source={require('./Images/filter.png')} style={styles.filterImg} />
                            <TouchableOpacity>
                                <Text>FILTER</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.horizontalOption}>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.ButtonText}>Polo Shirts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.ButtonText}>Dress Shirts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.ButtonText}>Shorts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.ButtonText}>shirts</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={styles.Images}>
                        <View style={{ margin: 10 }}>
                            <Image source={require('./Images/men5.jpeg')} style={styles.menImg} />
                            <Image source={require('./Images/heart2.png')} style={styles.heart} />
                            <Text style={styles.newText}>New</Text>
                            <Text style={styles.line1}>Tommy Hilfiger</Text>
                            <Text style={styles.line2}>Men's Morrison Stripe Polo</Text>
                            <Text style={styles.line3}>Limelight Combo</Text>
                            <Text style={styles.line4}>USD 23</Text>
                        </View>

                        <View style={{ margin: 10 }}>
                            <Image source={require('./Images/men5.jpeg')} style={styles.menImg} />
                            <Image source={require('./Images/heart2.png')} style={styles.heart} />
                            <Text style={styles.newText}>New</Text>
                            <Text style={styles.line1}>Tommy Hilfiger</Text>
                            <Text style={styles.line2}>Men's Morrison Stripe Polo</Text>
                            <Text style={styles.line3}>Limelight Combo</Text>
                            <Text style={styles.line4}>USD 23</Text>
                        </View>
                    </View>

                    <View style={styles.Images}>
                        <View style={{ margin: 10 }}>
                            <Image source={require('./Images/men5.jpeg')} style={styles.menImg} />
                            <Image source={require('./Images/heart2.png')} style={styles.heart} />
                            <Text style={styles.newText}>New</Text>
                            <Text style={styles.line1}>Tommy Hilfiger</Text>
                            <Text style={styles.line2}>Men's Morrison Stripe Polo</Text>
                            <Text style={styles.line3}>Limelight Combo</Text>
                            <Text style={styles.line4}>USD 23</Text>
                        </View>

                        <View style={{ margin: 10 }}>
                            <Image source={require('./Images/men5.jpeg')} style={styles.menImg} />
                            <Image source={require('./Images/heart2.png')} style={styles.heart} />
                            <Text style={styles.newText}>New</Text>
                            <Text style={styles.line1}>Tommy Hilfiger</Text>
                            <Text style={styles.line2}>Men's Morrison Stripe Polo</Text>
                            <Text style={styles.line3}>Limelight Combo</Text>
                            <Text style={styles.line4}>USD 23</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
        fontWeight: "bold",
        borderBottomColor: 'rgb(211,211,211)',
        borderBottomWidth: 1,
        padding: 20,
    },
    secondMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        color: "black",
        fontWeight: "bold",
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    sort: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    sortView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    sortImg: {
        height: 20,
        width: 20,
    },
    filterImg: {
        height: 20,
        width: 30,
    },
    mainText: {
        AlignItems: 'center',
        fontWeight: '700'
    },
    menImg: {
        height: 250,
        width: 180,
        // margin:10
    },
    horizontalOption: {
        flexDirection: "row",
        // justifyContent: "space-around",
        borderRadius: 3,
        borderColor: 'black',
    },
    ButtonText: {
        fontSize: 13,
        color: "black",
        textAlign: "center",
        justifyContent: "center",
        padding: 5,
    },
    buttonContainer: {
        backgroundColor: 'rgb(244,244,244)',
        borderRadius: 10,
        width: 100,
        height: 35,
        margin: 10,
        padding: 2,

    },
    Images: {
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-around',
        // marginHorizontal:7,
    },
    line4: {
        fontWeight: 'bold',
        // letterSpacing: 0.5,
        fontSize: 15,

    },
    line2: {
        marginBottom: 5,
    },
    line3: {
        marginBottom: 5,
    },
    line1: {
        marginTop: 5,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    heart: {
        position: 'absolute', right: 10, height: 30, width: 30,
    },
    newText: {
        height: 20, width: 40, backgroundColor: "green", position: "absolute", top: 10,
        color: "white",
        textAlign:'center',
    },
    itemsText: {
        color: 'grey',
    }
})

export default MyntraPage;