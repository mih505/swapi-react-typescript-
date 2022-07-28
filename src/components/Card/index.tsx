import React from "react";
import { Person } from "../../types";
import { Title, CardLayout, Description, Button } from "./styled";

interface CardProps {
  person: Person;
}

const Card: React.FC<CardProps> = ({ person }) => {
  const id = person.url.split("/")[5];

  return (
    <CardLayout>
      <Title>{person.name}</Title>
      <Description>
        <p>Gender: {person.gender}</p>
        <p>Birth_year: {person.birth_year}</p>
        <p>---{person.created}---</p>
      </Description>
      <Button to={`./${id}`}>View</Button>
    </CardLayout>
  );
};

export default Card;
