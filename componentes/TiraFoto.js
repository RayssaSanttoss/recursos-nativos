import React, { useState } from 'react'
import {
    View,
    Button,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Cores from '../constantes/Cores';
import * as ImagePicker from 'expo-image-picker';

const TiraFoto = (props) => {
    const [imagemURI, setimagemURI] = useState();

    const tirarFoto = async () => {
       const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 1
        });
        //console.log(foto);
        setimagemURI(foto.uri);
        props.onFotoTirada (foto.uri);
    }

    return (
       <View style={estilos.principal}> 
            <View style={estilos.previewDaImagem}>
                {
                    imagemURI ?
                        <Image 
                        source={{uri: imagemURI}}
                        style={estilos.imagem}
                        />
                    :
                    <Text>Nenhuma foto</Text>
                }                
            </View>
            <Button 
                title="Tirar foto"
                color={Cores.primary}
                onPress={tirarFoto}
            />
       </View>
    );
}

const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 16
    },
    previewDaImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        borderColor: '#CCC',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
});

export default TiraFoto;