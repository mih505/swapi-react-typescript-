import { useState } from "react";

import FilteredPeople from "../FilteredPeople";
import { Layout, Search } from "./styled";
import { useDebounce } from "../../hooks/useDebounce";

export const People = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debounedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Layout>
      <Search>
        <input
          name="search"
          onChange={handleChange}
          value={searchTerm}
          placeholder="...Search"
        />
      </Search>
      <FilteredPeople debouncedSearchTerm={debounedSearchTerm}/>
    </Layout>
  );
};
