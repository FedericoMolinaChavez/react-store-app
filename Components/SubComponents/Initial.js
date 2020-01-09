import React, { Component } from 'react';
import { View, Text, Alert, TouchableHighlight, StyleSheet, Dimensions, Image } from 'react-native';

class Initial extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style= {styles.GeneralStyle}>
                <View>
                    <View>
                        <Image />
                        <Text style= {styles.GeneralStyle}>Main</Text>
                    </View>
                </View>
                <View style= {styles.GridVertical}>
                    <View style = {styles.GridHorizontal}>
                        <View >
                            <TouchableHighlight style={styles.Card} onPress={() => {Alert.alert("abc"); this.props.navigation.navigate('Gaseosas');}}>
                                <Text>Bebidas</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight style={styles.Card} onPress={() => {this.props.navigation.navigate('Desayunos')}}>
                                <Text>Desayunos</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style = {styles.GridHorizontal}>
                        <View>
                            <TouchableHighlight style={styles.Card} onPress={() => {this.props.navigation.navigate('Almuerzos')}}>
                                <Text>Almuerzos</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight style={styles.Card} onPress={() => {this.props.navigation.navigate('Vinos')}}>
                                <Text>Vinos</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    GridVertical : {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center'

    },
    GridHorizontal : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center'
    },
    Card: {
        width: Dimensions.get('window').width*0.35,
        height: Dimensions.get('window').width*0.35,
        backgroundColor: '#f9a18e'
    },
    GeneralStyle : {
        flex: 1
    }
})

export default Initial;