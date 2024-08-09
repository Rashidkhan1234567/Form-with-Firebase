export let users = [];

export function signUpFunction(signUp_btn, createUser, auth,signIn,signUp) {
  signUp_btn.addEventListener("click", (e) => {
    e.preventDefault();
    const names = document.querySelector("#cname").value;
    const email = document.querySelector("#cemail").value;
    const password = document.querySelector("#cpassword").value;
    const cPassword = document.querySelector("#confirmPassword").value;
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
    } else if (!cPassword) {
      Swal.fire({
        title: "Error!",
        text: "Confirm Password field is required!",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    } else if (password !== cPassword) {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "Okay",
      });
      document.querySelector("#cpassword").value = "";
      document.querySelector("#confirmPassword").value = "";
      return;
    } else {
      createUser(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          let add = [user.email, password, user.uid];
          users.push(add);
          Swal.fire({
            title: "Success!",
            text: "Account created successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          signIn.style.display = "flex";
          signUp.style.display = "none";
          document.querySelector("#cname").value = "";
          document.querySelector("#cemail").value = "";
          document.querySelector("#cpassword").value = "";
          document.querySelector("#confirmPassword").value = "";
        })
        .catch((error) => {
          console.error(error.code);
          console.error(error.message);
          if (error.code == "auth/email-already-in-use") {
            Swal.fire({
              title: "Error!",
              text: "Email already in use!",
              icon: "error",
              confirmButtonText: "Okay",
            });
          } else if (
            error.message ==
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            Swal.fire({
              title: "Error!",
              text: "Password should be at least 6 characters!",
              icon: "error",
              confirmButtonText: "Okay",
            });
          }
        });
    }
  });
}
