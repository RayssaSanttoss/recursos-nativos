import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button,
    TextInput,
    ScrollView
} from 'react-native';
import Cores from '../constantes/Cores';

const NovoLugarTela = (props) => {
    const[novoLugar, setNovoLugar] = useState('');
    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto);
    }

    const adicionarLugar = () => {
        console.log(`Adicionando lugar: ${novoLugar}`);
        setNovoLugar('');
    }

    return (
        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Novo Lugar</Text>
                <TextInput 
                    style={estilos.textInput}
                    onChangeText={novoLugarAlterado}
                    value={novoLugar}
                />
                <Button
                    title="Salvar Lugar"
                    color={Cores.primary}
                    onPress={adicionarLugar}
                />
            </View>
        </ScrollView>
    )
};

const estilos = StyleSheet.create ({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center'
    },
    textInput: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 16,
        marginBottom: 16,
        paddingVertical: 12,
        textAlign: 'center'
    }
});

export default NovoLugarTela;