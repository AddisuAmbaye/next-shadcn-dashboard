'use client'
import LoginForm from '@/components/forms/login-form';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router=useRouter()

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            Login to your account
          </h1>
          <p className="text-sm text-gray-600">
            'Enter your email and password to login' 
          </p>
        </div>
        <LoginForm />
        <div className="text-center text-sm text-gray-600">
        
            <>
              Don't have an account?{' '}
              <span onClick={() => router.push('/signup')} className="text-blue-600 cursor-pointer">
                Sign Up
              </span>
            </>
        </div>
      </div>
    </div>
  );
}
