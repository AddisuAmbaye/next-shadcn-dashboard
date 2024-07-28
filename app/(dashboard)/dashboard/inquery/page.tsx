'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { columns } from '@/components/tables/inquery-tables/columns';
import { EmployeeTable } from '@/components/tables/inquery-tables/inquery-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { useInquery } from '@/hooks/useInquery';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Inquery', link: '/dashboard/inquery' }
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
  
  const { data: inqueries, isLoading, error } = useInquery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cars</div>;
  }

  if (!inqueries) {
    return <div>No cars found</div>;
  }

  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Inquery (${inqueries.length})`}
            description="Manage Inqueries"
          />
        </div>
        <Separator />

        <EmployeeTable
          searchKey="carId"
          pageNo={page}
          columns={columns}
          totalUsers={inqueries.length}
          data={inqueries}
          pageCount={inqueries.length}
        />
      </div>
    </>
  );
}
