'use client'
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProductForm } from '@/components/forms/product-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCar } from '@/hooks/useCars';
import React from 'react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Car', link: '/dashboard/car' },
  { title: 'Create', link: '/dashboard/car/create' }
];


export default function Page({params}:{params:{carId: number}}) {
  const { carId } = params;

  const { data: car, isLoading, isError } = useCar(carId);
  
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductForm
          categories={[
            { _id: 'shirts', name: 'shirts' },
            { _id: 'pants', name: 'pants' }
          ]}
          initialData={car}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
