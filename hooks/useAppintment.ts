import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import { Appointment } from '@/constants/data';

const fetchAppintments = async (): Promise<Appointment[]> => {
  const { data } = await apiClient.get('/appointments');
  return data;
};

export const useAppointment = () => {
  return useQuery<Appointment[], Error>({
    queryKey: ['appointments'],
    queryFn: fetchAppintments,
  });
};

