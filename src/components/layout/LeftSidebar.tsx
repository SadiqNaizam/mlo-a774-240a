import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingCart, Package, Users, Settings, Package2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/orders-management", icon: ShoppingCart, label: "Orders", badgeCount: 3 },
    { to: "/products-management", icon: Package, label: "Products" },
    { to: "/customers-list", icon: Users, label: "Customers" },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
      isActive ? 'bg-muted text-primary' : 'text-muted-foreground'
    }`;

  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">CommerceControl</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClasses}>
                <item.icon className="h-4 w-4" />
                {item.label}
                {item.badgeCount && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {item.badgeCount}
                  </Badge>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <nav>
            <NavLink to="/settings" className={navLinkClasses}>
              <Settings className="h-4 w-4" />
              Settings
            </NavLink>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;