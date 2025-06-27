import React from 'react';
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import StatsCard from '@/components/StatsCard';
import RecentActivityFeed from '@/components/RecentActivityFeed';

// Placeholder data for the overview chart
const salesData = [
  { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Aug', total: 4590 },
  { name: 'Sep', total: 3490 },
  { name: 'Oct', total: 4800 },
  { name: 'Nov', total: 5100 },
  { name: 'Dec', total: 6300 },
];

const Dashboard = () => {
  console.log('Dashboard page loaded');

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LeftSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          
          {/* Stats Cards Section */}
          <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <StatsCard
              title="Total Revenue"
              value="$45,231.89"
              description="+20.1% from last month"
              icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
            />
            <StatsCard
              title="Subscriptions"
              value="+2350"
              description="+180.1% from last month"
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
            />
            <StatsCard
              title="Sales"
              value="+12,234"
              description="+19% from last month"
              icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
            />
            <StatsCard
              title="Active Now"
              value="+573"
              description="+201 since last hour"
              icon={<Activity className="h-4 w-4 text-muted-foreground" />}
            />
          </section>

          {/* Chart and Recent Activity Section */}
          <section className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <LineChart data={salesData}>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                          border: '1px solid #ccc' 
                        }} 
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="total"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{ r: 4, strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <RecentActivityFeed />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;