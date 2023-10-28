import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/app/theme-toggle";

export default function page() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <p>Card Content 1</p>
          <ModeToggle />
        </CardContent>
      </Card>

      <Card className="col-start-1 row-start-2">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content 2</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <Card className="col-start-2 row-span-2 row-start-1">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content 3</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <Card className="col-span-2 row-start-3">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content 4</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
