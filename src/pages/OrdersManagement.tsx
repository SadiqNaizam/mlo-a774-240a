import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import DataGridToolbar from '@/components/DataGridToolbar';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';

type OrderStatus = 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

interface Order {
  id: string;
  customerName: string;
  email: string;
  date: string;
  status: OrderStatus;
  total: number;
}

const allOrders: Order[] = [
  { id: 'ORD001', customerName: 'Liam Johnson', email: 'liam@example.com', date: '2023-10-23', status: 'Delivered', total: 250.0 },
  { id: 'ORD002', customerName: 'Olivia Smith', email: 'olivia@example.com', date: '2023-10-22', status: 'Shipped', total: 150.75 },
  { id: 'ORD003', customerName: 'Noah Williams', email: 'noah@example.com', date: '2023-10-21', status: 'Processing', total: 350.0 },
  { id: 'ORD004', customerName: 'Emma Brown', email: 'emma@example.com', date: '2023-10-20', status: 'Delivered', total: 450.5 },
  { id: 'ORD005', customerName: 'Ava Jones', email: 'ava@example.com', date: '2023-10-19', status: 'Cancelled', total: 75.0 },
  { id: 'ORD006', customerName: 'William Garcia', email: 'william@example.com', date: '2023-10-18', status: 'Delivered', total: 200.0 },
  { id: 'ORD007', customerName: 'Sophia Miller', email: 'sophia@example.com', date: '2023-10-17', status: 'Shipped', total: 130.0 },
];

const OrdersManagement = () => {
  console.log('OrdersManagement page loaded');

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = useMemo(() => {
    return allOrders
      .filter((order) =>
        statusFilter === 'All' ? true : order.status === statusFilter
      )
      .filter((order) =>
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [searchQuery, statusFilter]);

  const getBadgeVariant = (status: OrderStatus): 'default' | 'secondary' | 'destructive' => {
    switch (status) {
      case 'Shipped':
        return 'default';
      case 'Processing':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
      case 'Delivered':
         // Using default for delivered and adding a custom green color for better UX
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LeftSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-gray-100/40 dark:bg-muted/40">
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>
                Manage your orders and view their status.
              </CardDescription>
            </CardHeader>
            <DataGridToolbar
              onSearch={setSearchQuery}
              onFilterChange={(_, value) => setStatusFilter(value)}
              searchPlaceholder="Search by ID, name, or email..."
              addNewButtonText="Create Order"
            />
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={getBadgeVariant(order.status)}
                            className={order.status === 'Delivered' ? 'bg-green-500 hover:bg-green-600' : ''}
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          ${order.total.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Update Status</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Cancel Order
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="h-24 text-center"
                      >
                        No results found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
            <div className="p-4 border-t">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OrdersManagement;