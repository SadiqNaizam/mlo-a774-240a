import React, { useState } from 'react';
import {
  MoreHorizontal,
  Pencil,
  Trash2,
} from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import DataGridToolbar from '@/components/DataGridToolbar';

// Shadcn UI Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


// Mock Data for Products
const products = [
  {
    id: 'prod-001',
    name: 'Wireless Ergonomic Mouse',
    status: 'In Stock',
    price: 49.99,
    stock: 120,
    image: 'https://placehold.co/40x40/3498db/ffffff?text=M',
  },
  {
    id: 'prod-002',
    name: 'Mechanical Gaming Keyboard',
    status: 'In Stock',
    price: 119.99,
    stock: 75,
    image: 'https://placehold.co/40x40/2ecc71/ffffff?text=K',
  },
  {
    id: 'prod-003',
    name: '4K Ultra HD Monitor',
    status: 'Low Stock',
    price: 399.00,
    stock: 8,
    image: 'https://placehold.co/40x40/e74c3c/ffffff?text=M',
  },
  {
    id: 'prod-004',
    name: 'USB-C Hub 8-in-1',
    status: 'In Stock',
    price: 59.99,
    stock: 200,
    image: 'https://placehold.co/40x40/9b59b6/ffffff?text=H',
  },
  {
    id: 'prod-005',
    name: 'Bluetooth Noise-Cancelling Headphones',
    status: 'Out of Stock',
    price: 199.99,
    stock: 0,
    image: 'https://placehold.co/40x40/f1c40f/ffffff?text=H',
  },
];

const ProductsManagement = () => {
  console.log('ProductsManagement page loaded');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // For a real app, you'd have more complex state for the selected product
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const handleAddNew = () => {
    setSelectedProduct(null);
    setIsDialogOpen(true);
  };
  
  const handleEdit = (product: any) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'default';
      case 'Low Stock':
        return 'secondary';
      case 'Out of Stock':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LeftSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
          </div>
          
          <Card>
            <DataGridToolbar
              onAddNew={handleAddNew}
              addNewButtonText="Add Product"
              searchPlaceholder="Search products..."
            />
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Stock</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={product.image} alt={product.name} />
                          <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(product.status)}>
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                      <TableCell className="hidden md:table-cell text-right">{product.stock}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onSelect={() => handleEdit(product)}>
                              <Pencil className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-5</strong> of <strong>{products.length}</strong> products
              </div>
              <Pagination className="ml-auto">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
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

      {/* Add/Edit Product Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
            <DialogDescription>
              {selectedProduct ? "Update the details of your product." : "Fill in the details for the new product."}
            </DialogDescription>
          </DialogHeader>
          {/* This would be a shadcn/ui Form component in a real app */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" defaultValue={selectedProduct?.name || ''} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input id="price" type="number" defaultValue={selectedProduct?.price || ''} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stock" className="text-right">
                Stock
              </Label>
              <Input id="stock" type="number" defaultValue={selectedProduct?.stock || ''} className="col-span-3" />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea id="description" placeholder="Optional product description..." className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button type="submit" onClick={() => setIsDialogOpen(false)}>Save Product</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsManagement;