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
    apiKey: "AIzaSyDbTMgJgZZ5Rap1Dr-0uPh0iH7zvHrGiPA",
  authDomain: "projeto-3af1e.firebaseapp.com",
  projectId: "projeto-3af1e",
  storageBucket: "projeto-3af1e.firebasestorage.app",
  messagingSenderId: "972792580835",
  appId: "1:972792580835:web:202a3c11a4e2df35e2d3d6",
  measurementId: "G-7Y67S2QVPZ",
    databaseURL: "https://projeto-3af1e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;