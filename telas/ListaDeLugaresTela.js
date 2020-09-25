import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, Platform 
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';

const ListaDeLugaresTela = (props) => {
    return (
        <View>
            <Text>ListaDeLugaresTela</Text>
        </View>
    )
};

ListaDeLugaresTela.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Lista de lugares",
        headerRight: () =>{
            return (
                <HeaderButtons
                    HeaderButtonComponent={BotaoCabecalho}>
                    <Item
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add': 'ios-add'}
                        onPress={() => {
                            dadosNavegacao.navigation.navigate("NovoLugar");
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
}

const estilos = StyleSheet.create ({

});

export default ListaDeLugaresTela;