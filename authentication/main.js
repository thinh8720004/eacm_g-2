//Cấu hình firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9lOJABBh2yaJ9BoYoGc9zEdL-VgPn0wY",
  authDomain: "fir-1bd7e.firebaseapp.com",
  databaseURL: "https://fir-1bd7e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-1bd7e",
  storageBucket: "fir-1bd7e.appspot.com",
  messagingSenderId: "340956983320",
  appId: "1:340956983320:web:fe632236256c93ad5f936d"
};
//Thiết lập firebase dựa vào cấu hình đó
firebase.initializeApp(firebaseConfig);

//Đăng ký
const register = async () => {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const passwordConfirm = document.getElementById("register-password-confirm").value;
    const fullName = document.getElementById("full-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const address = document.getElementById("address").value;
    const avatar = document.getElementById("avatar").files[0];
 
      if (email === "" || password === "" || passwordConfirm === "" || fullName === "" || phoneNumber === "" || address === "" || avatar === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
      }
      
      if (password !== passwordConfirm) {
        alert("Mật khẩu không khớp!");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Email không hợp lệ!");
        return;
      }
    
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(password)) {
        alert("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái và số!");
        return;
      }
      
      const phoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (!phoneNumberRegex.test(phoneNumber)) {
        alert("Số điện thoại không hợp lệ!");
        return;
      }

}

//Đăng nhập
const login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  
  
}