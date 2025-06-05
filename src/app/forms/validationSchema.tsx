import { z } from "zod";

export const registrationSchema = z
  .object({
    fullname: z.string().min(3, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmpassword: z.string().min(6, "Confirm your password"),
    phonenumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms" }),
    }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"], 
  });
