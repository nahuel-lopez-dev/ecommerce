import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_o5ipc8kaHwzx1YCiQoj07og_QPN6xPE",
    authDomain: "ecommerce-coderhouse-80837.firebaseapp.com",
    projectId: "ecommerce-coderhouse-80837",
    storageBucket: "ecommerce-coderhouse-80837.appspot.com",
    messagingSenderId: "15531177102",
    appId: "1:15531177102:web:3eb2d74a230cd2f96bc5df"
  };

//inicializa la conexión a mi base de datos en Firebase  
const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    //para poder usar firestore
    return firebase.firestore(app)
}
