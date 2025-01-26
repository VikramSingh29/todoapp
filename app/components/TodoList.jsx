"use client";
import React, { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const TodoList = ({ todo, deleteTodo, editTodo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [currentTodo, setCurrentTodo] = useState(""); // Track the current todo being edited
  const [currentIndex, setCurrentIndex] = useState(null); // Track the index of the todo being edited

  const handleOpenModal = (index) => {
    setIsModalOpen(true);
    setCurrentTodo(todo[index]); // Set the current todo being edited
    setCurrentIndex(index); // Track the index for editing
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentTodo("");
    setCurrentIndex(null);
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    if (currentIndex !== null) {
      editTodo(currentIndex, currentTodo); // Pass the updated todo to the parent function
    }
    handleCloseModal();
  };

  return (
    <>
      <div className="overflow-x-auto container mx-auto flex justify-center">
        <table className="table text-center w-[51vw]">
          {/* head */}
          <thead className="border-b-2 border-white">
            <tr className="text-white">
              <th className="text-xl">Todo</th>
              <th className="text-xl">Actions</th>
            </tr>
          </thead>
          <tbody className="border-b-2 border-gray-500 text-gray-300">
            {todo.map((todoItem, index) => (
              <tr key={index} className="border-gray-500 text-gray-300">
                <td className="text-lg">{todoItem}</td>
                <td>
                  <BiEdit
                    onClick={() => handleOpenModal(index)} // Open modal for editing
                    className="inline mx-2 text-blue-500 cursor-pointer"
                    size={22}
                  />
                  <BiTrash
                    className="inline  text-red-500 cursor-pointer"
                    size={22}
                    onClick={() => deleteTodo(index)} // Delete the todo
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog open className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal-box ">
            {/* Close button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Edit Your Todo</h3>
            <form onSubmit={handleEditTodo}>
              <input
                type="text"
                value={currentTodo} // Use currentTodo state
                onChange={(e) => setCurrentTodo(e.target.value)} // Update the current todo
                placeholder="Type here"
                className="input my-4 input-bordered w-full max-w-xs"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary w-30 text-white"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}


      
    </>
  );
};

export default TodoList;
