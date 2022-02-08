import React from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./RegisterEvent.css";

const RegisterEvent = () => {
  const { name } = useParams();
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="volunteer-register">
      <div className="volunteer-bg d-flex justify-content-center align-items-center">
        <div className="bg-white p-5 w-25 h-50 rounded-3 shadow-sm d-flex align-items-center">
          <div className="flex-fill py-5">
            <h2 className="text-center fw-bold fs-4 mb-5">
              Register as a Volunteer
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="w-100 p-2 mb-3 border-top-0 border-start-0 border-end-0"
                {...register("eventName", { required: true, maxLength: 20 })}
                placeholder="Event Name"
                value={name ?? ""}
              />{" "}
              <input
                className="w-100 p-2 mb-3 border-top-0 border-start-0 border-end-0"
                {...register("Email", { required: true })}
                placeholder="User Email"
              />{" "}
              <input
                className="w-100 p-2 mb-3 border-top-0 border-start-0 border-end-0"
                {...register("Email", { required: true, maxLength: 15 })}
                placeholder="Phone Number"
              />{" "}
              <Controller
                control={control}
                name="dateInput"
                render={({ field }) => (
                  <DatePicker
                  className="w-100 p-2 mb-3 border-top-0 border-start-0 border-end-0"
                    placeholderText="Select date"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
              <input className="btn btn-primary mt-3" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEvent;
