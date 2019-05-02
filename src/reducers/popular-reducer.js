export default (state = {company: null, product: null, price: null}, action) => {
  switch (action.type) {
  case 'FORM_SUBMIT':
    const {company, product, price} = action;
    let newState = Object.assign({}, state, {
      company: company,
      product: product,
      price: price
    })
    return newState;
  default:
    return state;
  }
}
