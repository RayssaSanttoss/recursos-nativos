import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Cores from '../constantes/Cores';

const LugarItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.lugarItem}>
            <Image 
                style={styles.imagem}
                source={{uri: props.imagem}}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.nomeLugar}>{props.nomeLugar}</Text>
                <Text style={styles.endereco}>{props.endereco}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    lugarItem: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 28,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nomeLugar: {
        color: 'black',
        fontSize: 18,
        marginBottom: 8
    },
    endereco: {
        color: '#555',
        fontSize: 16      
    }
})

export default LugarItem;