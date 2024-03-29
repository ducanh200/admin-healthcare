function Login() {
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

                                <form action="https://doccure.dreamstechnologies.com/html/template/admin/index.html">
                                    <div class="mb-3">
                                        <input class="form-control" type="text" placeholder="Email" />
                                    </div>
                                    <div class="mb-3">
                                        <input class="form-control" type="text" placeholder="Password" />
                                    </div>
                                    <div class="mb-3">
                                        <button class="btn btn-primary w-100" type="submit">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;