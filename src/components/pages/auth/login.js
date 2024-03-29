import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";

function Login(){
    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
      });
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [registerSuccess, setRegisterSuccess] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const registerResponse = await api.post(url.ADMIN.REGISTER, user);
            setRegisterSuccess(true);
            setTimeout(() => {
                window.alert('Register success!');
                navigate('/login');
            }, 2000);
        } catch (error) {
            setFormErrors({
                email: "Email already in use",
                password: "Invalid email or password.",
              });
        }
    };
    return(
        <div class="main-wrapper login-body">
<div class="login-wrapper">
<div class="container">
<div class="loginbox">
<div class="login-left">
<img class="img-fluid" src="assets/img/logo-white.png" alt="Logo"/>
</div>
<div class="login-right">
<div class="login-right-wrap">
<h1>Login</h1>
<p class="account-subtitle">Access to our dashboard</p>

<form action="https://doccure.dreamstechnologies.com/html/template/admin/index.html">
<div class="mb-3">
<input class="form-control" type="text" placeholder="Email"/>
</div>
<div class="mb-3">
<input class="form-control" type="text" placeholder="Password"/>
</div>
<div class="mb-3">
<button class="btn btn-primary w-100" type="submit">Login</button>
</div>
</form>

<div class="text-center forgotpass"><a href="forgot-password.html">Forgot Password?</a></div>
<div class="login-or">
<span class="or-line"></span>
<span class="span-or">or</span>
</div>

<div class="social-login">
<span>Login with</span>
<a href="#" class="facebook"><i class="fa-brands fa-facebook-f"></i></a><a href="#" class="google"><i class="fa-brands fa-google"></i></a>
</div>

<div class="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
    )
}
export default Login;