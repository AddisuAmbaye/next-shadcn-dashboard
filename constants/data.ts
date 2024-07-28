import { NavItem } from '@/types';
import { number } from 'zod';

const token =localStorage.getItem('token')

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  description: string;
  images: string[];
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  inquiries: Inquiry[];
}

export interface Inquiry {
  id: number;
  userId: number;
  carId: number;
  message: string;
  createdAt: Date;
  car: Car;
  user: User;
}


export interface  Appointment {
  id  :number;
  userId :number;
  carId :number;
  date :Date;
  createdAt :Date;
  contactInfo:string;
  car :Car;
  user:User;
}

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Car',
    href: '/dashboard/car',
    icon: 'Car',
    label: 'car'
  },
  {
    title: 'Inquery',
    href: '/dashboard/inquery',
    icon: 'employee',
    label: 'query'
  },
  {
    title: 'Appointment',
    href: '/dashboard/appointment',
    icon: 'profile',
    label: 'appointment'
  },
  {
    title: 'Kanban',
    href: '/dashboard/kanban',
    icon: 'kanban',
    label: 'kanban'
  },
  {
    title: 'Login',
    href: '/',
    icon: 'login',
    label: 'login'
  }
];
