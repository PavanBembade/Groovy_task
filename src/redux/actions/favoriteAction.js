

export const addItem = (product1) => {
    return {
        type : "ADDFAVORITE",
        payload : product1
    }
}

export const delItem = (product1) => {
    return {
        type : "DELFAVORITE",
        payload : product1
    }
}