import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[500px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="div">
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
           
            <h3 className="font-bold text-lg">Sign up</h3>
            {/*NAME*/}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* EMAIL*/}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/*PASSWORD*/}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/*BUTTON*/}
            <div className="flex justify-around mt-4">
              <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600 duration-300">
                Sign up
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <button
                  className="underline cursor-pointer text-blue-500" onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
