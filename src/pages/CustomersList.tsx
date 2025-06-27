import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import DataGridToolbar from '@/components/DataGridToolbar';

// Shadcn/ui Components
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Icons
import { MoreHorizontal } from 'lucide-react';

// Placeholder data for the customer list
const customers = [
  {
    id: 'CUST001',
    name: 'Liam Johnson',
    email: 'liam@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=liamjohnson',
    totalOrders: 12,
    totalSpent: 1500.75,
    status: 'Active',
  },
  {
    id: 'CUST002',
    name: 'Olivia Smith',
    email: 'olivia@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=oliviasmith',
    totalOrders: 5,
    totalSpent: 450.0,
    status: 'Active',
  },
  {
    id: 'CUST003',
    name: 'Noah Williams',
    email: 'noah@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=noahwilliams',
    totalOrders: 2,
    totalSpent: 80.5,
    status: 'Inactive',
  },
  {
    id: 'CUST004',
    name: 'Emma Brown',
    email: 'emma@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=emmabrown',
    totalOrders: 25,
    totalSpent: 3200.0,
    status: 'VIP',
  },
  {
    id: 'CUST005',
    name: 'Ava Jones',
    email: 'ava@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=avajones',
    totalOrders: 8,
    totalSpent: 980.25,
    status: 'Active',
  },
];

const CustomersList = () => {
  console.log('CustomersList page loaded');

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LeftSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
          <Card>
            <CardHeader>
                <CardTitle>Customers</CardTitle>
            </CardHeader>
            <DataGridToolbar
              searchPlaceholder="Search customers..."
              addNewButtonText="Add Customer"
            />
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="text-center">Total Orders</TableHead>
                    <TableHead className="text-right">Total Spent</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={customer.avatarUrl} alt={customer.name} />
                            <AvatarFallback>
                              {customer.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{customer.name}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {customer.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">{customer.totalOrders}</TableCell>
                      <TableCell className="text-right">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(customer.totalSpent)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={
                            customer.status === 'Active'
                              ? 'secondary'
                              : customer.status === 'VIP'
                              ? 'default'
                              : 'destructive'
                          }
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CustomersList;