'use client'
import SignupForm from '@/components/forms/signup-form';
import { useRouter } from 'next/navigation';
export default function AuthenticationPage() {
  const router=useRouter()
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
          Create an account
          </h1>
          <p className="text-sm text-gray-600">
           Enter your details to create your account
          </p>
        </div>
         <SignupForm />
        <div className="text-center text-sm text-gray-600">
         
            <>
              Already have an account?{' '}
              <span onClick={() => router.push('/login')} className="text-blue-600 cursor-pointer">
                Login
              </span>
            </>
          
        </div>
      </div>
    </div>
  );
}
