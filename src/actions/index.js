import constants from './../constants';
const { firebaseConfig } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref('populars');

export function updatePopulars(_company, _product, _price) {
  return () => populars.replace({
    company: _company,
    product: _product,
    price: _price
  });
}
