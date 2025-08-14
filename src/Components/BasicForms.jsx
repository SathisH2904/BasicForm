import React, { useState } from "react";
import { useFormik } from 'formik';
// import { basicSchema } from "./schema/Index";
import { basicSchema } from "./schema";

const onSubmit = (()=>{
  console.log(onSubmit)
})
const BasicForms = () => {
    let {values,handleChange,handleBlur,isSubmitting, touched, errors , handleSubmit} = useFormik({
        initialValues: {
            name  : "",
            email : "",
            Password : "",
            confirmPassword : "",
        },
        validationSchema : basicSchema,
        onSubmit
    })
    console.log(errors)
    
  return (
    <form  onSubmit={handleSubmit} className="form-head">
      <label htmlFor="">Name</label>
      <input
        id="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter the Name"
        className={errors.name && touched.name ? "input-error" : ""}
      />
      {errors.email && touched.email && <p>{errors.name}</p>}
      <label onSubmit={handleSubmit}>Email</label>
      <input
        id="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter the email"
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p>{errors.email}</p>}

      <label onSubmit={handleSubmit}>Password</label>
      <input
        id="password"
        type="password"
        // value={values.Password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter the password"
        className={errors.Password && touched.Password? "input-error" : ""}
      />
      {errors.email && touched.email && <p>{errors.Password}</p>}
      <label onSubmit={handleSubmit}>ConfirmPassword</label>
      <input
        id="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter the cPassword"
        className={errors.confirmPassword && touched.confirmPassword? "input-error" : ""}
      />
      {errors.email && touched.email && <p>{errors.confirmPassword}</p>}
      <button disabled={isSubmitting} type="submit"> submit</button>
    </form>
  );
};

export default BasicForms;
