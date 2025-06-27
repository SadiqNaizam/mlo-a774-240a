import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  /** The main title of the card, e.g., 'Total Revenue'. */
  title: string;
  /** The primary value to display, e.g., '$45,231.89'. */
  value: string;
  /** An icon component, e.g., <DollarSign className="h-4 w-4" />. */
  icon: React.ReactNode;
  /** A short description, e.g., '+20.1% from last month'. */
  description?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  description,
}) => {
  console.log(`StatsCard loaded for: ${title}`);

  const isPositive = description?.includes("+");
  const isNegative = description?.includes("-");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p
            className={cn(
              "text-xs text-muted-foreground",
              isPositive && "text-emerald-500",
              isNegative && "text-destructive"
            )}
          >
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;