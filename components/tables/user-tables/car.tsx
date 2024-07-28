// /components/tables/user-tables/car.tsx
'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Car } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

interface CarClientProps {
  data: Car[];
}

export const CarClient: React.FC<CarClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Cars (${data.length})`} description="Manage cars" />
        <Button className="text-xs md:text-sm" onClick={() => router.push(`/dashboard/car/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="make" columns={columns} data={data} />
    </>
  );
};
