import React, { useEffect, useState } from "react";
import Card from "../Card";
import { usePeople } from "../../apis/getPeople";
import { Person } from "../../types";
import { CardGrid, Pagination, Status } from "./styled";

interface FilteredPeopleProps {
  debouncedSearchTerm: string;
}

const FilteredPeople: React.FC<FilteredPeopleProps> = React.memo(
  ({ debouncedSearchTerm }) => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = usePeople({
      searchTerm: debouncedSearchTerm,
      page: page,
    });

    useEffect(() => {
      setPage(1);
    }, [debouncedSearchTerm])

    if (isLoading) {
      return <Status>...Loading</Status>;
    }

    if (isError) {
      return <Status>{error.message}</Status>;
    }

    const people = data.data;

    return (
      <>
        <CardGrid>
          {people.results.map((person: Person) => (
            <Card person={person} key={person.name + person.created} />
          ))}
        </CardGrid>
        {people && (people.next || people.previous) ? (
          <Pagination>
            <button
              disabled={!people.previous}
              onClick={() => setPage(people.previous)}
            >
              &lt;
            </button>
            <button
              disabled={!people.next}
              onClick={() => setPage(people.next)}
            >
              &gt;
            </button>
          </Pagination>
        ) : null}
      </>
    );
  }
);

export default FilteredPeople;
