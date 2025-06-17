import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({});
    setSuccess("");
  };

  const validate = () => {
    const nameReg = /^[A-Z][a-zA-Z\s]{1,}$/;
    const emailReg = /^\S+@\S+\.\S+$/;
    const phoneReg = /^[6-9]\d{9}$/;
    const ageReg = /^\d{1,3}$/;
    const addressReg = /^[\w\s,'-]{5,}$/;

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!nameReg.test(formData.name)) {
      newErrors.name = "First letter capital, letters only";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailReg.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!phoneReg.test(formData.phone)) {
      newErrors.phone = "Invalid phone";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (!ageReg.test(formData.age) || formData.age < 1) {
      newErrors.age = "Enter valid age";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    } else if (!addressReg.test(formData.address)) {
      newErrors.address = "Minimum 5 characters";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSuccess("Form submitted successfully🔰");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200 w-full max-w-md mt-10 mb-10">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit}>
          {success && <p className="text-green-600 text-center font-bold mb-4">{success}</p>}

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name:</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email:</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Phone:</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Age:</label>
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Address:</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white py-2 rounded-md text-lg font-medium transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
