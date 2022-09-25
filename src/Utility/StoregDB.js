const addToDB = (id) => {
    let shopingCart = {};

    const storeCart = localStorage.getItem('shoping-cart')

    if (storeCart) {
        shopingCart = JSON.parse(storeCart)
    } else {
        shopingCart = {}
    }
    const quantity = shopingCart[id];
    if (quantity) {
        // alert('aleady exist the data')
        const newQuantity = quantity + 1;
        shopingCart[id] = newQuantity;
    } else {
        // alert('added new items')
        shopingCart[id] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}

const removeProductFromDB = (id) => {
    const storeCart = localStorage.getItem('shoping-cart');
    if (storeCart) {
        const shopingCart = JSON.parse(storeCart);
        if (id in shopingCart) {
            delete shopingCart[id];
            localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
        }
    }
}

const deleteShopingCart = () => {
    localStorage.removeItem('shoping-cart');
}

export { addToDB, removeProductFromDB, deleteShopingCart }