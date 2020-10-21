import useSWR from 'swr';
import axios from 'axios';
import { serverUrl } from '../utils/config';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((res) => res.data);

export function useUserData(email) {
  const { data, error } = useSWR(`${serverUrl}/userData?email=${email}`, fetcher);
  return {
    data,
    loading: !error && !data,
    error
  };
}