import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import { Car } from '@/constants/data';

const fetchCars = async (): Promise<Car[]> => {
  const { data } = await apiClient.get('/cars');
  return data;
};

const fetchCar = async (id: number): Promise<Car> => {
  const { data } = await apiClient.get(`/cars/${id}`);
  return data;
};

const createCar = async (car: Partial<Car>): Promise<Car> => {
  const { data } = await apiClient.post('/cars', car);
  return data;
};

const updateCar = async ({ id, car }: { id: number; car: Partial<Car> }): Promise<Car> => {
  const { data } = await apiClient.put(`/cars/${id}`, car);
  return data;
};

const deleteCar = async (id: number): Promise<void> => {
  await apiClient.delete(`/cars/${id}`);
};

export const useCars = () => {
  return useQuery<Car[], Error>({
    queryKey: ['cars'],
    queryFn: fetchCars,
  });
};

export const useCreateCar = () => {
  const queryClient = useQueryClient();
  return useMutation<Car, Error, Partial<Car>>({
    mutationFn: createCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
    },
  });
};

export const useCar = (id: number) => {
  return useQuery<Car, Error>({
    queryKey: ['car', id],
    queryFn: () => fetchCar(id)
  });
};

export const useUpdateCar = () => {
  const queryClient = useQueryClient();
  return useMutation<Car, Error, { id: number; car: Partial<Car> }>({
    mutationFn: updateCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
    },
  });
};

export const useDeleteCar = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: deleteCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
    },
  });
};