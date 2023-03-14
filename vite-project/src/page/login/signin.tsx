import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { IUser } from "../../interface/user";


const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser>();
    const navigate = useNavigate();
    const onAdd: SubmitHandler<IUser> = async (dataUser) => {
        try {
            const { data } = await axios.post("http://localhost:8000/api/signin", dataUser)
            console.log(data)
            localStorage.setItem('dataUser', JSON.stringify(data.user))
            localStorage.setItem('token', JSON.stringify(data.token))
            if(data.user.email=="chientm111@fpt.edu.vn"){
                alert("Đăng nhập thành công, bạn là quản trị viên")
                // navigate("/admin")
            }else{
                alert("Đăng nhập thành công")
                // navigate("/")
            }
        } catch (error) {
            alert("Đăng nhập thất bại")
            location.reload()
        }
    }

    return (

        <div className="row justify-content-center">

            <div className="col-xl-5 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">

                        <div className="row">

                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <form className="user" onSubmit={handleSubmit(onAdd)}>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." {...register("email",{required:true})} />
                                            {errors.email && errors.email.type ==="required" && (<span style={{color:"red", fontSize:"13px"}}>Trường dữ liệu bắt buộc</span>)}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" {...register("password",{required:true})} />
                                            {errors.password && errors.password.type ==="required" && (<span style={{color:"red", fontSize:"13px"}}>Trường dữ liệu bắt buộc</span>)}

                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-user btn-block">sign in</button>

                                        <hr />
                                        <a href="" className="btn btn-google btn-user btn-block">
                                            <i className="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="" className="btn btn-facebook btn-user btn-block">
                                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="register.html">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}
export default Signin
