import useSWR from 'swr';
import axios from 'axios';
import { serverUrl } from '../utils/config';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((res) => res.data);

export function useCampusList(id) {
  const { data, error } = useSWR(`${serverUrl}/pageData/allCampus`, fetcher);
  return {
    data,
    loading: !error && !data,
    error
  };
}

export function usePageSimple(pagePath) {
  const { data, error } = useSWR(`${serverUrl}/pageData/page-simple?pagePath=${pagePath}`, fetcher);
  return {
    pageData: data,
    loading: !error && !data,
    error
  };
}

export function useCampusSimple(pagePath) {
  const { data, error } = useSWR(`${serverUrl}/pageData/campus-simple?pagePath=${pagePath}`, fetcher);
  return {
    pageData: data,
    loading: !error && !data,
    error
  };
}