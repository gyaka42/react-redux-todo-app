import { EKLE, ISARETLE, TEMIZLE } from "../actions";

const INITIAL_STATE = {
    liste: [
        { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
        { id: 2, baslik: "Fatura ode", tamamlandi: true }
      ]
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) { 
        case EKLE: 
        return { ...state, liste: [ ...state.liste,{
            id: state.liste.length + 1,
            baslik: action.payload,
            tamamlandi: false
        }]}

        case ISARETLE:
            return{
                ...state,
                liste: state.liste.map(item => item.id === action.payload ? { ...item, tamamlandi: !item.tamamlandi} : item )
            }

            case TEMIZLE:
                return{
                    ...state,
                    liste: state.liste.filter(item => item.tamamlandi === false)
                }
        default: return state;
    }
    return state;
}