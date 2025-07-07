// src/components/payments/page.tsx
import { useEffect, useState } from "react";
import { columns, type Payment } from "./columns";
import { DataTable } from "./data-table";
import { data as paymentData } from "./data";

async function getData(): Promise<Payment[]> {
  // 여기서 API를 통해 데이터를 가져오자.
  return paymentData;
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
