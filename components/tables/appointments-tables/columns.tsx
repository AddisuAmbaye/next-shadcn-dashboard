'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Appointment } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Appointment>[] = [
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
    accessorKey: 'car.make', 
    header: 'Make'
  },
  {
    accessorKey: 'car.model', 
    header: 'Model'
  },
  {
    accessorKey: 'user.name',
    header: 'USER NAME'
  },
  {
    accessorKey: 'contactInfo',
    header: 'CONTACT INFO'
  },
  {
    accessorKey: 'createdAt',
    header: 'CREATED AT',
   
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
