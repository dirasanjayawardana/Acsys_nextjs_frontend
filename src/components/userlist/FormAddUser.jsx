import React from "react";

const FormAddUser = () => {
  return (
    <div>
      <div className="bg-gray-200 py-4 px-8 rounded-xl text-blue-500 font-bold text-xl">
        <h1>Add User</h1>
      </div>
      <form className="mt-3 p-4 flex flex-col gap-3">

        
          <div className="flex flex-col gap-3">
            
            <div className="flex gap-3 items-center">
              <label className="min-w-52">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="input input-sm input-bordered w-64"
              />
            </div>
            <div className="flex gap-3 items-center">
              <label className="min-w-52">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="input input-sm input-bordered w-64"
              />
            </div>
            <div className="flex gap-3 items-center">
              <label className="min-w-52">Role</label>
              <select className="select select-sm select-bordered w-64">
                <option>Role 1</option>
                <option>Role 2</option>
                <option>Role 3</option>
                <option>Role 4</option>
              </select>
            </div>
            <div className="flex gap-3 items-center">
              <label className="min-w-52">Status</label>
              <select className="select select-sm select-bordered w-64">
                <option>Aktif</option>
                <option>Non Aktif</option>
              </select>
            </div>
            
          </div>
          <div className="mt-5">
          <button type="button" className="text-white bg-blue-500 hover:bg-blue-800">Submit</button>
          <button type="button" className="text-white bg-red-500 hover:bg-red-700 ">Cancel</button>
          </div>
      </form>
    </div>
  );
};

export default FormAddUser;
