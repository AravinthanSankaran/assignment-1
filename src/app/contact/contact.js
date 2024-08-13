"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
useState;
const ApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="container mx-auto">
      {/* {isSubmitted ? (
        <div className="max-w-md mx-auto p-4 border rounded shadow bg-orange-100 text-orange-700">
          <h2 className="text-xl font-bold text-center mb-4">
            Thank You For Contact-Us...!!!
          </h2>
          <p className="text-center">Will We Connect You Shortly...!!!</p>
        </div>
      ) : ( */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 mt-9 border rounded shadow"
      >
        <h2 className="text-xl font-bold text-center">Contact Form</h2>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="username"
            {...register("username", {
              required: "username is required",
              minLength: {
                value: 3,
                message: "Password must be more than 3 characters",
              },
            })}
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500">{errors.username?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "This is not a valid email",
              },
            })}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="Phone-number"
            {...register("phone", {
              required: "Phone-number is required",
              pattern: {
                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                message: "This is not a valid number",
              },
            })}
            className="w-full p-2 border rounded"
          />
          <p className="text-red-600">{errors.phone?.message}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
      {/* // )} */}
    </div>
  );
};

export default ApplicationForm;
