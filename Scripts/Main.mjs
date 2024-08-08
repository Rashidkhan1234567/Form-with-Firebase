import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { users ,  signUpFunction } from "./SignUp.js"
import { signInFunction } from "./SignIn.js"
const firebaseConfig = {
  apiKey: "AIzaSyAU_MdolAM2xZCmKfdRUwEEuq3QWJblaPQ",
  authDomain: "rashid-1e896.firebaseapp.com",
  projectId: "rashid-1e896",
  storageBucket: "rashid-1e896.appspot.com",
  messagingSenderId: "553262729904",
  appId: "1:553262729904:web:c2c8a2b0825277f7610975",
  measurementId: "G-4S2ZPM4HHK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signUp = document.getElementById("signup");
const signIn = document.getElementById("signin");
const create_account = document.querySelectorAll(".create-account");
const signUp_btn = document.querySelector("#signUp_btn");
const signIn_btn = document.querySelector("#signIn_btn");

create_account.forEach((e) => {
  e.addEventListener("click", () => {
    if (signIn.style.display !== "none") {
      signUp.style.display = "flex";
      signIn.style.display = "none";
    } else {
      signIn.style.display = "flex";
      signUp.style.display = "none";
    }
  });
});

signUpFunction(signUp_btn, createUserWithEmailAndPassword, auth)

signInFunction(signIn_btn, signInWithEmailAndPassword, auth)

