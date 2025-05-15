import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Too Short!").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      country: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded shadow-md max-w-xl">
      <h3 className="text-lg font-semibold mb-4">User Form</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {formik.errors.name && <p className="text-red-500 text-sm">{formik.errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
        {formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select
          name="country"
          onChange={formik.handleChange}
          value={formik.values.country}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {formik.errors.country && <p className="text-red-500 text-sm">{formik.errors.country}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default UserForm;