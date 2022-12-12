import { useApplicationContext } from "../../Contexts/Context";

export const Header = () => {
  const {setSearch} = useApplicationContext()

  return (
    <div className="p-5 flex justify-center flex-col items-center">
      <h1 className="text-2xl mb-5 text-blue-500">Search for your user:</h1>

      <input
        type="text"
        placeholder="Search"
        className="p-4 outline-none border border-gray-300 w-[50vw]"
        onChange={(ev) => setSearch(ev.target.value)}
      />
    </div>
  );
};
