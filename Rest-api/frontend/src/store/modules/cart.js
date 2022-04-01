export default {
    state: {
        cart: []
    },
    getters: {
        shoppingCart: state => state.cart,
        cartCount: state =>  {
            let items = 0
            state.cart.forEach(item => {
                items += item.quantity
            })
            return items
        },
        shoppingCartTotal: state => {
            let total = 0
            if(state.cart.length !== 0) {
                state.cart.forEach(item => {
                    total += item.product.price * item .quantity
                })
            }
            return total
        }
    },
    mutations: {
        ADD_PRODUCT: (state, {product, quantity}) => {
            let exist = state.cart.find(item => item.product._id === product._id)
            if (exist) {
                exist.quantity += quantity
                return
            }
            state.cart.push({product, quantity})
        },
        DELETE_PRODUCT: (state, {product, quantity}) => {
            let remove = state.cart.filter(item => item.product._id === product._id)
            console.log(remove)
            if (remove) {
                remove.quantity -= quantity
                return
            }
            state.cart.splice({product, quantity})
        }
    },
    actions: {
        addProduct: ({commit}, {product, quantity}) => {
            commit('ADD_PRODUCT', {product, quantity} )
        },
        deleteProduct: ({commit}, {product, quantity}) => {
            commit('DELETE_PRODUCT', {product, quantity})
        }
    },
    
  }