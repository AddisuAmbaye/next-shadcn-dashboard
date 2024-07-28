'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { columns } from '@/components/tables/inquery-tables/columns';
import { AppointmentTable } from '@/components/tables/appointments-tables/inquery-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useAppointment } from '@/hooks/useAppintment';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Appointment', link: '/dashboard/appointment' }
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default  function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const offset = (page - 1) * pageLimit;
  
  const { data: appintments, isLoading, error } = useAppointment();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cars</div>;
  }

  if (!appintments) {
    return <div>No cars found</div>;
  }

  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Appointment (${appintments.length})`}
            description="Manage appintments"
          />
        </div>
        <Separator />

        <AppointmentTable
          searchKey="carId"
          pageNo={page}
          columns={columns}
          totalUsers={appintments.length}
          data={appintments}
          pageCount={appintments.length}
        />
      </div>
    </>
  );
}
