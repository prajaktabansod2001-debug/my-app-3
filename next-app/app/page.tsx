

import Image from "next/image";
import { Button } from "@base-ui/react";
import { Input } from "@base-ui/react";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <Card className="w-[350px] mx-auto mt-20 p-4 shadow-lg">
      <CardContent>
        <Input placeholder="Email" className="mb-3" />
        <Input placeholder="password" type="password" className="mb-3" />
        <Button className="w-full">login</Button>
      </CardContent>
    </Card>
  );
}


