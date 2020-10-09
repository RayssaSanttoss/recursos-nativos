import { ADD_LUGAR, LISTA_LUGARES } from "./lugares-actions";
import Lugar from '../modelo/Lugar';

const estadoInicial = {
    lugares: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_LUGAR:
            const lugar = new Lugar (
                action.dadosLugar.id.toString(),
                action.dadosLugar.nomeLugar,
                action.dadosLugar.imagemURI
            );
            return {
                lugares: estado.lugares.concat(lugar)
            }
            case LISTA_LUGARES:
                return {
                    lugares: action.lugares.map(lugar => new Lugar(lugar.id.toString(), lugar.nome, lugar.imagemURI))
                }
        default:
        return estado;
    }
}