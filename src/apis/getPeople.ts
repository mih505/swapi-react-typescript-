import { useQuery } from "react-query";

import { axios } from "../lib/axios";

import { PeopleObj } from "../types";

interface getPeopleProps {
  searchTerm: string;
  page: number;
}

export const getPeople = ({
  searchTerm,
  page,
}: getPeopleProps): Promise<PeopleObj> => {
  return axios.get(`/people/?page=${page}&search=${searchTerm}`);
};

export const usePeople = ({ searchTerm, page }: getPeopleProps) => {
    return useQuery(['people', searchTerm, page], () => getPeople({ searchTerm, page }));
}
