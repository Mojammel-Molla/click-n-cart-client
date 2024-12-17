import AdminTitle from '@/components/dashboard/admin/AdminTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import HPagination from '@/components/HPagination';
import { useState } from 'react';
import { useFetchAllOrdersQuery } from '@/redux/features/order/order.api';
import { TOrder } from '@/types/order.types';

import moment from 'moment';
const AOrder = () => {
  const [page, setPage] = useState(1);
  const {
    data: orders,
    isLoading,
    isFetching,
  } = useFetchAllOrdersQuery([
    { name: 'page', value: String(page) },
    { name: 'limit', value: '10' },
  ]);

  return (
    <div className="space-y-7">
      <AdminTitle title="Users" />
      <div className="block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User Name</TableHead>
              <TableHead className="text-center">Total Price</TableHead>
              <TableHead className="text-center">Transaction Id</TableHead>
              <TableHead className="text-center">Product Count</TableHead>
              <TableHead className="text-center">Order Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading || isFetching
              ? null
              : orders?.data?.map((order: TOrder) => {
                  return (
                    <TableRow key={order.id}>
                      <TableCell>{order.user.name}</TableCell>
                      <TableCell className="text-center">
                        {order.total_price}
                      </TableCell>
                      <TableCell className="text-center">
                        {order.transaction_id}
                      </TableCell>
                      <TableCell className="text-center">
                        {order?.orderProduct?.length}
                      </TableCell>
                      <TableCell className="text-center">
                        {moment(order?.createdAt).format('DD MMM, YYYY - HH:MM:SS A')}
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </div>
      <HPagination
        page={page}
        setPage={setPage}
        totalPage={Math.ceil(
          Number(orders?.meta?.total) / Number(orders?.meta?.limit)
        )}
      />
    </div>
  );
};

export default AOrder;
