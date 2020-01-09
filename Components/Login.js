import React, {Component} from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button
} from 'react-native'
import{
    Input
} from 'react-native-elements'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            user : '',
            password : ''
        };
    }
    render(){
        return( 
            <SafeAreaView>
                <View>
                    <View>
                        <Text>BARATÓN</Text>
                        <Text>Logeate para continuar!</Text>
                    </View>
                    <View>
                        <Input label = "Usuario"
                         onChangeText = {(text)=> { this.setState({user : text})}}
                         secureTextEntry={this.state.hidden} onChangeText={(e) => onChange(e)}
                         placeholderTextColor='gray'
                         />
                        <Input label = "Contraseña" 
                        onChangeText = {(text) => {this.setState({password : text})}} 
                        placeholderTextColor='gray'/>
                    </View>
                    <View>
                        <Button title='Iniciar sesión' onPress = {() => {this.props.navigation.navigate('Drawer')}}/>
                    </View>
                    <View>
                        <Text>¿Aun no tienes una contraseña? Crea una.</Text>
                        <Text>¿Olvidaste tu contraseña</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}