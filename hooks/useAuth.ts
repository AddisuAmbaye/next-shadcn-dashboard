import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
}

const login = async (data: LoginData): Promise<User> => {
  const response = await apiClient.post('/auth/login', data);
  return response.data;
};

const signup = async (data: SignupData): Promise<User> => {
  const response = await apiClient.post('/auth/register', data);
  return response.data;
};

export const useLogin = (options?: UseMutationOptions<User, Error, LoginData>) => {
  return useMutation<User, Error, LoginData>({
    mutationFn: login,
    ...options,
  });
};

export const useSignup = (options?: UseMutationOptions<User, Error, SignupData>) => {
  return useMutation<User, Error, SignupData>({
    mutationFn: signup,
    ...options,
  });
};
