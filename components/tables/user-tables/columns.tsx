// /components/tables/user-tables/columns.tsx
import { ColumnDef } from '@tanstack/react-table';
import { Car } from '@/constants/data';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Car>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'make',
    header: 'MAKE'
  },
  {
    accessorKey: 'model',
    header: 'MODEL'
  },
  {
    accessorKey: 'year',
    header: 'YEAR'
  },
  {
    accessorKey: 'price',
    header: 'PRICE'
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
