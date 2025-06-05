'use client'

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "./validationSchema";
import { z } from "zod";

type FormData = z.infer<typeof registrationSchema>;

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    alert("successful registered")
    console.log("Submitted data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

      <div>
        <input
          {...register("fullname")}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        />
        <p className="text-red-500 text-sm">{errors.fullname?.message}</p>
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      <div>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      <div>
        <input
          type="password"
          {...register("confirmpassword")}
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        />
        <p className="text-red-500 text-sm">{errors.confirmpassword?.message}</p>
      </div>

      <div>
        <input
          {...register("phonenumber")}
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        />
        <p className="text-red-500 text-sm">{errors.phonenumber?.message}</p>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("terms")} />
        <label>I agree to the terms</label>
      </div>
      <p className="text-red-500 text-sm">{errors.terms?.message}</p>

      <button
        type="submit"
        // disabled={!isValid}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        Register
      </button>
    </form>
  );
};

export default Registration;
