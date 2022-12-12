import { Register, useApplicationContext } from "../../Contexts/Context";
import { SubmitHandler, useForm } from "react-hook-form";

export const EditForm = () => {
  const { editItem, setEditItem, handleEdit } = useApplicationContext();
  const { register, handleSubmit } = useForm<Register>({
    defaultValues: editItem,
  });
  const onSubmit: SubmitHandler<Register> = (data) => {
    handleEdit(data);
    setEditItem(undefined);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div className="mb-5">
        <input
          className="outline-none border border-gray-300 p-3 w-96"
          type="text"
          placeholder="First Name"
          {...register("first_name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <input
          className="outline-none border border-gray-300 p-3 w-96"
          type="undefined"
          placeholder="Last Name"
          {...register("last_name", { required: true })}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 w-96 text-white p-3 rounded-lg hover:scale-105 duration-300"
      >
        Edit
      </button>
    </form>
  );
};
