import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

const Settings = () => {
  console.log('Settings page loaded');

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 sm:p-6">
          <div className="mx-auto grid max-w-4xl gap-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold">Settings</h1>
                <p className="text-sm text-muted-foreground">
                    Manage your store settings, profile, and notification preferences.
                </p>
            </div>
            
            <Tabs defaultValue="profile">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>User Profile</CardTitle>
                    <CardDescription>
                      Update your personal information here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Store Manager" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="manager@example.com" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Choose how you want to be notified.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="new-orders" className="flex flex-col space-y-1">
                            <span>New Orders</span>
                            <span className="font-normal text-sm text-muted-foreground">Receive a notification for every new order.</span>
                        </Label>
                        <Switch id="new-orders" defaultChecked />
                    </div>
                     <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="low-stock" className="flex flex-col space-y-1">
                            <span>Product Low Stock</span>
                            <span className="font-normal text-sm text-muted-foreground">Get notified when a product's stock is low.</span>
                        </Label>
                        <Switch id="low-stock" defaultChecked />
                    </div>
                     <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="weekly-summary" className="flex flex-col space-y-1">
                            <span>Weekly Summary</span>
                            <span className="font-normal text-sm text-muted-foreground">Receive a performance summary every Monday.</span>
                        </Label>
                        <Switch id="weekly-summary" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Preferences</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Integrations Tab */}
              <TabsContent value="integrations">
                <Card>
                  <CardHeader>
                    <CardTitle>API & Integrations</CardTitle>
                    <CardDescription>
                      Manage API keys for third-party service integrations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="api-key">API Key</Label>
                      <div className="flex items-center space-x-2">
                        <Input id="api-key" readOnly value="sk_live_********************abcd" />
                        <Button variant="secondary">Regenerate</Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save API Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

            </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Settings;