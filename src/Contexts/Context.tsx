import records from "../registros.json";
import React, { useState, createContext, useContext } from "react";

export interface Register {
  id: number;
  first_name: string;
  last_name: string;
  register_on: string;
}

interface Props {
  children: React.ReactNode;
}

interface ApplicationState {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  editItem: Register | undefined;
  setEditItem: React.Dispatch<React.SetStateAction<Register | undefined>>;
  handleDelete: (id: number) => void;
  handleEdit: (editRegister: Register) => void;
  data: Register[];
}

const ApplicationContext = createContext<ApplicationState>({
  search: "",
  setSearch: () => {},
  editItem: undefined,
  setEditItem: () => {},
  data: [],
  handleDelete: () => {},
  handleEdit: () => {},
});

const useApplicationState = (): ApplicationState => {
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState<Register | undefined>();
  const [jsonImported, setJsonImported] = useState<Register[]>(records);

  const data: Register[] = jsonImported
    .filter((row) => {
      return Object.values(row).some((s) =>
        ("" + s).toLowerCase().includes(search.toLowerCase())
      );
    })
    .sort((x, y) => x.id > y.id ? 1 : -1);

  const handleDelete = (id: number) => {
    const result = jsonImported.filter((x) => x.id !== id);
    setJsonImported(result);
  };

  const handleEdit = (editRegister: Register) => {
    const result = jsonImported.filter((x) => x.id !== editRegister.id);
    setJsonImported([...result, editRegister]);
  };

  return {
    search,
    setSearch,
    handleDelete,
    handleEdit,
    editItem,
    setEditItem,
    data: data,
  };
};

export const ApplicationContextProvider = ({ children }: Props) => (
  <ApplicationContext.Provider value={useApplicationState()}>
    {children}
  </ApplicationContext.Provider>
);

export const useApplicationContext = () => useContext(ApplicationContext);
