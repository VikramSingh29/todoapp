"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();

    addTodo(todo);
    setTodo(""); // Clear the input
    setIsModalOpen(false); // Close the modal
  };
  return (
    <>
      {/* Add Todo Button */}
      <div className="flex justify-center items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn w-[50vw] bg-blue-500 text-white text-xl flex justify-center gap-2 hover:bg-blue-600"
        >
          Add Todo <IoMdAdd  className="text-2xl font-extrabold mt-[3px]" />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Add Todo</h3>
            <form onSubmit={handleAddTodo}>
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Type here"
                className="input my-4 input-bordered w-full max-w-xs"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary w-30 text-white"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoInput;
