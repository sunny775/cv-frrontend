import useSWR from 'swr';
import axios from 'axios';
import { serverUrl } from '../utils/config';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((res) => res.data);

export function useCampusList() {
  const { data, error } = useSWR(`${serverUrl}/campusData/allCampus`, fetcher);
  return {
    data,
    loading: !error && !data,
    error
  };
}

export function usePage(pagePath) {
  const { error, data } = useSWR(`${serverUrl}/pageData?pagePath=${pagePath}`, fetcher);
  return {
    data,
    loading: !error && !data,
    error
  };
}

export function useCampus(campusPath) {
  const { data, error } = useSWR(`${serverUrl}/campusData?campusPath=${campusPath}`, fetcher);
  return {
    data,
    loading: !error && !data,
    error
  };
}