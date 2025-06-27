import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ChevronDown, PlusCircle, Download } from "lucide-react";

interface DataGridToolbarProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filterType: string, value: string) => void;
  onAddNew?: () => void;
  onExport?: () => void;
  addNewButtonText?: string;
  searchPlaceholder?: string;
}

const DataGridToolbar: React.FC<DataGridToolbarProps> = ({
  onSearch = () => {},
  onFilterChange = () => {},
  onAddNew = () => {},
  onExport = () => {},
  addNewButtonText = 'Add New',
  searchPlaceholder = 'Search items...',
}) => {
  console.log('DataGridToolbar loaded');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
    console.log(`Searching for: ${query}`);
  };

  const handleStatusSelect = (status: string) => {
    setStatusFilter(status);
    onFilterChange('status', status);
    console.log(`Filter changed to: ${status}`);
  };

  const handleAddNewClick = () => {
    onAddNew();
    console.log('Add New button clicked');
  };

  const handleExportClick = () => {
    onExport();
    console.log('Export Data button clicked');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 border-b bg-card">
      <div className="relative w-full md:max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-10 w-full"
          aria-label="Search"
        />
      </div>
      <div className="flex items-center gap-2 flex-wrap justify-start w-full md:w-auto md:justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto justify-center">
              Status: {statusFilter}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => handleStatusSelect('All')}>All</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleStatusSelect('Processing')}>Processing</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleStatusSelect('Shipped')}>Shipped</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleStatusSelect('Delivered')}>Delivered</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleStatusSelect('Cancelled')}>Cancelled</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" onClick={handleExportClick} className="w-full sm:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>

        <Button onClick={handleAddNewClick} className="w-full sm:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" />
          {addNewButtonText}
        </Button>
      </div>
    </div>
  );
};

export default DataGridToolbar;