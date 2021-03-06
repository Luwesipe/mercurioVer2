import React, {Component} from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

import flatListData from '../../../data/Pontos/zapio';
import styles from './styles';

export default class PontosClick extends Component{
    static navigationOptions = ({ navigation }) => {
        let headerTitle = "Informacoes";
        return { headerTitle }
    }
    constructor(props) {
        super(props);
        this.state = {
            destination: {
                latitude: parseFloat(this.props.navigation.state.params.latitude, 10),
                longitude: parseFloat(this.props.navigation.state.params.longitude, 10),
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134,
                title: this.props.navigation.state.params.name
            },
            toggle:true
        };
    }

    _onPress(){
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
    }

    render(){
        const {destination} = this.state;
        const {navigate} = this.props.navigation; 
        console.log(this.props.navigation.state.params);

        const {toggle} = this.state;
        descricaoShowHide = toggle?this.props.navigation.state.params.descricao:this.props.navigation.state.params.descricaoPeep;

        return(
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff'
            }}>
                <FlatList 
                data={flatListData}
                extraData={this.state}
                renderItem = {({item, index})=>{
                    return(
                            <View sytle={{flex:1}}>
                                <Text style={styles.Name}>{this.props.navigation.state.params.name}</Text>
                                <Image
                                    source={{uri:this.props.navigation.state.params.imageUrl}}
                                    style={styles.ImageShow}
                                />
                                <View style={{
                                    flex:1,
                                    flexDirection:'row', 
                                    justifyContent: 'space-evenly',
                                    textAlign: 'center'
                                }}>
                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Estacionamento</Text>
                                        <Text style={styles.Estacionamento}>{this.props.navigation.state.params.estacionamento}</Text>        
                                    </View>

                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Entrada</Text>
                                        <Text style={styles.Estacionamento}>{this.props.navigation.state.params.entrada}</Text>
                                    </View>
                                    
                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Lojas</Text>
                                        <Text style={styles.Estacionamento}>{this.props.navigation.state.params.Lojas}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity 
                                    onPress={()=>this._onPress()}
                                    style={styles.CaixaDescricao}
                                >
                                    <Text style={styles.Descricao}>{descricaoShowHide}</Text>
                                    <Text style={styles.SaibaMais}>Toque para saber mais/esconder</Text>
                                </TouchableOpacity>
                            </View>
                    )
                }}>
</FlatList>
                   
            <TouchableOpacity 
                destination={destination} 
                style={styles.Solicitar} 
                navigation={this.props.navigation} 
                onPress={() => this.props.navigation.navigate('Map', {destination: destination})}
            >
                <Text style={{fontSize:20, color:'white', textAlign:'center'}}>Solicitar Mercúrio para este ponto</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

/*
    render(){
        const {destination} = this.state;
        const {navigate} = this.props.navigation; 
        console.log(this.props.navigation.state.params);
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff'
            }}>
                <FlatList 
                data={flatListData}
                renderItem = {({item, index})=>{
                    return(
                            <View sytle={{flex:1}}>
                                <Text style={styles.Name}>{item.name}</Text>
                                <Image
                                    source={{uri:item.imageUrl}}
                                    style={styles.ImageShow}
                                />
                                <View style={{
                                    flex:1,
                                    flexDirection:'row', 
                                    justifyContent: 'space-evenly',
                                    textAlign: 'center'
                                }}>
                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Estacionamento</Text>
                                        <Text style={styles.Estacionamento}>{item.estacionamento}</Text>
                                    </View>

                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Entrada</Text>
                                        <Text style={styles.Estacionamento}>{item.entrada}</Text>
                                    </View>
                                    
                                    <View style={styles.CaixinhaInfo}>
                                        <Text style={styles.Estacionamento}>Lojas</Text>
                                        <Text style={styles.Estacionamento}>{item.Lojas}</Text>
                                    </View>
                                </View>
                                <Text style={styles.Descricao}>{item.descricao}</Text>
                            </View>
                    )
                }}>
                </FlatList>
            <Button title="Solicitar Mercúrio para este ponto" color="#6032bc" destination={destination}  navigation={this.props.navigation} onPress={() => this.props.navigation.navigate('Map', {destination: destination})}></Button>
            </View>
        )
    }
}
*/