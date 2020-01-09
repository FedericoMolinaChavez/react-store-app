import React, { Component } from 'react';
import { View, Text, Alert, TouchableHighlight } from 'react-native';

class Initial extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Text>Main</Text>
                <View>
                    <View>
                        <View>
                            <TouchableHighlight onPress={() => {Alert.alert("abc"); this.props.navigation.navigate('Gaseosas');}}>
                                <Text>Bebidas</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Desayunos')}}>
                                <Text>Desayunos</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View>
                        <View>
                            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Almuerzos')}}>
                                <Text>Almuerzos</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Vinos')}}>
                                <Text>Vinos</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}



export default Initial;