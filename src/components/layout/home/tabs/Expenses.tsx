import { CategoriesProgress } from "@/features/categories";
import { useTransactionStore } from "@/stores";
import Image from "next/image";

export function ExpensesTab() {
  const transactions = useTransactionStore.use.transactions();
  const total = transactions.reduce(
    (acc, transaction) => transaction.value + acc,
    0,
  );

  return (
    <div className="flex flex-col items-center mt-12 w-full">
      <h3 className="text-secondary font-bold text-2xl">R$ {total}</h3>
      {transactions.length > 0 && (
        <Image
          src="/expenses.png"
          alt="Gráfico das despesas"
          width={500}
          height={300}
          style={{ width: "500px", height: "300px" }}
        />
      )}
      <div className="w-full">
        <div className="flex flex-row justify-between max-w-[400px] w-full mx-auto mt-8">
          <CategoriesProgress />
        </div>
      </div>
    </div>
  );
}
