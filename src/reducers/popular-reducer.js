export default (state = {company: ['Not a Weed Shop', 'Hitman', 'Weapons for Friends', 'Spicy Poison', 'Coffin Service', 'Gameboy Stuff'], product: ['Not Weed', 'Give a name', 'Wide Selection!', 'Now thats a spice', 'We also Offer Plus Sizes', 'Yeah'], price: ['$10', '$10000', '$1-1000', 'A Liver', '$200-40000', 'Eh' ]}, action) => {
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
