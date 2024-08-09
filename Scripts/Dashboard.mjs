// import { signOut } from "./SignOut"

//  Function used to shrink nav bar removing paddings and adding black background

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth ,  signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
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

let signOut_btn = document.getElementById('signout')

signOut_btn.addEventListener("click",() =>{
  signOut(auth).then(() => {
window.location.href = "../index.html"    
  }).catch((error) => {
    console.error(error.code)
    console.error(error.message)
  });
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});
