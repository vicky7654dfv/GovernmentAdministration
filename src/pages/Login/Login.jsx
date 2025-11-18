import React, { useState } from "react";
import Style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/Header/logo.webp";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to Government Services!\nEmail: ${form.email}`);
    navigate("/Error");
  };

  const handleGoogleLogin = () => {
    navigate("/Error");
  };

  const handleFacebookLogin = () => {
    navigate("/Error");
  };

  return (
    <>
      <Header />
      <div className={Style.loginWrap}>
        {/* Page Heading */}
        <div className={Style.pageHeading}>
          <h1>Government Services Portal</h1>
          <p>Access your official government account to manage services and administration tools</p>
        </div>

        <div className={Style.loginContainer}>
          {/* Image Section */}
          <div className={Style.imageSection}>
            <div className={Style.imageWrapper}>
              <img 
                src={logo} 
                alt="Government Services" 
                className={Style.logoImage}
              />
              <div className={Style.imageOverlay}>
                <h3>Welcome Back</h3>
                <p>Secure access to government services and citizen portals</p>
              </div>
            </div>
            <div className={Style.floatingElements}>
              <div className={Style.floatingElement1}></div>
              <div className={Style.floatingElement2}></div>
              <div className={Style.floatingElement3}></div>
            </div>
          </div>

          {/* Form Section */}
          <div className={Style.formSection}>
            <form className={Style.loginForm} onSubmit={handleSubmit}>
              <h2>Government Login</h2>
              
              <div className={Style.formRow}>
                <input
                  type="email"
                  className={`${Style.emailClass} ${Style.commonClass}`}
                  name="email"
                  placeholder="Official Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={Style.formRow}>
                <input
                  type="password"
                  className={`${Style.passwordClass} ${Style.commonClass}`}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className={Style.formOptions}>
                <label className={Style.rememberMe}>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={form.rememberMe}
                    onChange={handleChange}
                  />
                  <span className={Style.checkmark}></span>
                  Remember this device
                </label>
                <button 
                  type="button" 
                  className={Style.forgotPassword}
                  onClick={() => navigate("/Error")}
                >
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className={Style.submitClass}>
                Access Government Portal
              </button>

              {/* Social Login Section */}
              <div className={Style.socialLogin}>
                <div className={Style.divider}>
                  <span>Or continue with</span>
                </div>
                
                <div className={Style.socialButtons}>
                  <button 
                    type="button" 
                    className={Style.googleBtn}
                    onClick={handleGoogleLogin}
                  >
                    <svg className={Style.socialIcon} viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Continue with Google
                  </button>
                  
                  <button 
                    type="button" 
                    className={Style.facebookBtn}
                    onClick={handleFacebookLogin}
                  >
                    <svg className={Style.socialIcon} viewBox="0 0 24 24" fill="#1877F2">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Continue with Facebook
                  </button>
                </div>
              </div>
              
              <button
                type="button"
                className={Style.signUpBtn}
                onClick={() => navigate("/SignUp")}
              >
                Don't have a government account? Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}