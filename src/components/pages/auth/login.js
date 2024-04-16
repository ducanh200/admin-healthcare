import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(url.ADMIN.LOGIN, JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const token = response.data.token;
            // Đăng nhập thành công, xử lý logic ở đây (ví dụ: lưu token vào local storage, điều hướng đến trang dashboard)
            localStorage.setItem("accessToken",token)
            navigate('/dashboard');
        } catch (error) {
            // Đăng nhập thất bại, hiển thị thông báo lỗi
            setFormErrors("Invalid email or password.");
        }
    };
    return (
        <div class="main-wrapper login-body">
            <div class="login-wrapper">
                <div class="container">
                    <div class="loginbox">
                        <div class="login-left">
                            <img class="img-fluid" src="assets/img/logo-white.png" alt="Logo" />
                        </div>
                        <div class="login-right">
                            <div class="login-right-wrap">
                                <h1>Login</h1>
                                <p class="account-subtitle">Access to our dashboard</p>
                                {formErrors && <p className="text-danger">{formErrors}</p>}

                                <form  onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <input className="form-control" 
                                            type="text" 
                                            name="email" 
                                            placeholder="Email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            />
                                    </div>
                                    <div class="mb-3">
                                        <input  className="form-control" 
                                            type="password" 
                                            name="password" 
                                            placeholder="Password" 
                                            value={formData.password}
                                            onChange={handleChange}
                                            />
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