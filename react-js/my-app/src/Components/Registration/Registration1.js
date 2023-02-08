import React from "react";
import "../../css/Registration.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "../Footer/Footer";
// import  Navbar  from "../../Components/Navbar/Navbar";
// import { ReactDOM } from "react";

const Registration = () => {

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mendatory')
      .min(5, 'Password must be at 3 char long')
      .max(16, 'Maximum 16 char allowed'),
    // .pattern('Must 8 char,1 uppercase,1 special char & Number'),

    cpassword: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),

    fname: Yup.string()
      .required('Name is mendatory'),

    email: Yup.string()
      .email("Invalid Email Id")
      .required('Email is mendatory'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState;

  // const {
  //   register,
  //   handleSubmit,
  //   // formState: { errors },
  //   reset,
  // } = useForm();


  const [show, setShow] = useState(false);
  const click = () => {
    console.log();
  };
  const [hide, setHide] = useState(false);
  const click1 = () => {
    console.log();
  };

  const onSubmit = (data) => {
    swal("Registration Successfully!", "clicked the button!", "success");
    console.log(data);
    reset();
  }


  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);

  const toggleBtn = () => {
    setState(prevState => !prevState);
  }
  const toggleBtn2 = () => {
    setState1(prevState => !prevState);
  }

  return (
    <>
    {/* <Navbar /> */}
      <div className="regi-container">
        <div className="forms">
          <div className="form">
            <span className="title">Registration..</span>
            <form onSubmit={handleSubmit(onSubmit)} action="" name="loginForm" className="form1">
              <div className="input-field">
                <input type="" name="fname" id="" placeholder="Enter Username"
                  {...register('fname')}
                  className={`fname ${errors.fname ? 'is-invalid' : ''}`}
                // {...register("fname", {
                //   required: "Name is required",
                // })}
                />
                <i className="fa-solid fa-user icon"></i>
              </div>
              {errors.fname && (<div className="err1">{errors.fname.message}</div>)}


              <div className="input-field">
                <input
                  type=""
                  name="email"
                  id=""
                  placeholder="Enter your email"
                  {...register('email')}
                  className={`email ${errors.email ? 'is-invalid' : ''}`}
                // {...register("email", {
                //   required: "Email is required",
                //   pattern: {
                //     value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i,
                //     message: "Invalid Eemail address"
                //   }
                // })}
                />
                <i className="fa-solid fa-envelope icon"></i>
              </div>
              {errors.email && (<div className="err1">{errors.email.message}</div>)}



              <div className="input-field">
                <input
                  type={state ? "text" : "password"}
                  
                  // type="password"
                  name="password"
                  {...register('password')}
                  className={`password ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="New password"
                // {...register("password", {
                //   required: "Password is required",
                //   minLength: {
                //     value: 5,
                //     message: "Minimum 5 character required",
                //   },
                //   maxLength: {
                //     value: 16,
                //     message: "Maximum 16 character Required",
                //   },
                //   pattern: {
                //     value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                //     message: "Must 8 char,1 uppercase,1 special char & Number"
                //   }
                // })}
                />
                <i className="fa-solid fa-lock icon"></i>
                <i className={`fa-solid ${state ? "fa-eye" : "fa-eye-slash"} showhidepw`} onClick={toggleBtn}></i>
              </div>
              {errors.password && (<div className="err2">{errors.password.message}</div>)}




              <div className="input-field">
                <input
                  type={state1 ? "text" : "password"}
                  // type="password"
                  name="cpassword"
                  // className="password"
                  placeholder="Confirm password"
                  {...register('cpassword')}
                  className={`password ${errors.cpassword ? 'is-invalid' : ''}`}
                // {...register("cpassword", {
                //   required: "Confirm Password is required",
                // })}
                />
                <i className="fa-solid fa-lock icon"></i>
                <i className={`fa-solid ${state1 ? "fa-eye" : "fa-eye-slash"} showhidepw`} onClick={toggleBtn2}></i>
              </div>
              {errors.cpassword && (<div className="err2">{errors.cpassword.message}</div>)}


              {hide ? (
                <div className="input-field">
                  <select
                    className="input-field-select"
                    placeholder="select your age"
                  >
                    <option value="">Select your age</option>
                    <option value="40 to 50">40 to 50</option>
                    <option value="50 to 60">50 to 60</option>
                    <option value="60 to 70">60 to 70</option>
                    <option value="70 to 80">70 to 80</option>
                    <option value="80 to 90">80 to 90</option>
                  </select>
                  <i className="fa-solid fa-filter icon"></i>
                </div>
              ) : null}

              {
                <div className="input-field-radio-btn">
                  <input
                    type="radio"
                    name="radio"
                    className="radio1"
                    id="radio1"
                    onClick={() => setHide(true) || setShow(false)}
                  />
                  <label for="radio1" style={{ fontSize: '24px' }}>User</label>
                  <input
                    type="radio"
                    name="radio"
                    className="radio2"
                    id="radio2"
                    onClick={() => setShow(true) || setHide(false)}
                  />
                  <label for="radio2" style={{ fontSize: '24px' }}>Provider</label>
                </div>
              }

              {show ? (
                <div>
                  <div className="input-field">
                    <select className="input-field-select" placeholder="">
                      <option value="">Select Profession</option>
                      <option value="Electrician">Electrician</option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="care-taker">care-taker</option>
                      <option value="Home-cleaner">Home-cleaner</option>
                      <option value="Massage">Massage</option>
                      <option value="Salon">Salon</option>
                      <option value="Painter">Painter</option>
                      <option value="Doctor">Doctor</option>
                    </select>
                    <i className="fa-solid fa-filter icon"></i>
                  </div>

                  <div className="input-field">
                    <input type="date" name="" className="date1" />
                    <i className="fa-solid fa-calendar-days icon"></i>
                  </div>

                  <div className="input-field">
                    <input type="text" name="address" placeholder="Address" />
                    <i className="fa-solid fa-address-card icon"></i>
                  </div>

                  <div className="input-field">
                    <input
                      type="file"
                      name="doc"
                      id=""
                      style={{ paddingTop:'10px'}}
                      placeholder="select Document" />
                    <i className="fa-solid fa-upload icon"></i>
                  </div>
                </div>
              ) : null}

              <div className="input-field button">
                <input type="submit" value="Register" onClick={click() || click1()} />
              </div>
            </form>

            <div className="login-signin">
              <span className="text">
                Already Registered ??
                <a href="../Login" className="text sign-link">
                  Sign In
                </a>
              </span>
            </div>
          </div>
        </div>
        </div>

      <Footer />
    </>
  );
};

export default Registration;
