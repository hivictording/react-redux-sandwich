import * as Actions from './actions'

const addOrder = (user,order) => {
    return {type: Actions.ADD_ORDER, payload: {user,order}}
}