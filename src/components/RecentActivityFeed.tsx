import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, UserPlus, DollarSign, Package } from 'lucide-react';

type ActivityItem = {
  id: number;
  icon: React.ElementType;
  iconColor: string;
  description: React.ReactNode;
  time: string;
};

const activities: ActivityItem[] = [
  {
    id: 1,
    icon: ShoppingCart,
    iconColor: "text-blue-500",
    description: (
      <p>
        New order <span className="font-semibold text-gray-800">#ORD-0871</span> received from Jane Smith.
      </p>
    ),
    time: "5m ago",
  },
  {
    id: 2,
    icon: UserPlus,
    iconColor: "text-green-500",
    description: (
      <p>
        A new customer, <span className="font-semibold text-gray-800">Alex Ray</span>, has registered.
      </p>
    ),
    time: "25m ago",
  },
  {
    id: 3,
    icon: DollarSign,
    iconColor: "text-yellow-600",
    description: (
      <p>
        Payment of <span className="font-semibold text-gray-800">$128.50</span> for order #ORD-0870 was successful.
      </p>
    ),
    time: "1h ago",
  },
  {
    id: 4,
    icon: Package,
    iconColor: "text-purple-500",
    description: (
      <p>
        Product <span className="font-semibold text-gray-800">"Modern Ceramic Vase"</span> is low on stock.
      </p>
    ),
    time: "2h ago",
  },
];

const RecentActivityFeed: React.FC = () => {
  console.log('RecentActivityFeed loaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 ${activity.iconColor}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-sm text-gray-600">{activity.description}</div>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityFeed;