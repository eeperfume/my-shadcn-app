// src/components/payments/columns.tsx
import type { ColumnDef } from "@tanstack/react-table";

// 이 타입은 데이터의 구조를 정의하는 데 사용된다.
// 필요하다면 여기서 Zod 스키마를 사용해도 된다.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
