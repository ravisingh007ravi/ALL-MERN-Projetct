import React, { useState } from "react";
import { Card, Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import "react-toastify/dist/ReactToastify.css";

//import { ToastContainer, toast } from "react-toastify";
//import React, { useEffect, useState } from "react";
//import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  // const [showspin, setShowSpin] = useState(true);

   

  // // const { useradd, setUseradd } = useContext(addData);
  // console.log(navigate);
  // // setInput Value
  // const setInputValue = (e) => {
  //   const { name, value } = e.target;
  //   UseData({ ...inputdata, [name]: value });
  // };

  // //submit userdata
  // const DataBase  = async (e) => {
  //   e.preventDefault();

  //   const { title, name, phone, email, password, street, city, pincode } = inputdata;

  //   if (name === "") { toast.error("Name is Required !"); }
  //   else if (title === "") { toast.error("Title is Required !"); }
  //   else if (email === "") { toast.error("Email is Required !"); }
  //   else if (!email.includes("@")) { toast.error("Enter Valid Email !"); }
  //   else if (phone === "") { toast.error("Mobile is Required !"); }
  //   else if (phone.length > 10) { toast.error("Enter Valid Mobile it should be 10 Digit only"); }
  //   else if (city === "") { toast.error("City is Required !"); }
  //   else if (pincode === "") { toast.error("Pincode is Required !"); }
  //   else if (password === "") { toast.error("Password is Required !"); }
  //   else if (street === " ") { toast.error("Street is Required !"); }
  //   else {

  //     const data = new FormData();
  //     data.append("title", title);
  //     data.append("name", name);
  //     data.append("phone", phone);
  //     data.append("email", email);
  //     data.append("password", password);
  //     data.append("street", street);
  //     data.append("city", city);
  //     data.append("pincode", pincode);

  //   }
  // }; 

  // useEffect(() => { setTimeout(() => { setShowSpin(false); }, 1); }, []);
  const navigate = useNavigate();
  const [Data, UseData] = useState({
    title: "", name: "", phone: "", email: "", password: "", street: "", city: "", pincode: "" ,
  });
  console.log(UseData);

  const ChangeHandler = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    UseData({ ...Data, [name]: value })

  }

  const DataBase = async (e)=>{
    e.preventDefault()
    try{const user = await axios.post('/register',Data)
     if(user.status === false)
     {
        window.alert("invalid data")
     }
     else{  window.alert("register successfully")
    navigate('/LogIn')}}
    catch(err){
       window.alert("please enter valid data")
    }
  }

  return (
    <>

      <div className="container">
        <h2 className="text-center mt-1">Register Your Details</h2>
        <Card className="shadow mt-3 p-3">

          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                 <Form.Check type={"radio"} label={`Mr.`} name="title" value={"Mr"} onChange={ChangeHandler} />
                 <Form.Check type={"radio"} label={`Mrs.`} name="title" value={"Miss"} onChange={ChangeHandler} />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={Data.name} onChange={ChangeHandler} placeholder="Enter Full Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" value={Data.phone} onChange={ChangeHandler} placeholder="Enter Phone No." />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={Data.email} onChange={ChangeHandler} placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={Data.password} onChange={ChangeHandler} placeholder="Enter Password here" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Enter Your street</Form.Label>
                <Form.Control type="text" name="street" value={Data.street} onChange={ChangeHandler} placeholder="Enter Your Location" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Enter Your City</Form.Label>
                <Form.Control type="text" name="city" value={Data.city} onChange={ChangeHandler} placeholder="Enter Your Location" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Enter Your Pincode</Form.Label>
                <Form.Control type="text" name="city" value={Data.city} onChange={ChangeHandler} placeholder="Enter Your Location" />
              </Form.Group>

              <Button variant="primary" type="submi" onClick={DataBase}>Submit</Button>

              <p className="text-center text-muted mt-2 mb-0">Have already an account?{" "}
                <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
              </p>
            </Row>
          </Form>
        </Card>
      </div>

    </>
  );
};

export default SignUp;