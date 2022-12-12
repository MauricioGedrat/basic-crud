import { useState } from "react";
import { useApplicationContext } from "../../Contexts/Context";
import { Modal } from "../Modal";
import { DeleteIcon } from "../SvgComponents/DeleteIcon";
import { EditIcon } from "../SvgComponents/EditIcon";

export const Table = () => {
  const { data, handleDelete, setEditItem, editItem } = useApplicationContext();

  return (
    <div className="overflow-y-auto flex justify-center items-center text-center">
      <table className="table-auto w-[50vw]">
        <thead className="border border-gray-300">
          <tr>
            <th className="p-4 text-3xl font-normal text-blue-500">Id:</th>
            <th className="p-4 text-3xl font-normal text-blue-500">
              First Name:
            </th>
            <th className="p-4 text-3xl font-normal text-blue-500">
              Last Name:
            </th>
            <th className="p-4 text-3xl font-normal text-blue-500">
              Register On:
            </th>
          </tr>
        </thead>
        {data.map((item) => {
          return (
            <tbody key={item.id} className="border border-gray-300">
              <tr>
                <td className="p-5 font-bold">{item.id}</td>
                <td className="p-5">{item.first_name}</td>
                <td className="p-5">{item.last_name}</td>
                <td className="p-5">{item.register_on}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>
                    <DeleteIcon />
                  </button>
                </td>
                <td>
                  <button onClick={() => setEditItem(item)}>
                    <EditIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      {editItem && <Modal />}
    </div>
  );
};
