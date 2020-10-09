import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button,
    TextInput,
    ScrollView
} from 'react-native';
import { useDispatch } from 'react-redux';
import Cores from '../constantes/Cores';
import * as lugaresActions from '../store/lugares-actions';
import TiraFoto from '../componentes/TiraFoto';
import { set } from 'react-native-reanimated';

const NovoLugarTela = (props) => {

    const dispatch = useDispatch();

    const[novoLugar, setNovoLugar] = useState('');
    const[imagemURI, setImagemURI] = useState();

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto);
    }

    const adicionarLugar = () => {
        dispatch(lugaresActions.addLugar(novoLugar, imagemURI));
        setNovoLugar('');
        props.navigation.goBack();
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
                <TiraFoto onFotoTirada={fotoTirada}/>
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