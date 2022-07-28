import React from "react";
import { useParams } from "react-router-dom";
import { usePerson } from "../../apis/getPerson";
import { DetailGrid } from "./styled";
import { Status } from "../FilteredPeople/styled";

export const PersonDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = usePerson({ id });

  if (isLoading) {
    return <Status>...Loading</Status>
  }

  return <DetailGrid>
    {data.data && (
      <div>
        <div>Name: {data.data.name}</div>
        <div>Height: {data.data.height}</div>
        <div>Mass: {data.data.mass}</div>
        <div>Hair Color: {data.data.hair_color}</div>
        <div>Eye Color: {data.data.eye_color}</div>
        <div>Birth Year: {data.data.birth_year}</div>
        <div>Gender: {data.data.gender}</div>
        <div>Homeworld: {data.data.homeworld}</div>
        <div>Url: {data.data.url}</div>
      </div>  
    )}
  </DetailGrid>;
};
