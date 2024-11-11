// npm install firebase
// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Do firebase irei utilizar o firebaseConfig para conectar com o banco de dados, o Auth para autenticação, o Firestore para armazenar os dados e o Storage para armazenar arquivos.
// A pessoa vai poder: criar uma conta (ao criar a conta ela terá o próprio currículo vinculado), fazer login, visualizar e editar o currículo, ver todos os currículos cadastrados, e poder selecionar algum deles para olhar, além de poder pesquisar por alguma informação e ai curriculso correspondentes irão aparecer, fazer logout, deletar a conta (com o seu curriculo), fazer upload de um arquivo (pdf, docx, etc) e deletar o arquivo, e tirar uma foto para o perfil.
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwP00qOuMFp3g792ekfSDUlE3bSeGkGjc",
    authDomain: "curriculos-9d1cc.firebaseapp.com",
    projectId: "curriculos-9d1cc",
    storageBucket: "curriculos-9d1cc.firebasestorage.app",
    messagingSenderId: "956135790837",
    appId: "1:956135790837:web:04af8f002722f834568dbc",
    // measurementId: "G-BMB3YDE5TH"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // const app = firebase.initializeApp(firebaseConfig);
  // const auth = firebase.getAuth(app);
}
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;