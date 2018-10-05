import axios from 'axios';

/* eslint-disable-next-line */
export const api = axios.create({
  baseURL: process.env.WP_REST_API,
});
