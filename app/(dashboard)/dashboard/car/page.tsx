'use client'
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CarClient } from '@/components/tables/user-tables/car';
import { useCars } from '@/hooks/useCars';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Car', link: '/dashboard/car' }
];

export default function Page() {
  const { data: cars, isLoading, error } = useCars();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cars</div>;
  }

  if (!cars) {
    return <div>No cars found</div>;
  }

  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <CarClient data={cars} />
      </div>
    </>
  );
}
