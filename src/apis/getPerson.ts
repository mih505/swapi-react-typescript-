import { useQuery } from "react-query";

import { axios } from "../lib/axios";

import { Person } from "../types";

interface getPersonProps {
  id: any
}

export const getPerson = ({ id }: getPersonProps): Promise<Person> => {
  return axios.get(`/people/${id}/`);
};

export const usePerson = ({ id }: getPersonProps) => {
    return useQuery(['person', id], () => getPerson({ id }));
}
