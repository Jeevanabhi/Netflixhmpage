
import React from 'react';
import { baseUrl } from './constants/constants';
import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: baseUrl, // Replace with your API base URL
 // Optional: Set a timeout limit (in ms)
  headers: {
    'Content-Type': 'application/json',
    'Authorization':  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhlMzU3OTFkNDQ2N2VkMTQwY2RiMDkzNGYwM2RhOCIsIm5iZiI6MTcyNTc5MTg2MC40MjY1NTcsInN1YiI6IjY2ZGJlMzE2MjNjMzc2MWFlZWY1ZDliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P_cXGf7WVy33WTtZpfjL_h3-c3AvjaDVt_Ko9xzr-Mo', // Optional: Add auth token if needed
  },
});

// Example: Using the axios instance to make a GET request


export default api;

  
  