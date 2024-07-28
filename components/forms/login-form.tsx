'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useLogin } from '@/hooks/useAuth';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const {toast} = useToast();
  const router = useRouter();
  const { mutate: login, status, error, isError } = useLogin();
  const isLoading = status === 'pending';

  const onSubmit = (data: LoginFormValues) => {
    login(data, {
      onSuccess: (response) => {
        toast({
          title: 'Login successful',
          description: 'You have successfully logged in!',
          className: 'bg-green-500 text-white',
        })
        localStorage.setItem('token', response?.token as string);
        router.push('/dashboard');
        console.log('Login successful:', response);
      },
      onError: (error) => {
        toast({
          title: 'Login error',
          description: error.message,
          className: 'bg-red-500 text-white',
        })
        console.error('Login error:', error);
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password..."
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isError && <div className="text-red-600">{(error as Error).message}</div>}
        <Button disabled={isLoading} className="ml-auto w-full" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}
