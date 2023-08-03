const addFavorites = [];

const addFavoriteItem = (state = addFavorites, action) => {
    switch (action.type) {
        case "ADDFAVORITE" :
             return [
            ...state,
            action.payload
        ]
        break;

        case "DELFAVORITE" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

export default addFavoriteItem;