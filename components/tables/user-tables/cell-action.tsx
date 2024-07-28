// /components/tables/user-tables/cell-action.tsx
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Car } from '@/constants/data';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDeleteCar } from '@/hooks/useCars';
import { AlertModal } from '@/components/modal/alert-modal';
import { useToast } from '@/components/ui/use-toast';

interface CellActionProps {
  data: Car;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { mutate: deleteCar, status } = useDeleteCar();
  const isLoading = status === 'pending';

  const onConfirm = () => {
    deleteCar(data.id, {
      onSuccess: () => {
        toast({
          title:"Success",
          description:"Car deleted successfully",
          className:"bg-green-500 text-white"
        })
        setOpen(false);
      },
      onError:(error) => {
        toast({
          title: 'Error',
          description: error.message,
          variant:"destructive"
        });
      }
    });
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={isLoading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => router.push(`/dashboard/car/${data.id}`)}>
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
