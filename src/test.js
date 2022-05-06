import firebase from 'firebase/app'
import 'firebase/firestore';

const firestore =firebase.firestore();

firestore.collection('users').docs('cC8zhnJ2ljbmYsN7rQs1').collection('cartItems').docs('9IVUzlhWZWctP9JX1wzY')
firestore.doc('/users/cC8zhnJ2ljbmYsN7rQs1/cartItems/ 9IVUzlhWZWctP9JX1wzY');
firestore.collection('/users/cC8zhnJ2ljbmYsN7rQs1/cartItems');