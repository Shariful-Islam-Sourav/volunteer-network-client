import React from "react";
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }; 
  return (
    <div className="volunteer-bg d-flex justify-content-center align-items-center">
      <div className="bg-white p-5 w-50 h-50 rounded-3 shadow-sm d-flex align-items-center">
        <div className="flex-fill py-5">
            <h2 className="fw-bold">Add Events</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name:</label> <br />
            <input className="w-50 p-2 rounded-3 mb-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Event Name" /> <br />
            <label>Banner Image Link:</label> <br />
            <input className="w-50 p-2 rounded-3 mb-3" {...register("image", { required: true })} placeholder="Input A Valid Link" /> <br />
            <label>Background Color:</label> <br />
            <input className="w-50 p-2 rounded-3 mb-4" {...register("cardbg", { required: true, maxLength: 10 })} placeholder="e.g. #3F90FC" /> <br />
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvents;
