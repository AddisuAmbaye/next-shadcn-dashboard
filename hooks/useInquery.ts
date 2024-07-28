  import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
  import apiClient from '@/lib/api-client';
  import { Inquiry } from '@/constants/data';

  const fetchInqueries = async (): Promise<Inquiry[]> => {
    const { data } = await apiClient.get('/inquiries');
    return data;
  };

  export const useInquery = () => {
    return useQuery<Inquiry[], Error>({
      queryKey: ['inquiries'],
      queryFn: fetchInqueries,
    });
  };

