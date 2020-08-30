export const getBasketTotal = (basket) => basket?.reduce((amount,item)=> Number(item.price)+Number(amount) ,0);

export const InitialState = {
    basket:[
        {id:"B0160BC1FO",title:"Garmin Forerunner 235, GPS Running Watch, Black/Gray",image:"https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg",price:"162.07",rating:"3"}
    ],
    user: null
}

function Reducer(state,action) {
    switch(action.type) {
        case "SET_USER":
            //user sign in sogn out
            return {
                ...state,
                user : action.user
            }
        case "ADD_TO_BASKET":
            //LOGIC TO ADD_TO_BASKET
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
        case "REMOVE_FROM_BASKET":
            //LOGIC TO REMOVE_FROM_BASKET
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id ===action.id
            );
            if (index >= 0 ){
                newBasket.splice(index, 1);
            }
            else{
                console.warn(`cant remove prduct ${action.id}`);
            }
            return {
                ...state,
                basket : newBasket
            }
        default:
            return {state}
    }
}

export default Reducer;