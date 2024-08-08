export function signInFunction(signIn_btn, createUser, auth) {
  signIn_btn.addEventListener("click", (e) => {
    //   e.preventDefault();
    const names = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!names) {
      Swal.fire({
        title: "Error!",
        text: "Name field is required!",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    } else if (!email) {
      Swal.fire({
        title: "Error!",
        text: "Email field is required!",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    } else if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error!",
        text: "Invalid email format!",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    } else if (!password) {
      Swal.fire({
        title: "Error!",
        text: "Password field is required!",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    } else {
      createUser(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Swal.fire({
            title: "Success!",
            text: "SignIn successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          })
          setTimeout(()=>{

              window.location.href = "Dashboard.html"
            },1500)
              document.querySelector("#name").value = "";
          document.querySelector("#email").value = "";
          document.querySelector("#password").value = "";
        })
        .catch((error) => {
          console.error(error.code);
          console.error(error.message);
          if (error.code == "auth/invalid-credential") {
            Swal.fire({
              title: "Error!",
              text: "Invalid email or password!",
              icon: "error",
              confirmButtonText: "Okay",
            });
          }
        });
    }
  });
}
