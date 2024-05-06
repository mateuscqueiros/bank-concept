import { cn } from "@/lib/utils";
import { CategoryType } from "../types";
import { getCategoryIcon, getCategoryItems } from "../lib";
import { Button, Progress } from "@/components/elements";
import { useModalStore } from "@/stores";
import { useTransactionStore } from "@/features/transactions";
import { useCategoryStore } from "../stores";

type CategoryProps = {
  totalExpenses: number;
  data: CategoryType;
};

function Category({ data, totalExpenses }: CategoryProps) {
  const openUpdate = useModalStore.use.openUpdate();

  const transactions = useTransactionStore.use.transactions();
  const icon = getCategoryIcon(data.icon);

  const categoryTransactions = getCategoryItems(data.id, transactions);
  const totalCategoryExpenses = categoryTransactions.reduce(
    (acc: any, transaction: any) => transaction.value + acc,
    0,
  );

  return (
    <div
      className={cn([
        `flex flex-row mb-3 cursor-pointer`,
        `text-${data.color}`,
      ])}
      onClick={() => openUpdate("updateCategory", data.id)}
    >
      {icon}
      <span className="ml-4 font-medium w-20 text-text">{data.name}</span>
      <span className="font-medium">
        {Math.round((totalCategoryExpenses / totalExpenses) * 100)} %
      </span>
    </div>
  );
}

export function CategoriesProgress({ className }: { className?: string }) {
  const transactions = useTransactionStore.use.transactions();
  const categories = useCategoryStore.use.categories();

  let totalExpenses = transactions.reduce(
    (acc, transaction) => transaction.value + acc,
    0,
  );
  let infoIteration = totalExpenses / 4;
  let accInfo = totalExpenses;

  const expensesCategories = categories.map((category) => (
    <Category
      key={`category-item-${category.id}`}
      totalExpenses={totalExpenses}
      data={category}
    />
  ));

  return (
    <div
      className={cn([
        "flex flex-col md:flex-row items-center w-full justify-between",
        className,
      ])}
    >
      {transactions.length > 0 && (
        <>
          <div className="flex flex-row relative">
            <div className="flex flex-col justify-between text-sm h-full mr-10">
              {Array(4)
                .fill(0)
                .map((_) => {
                  const displayInfo = accInfo + infoIteration;
                  accInfo -= infoIteration;
                  return (
                    <span key={`info-item-${displayInfo}`}>
                      R$ {Math.ceil(displayInfo / 10) * 10}
                    </span>
                  );
                })}
              <span>R$ {Math.ceil(infoIteration / 10) * 10}</span>
              <span>R$ 0</span>
            </div>
            <Progress categories={categories} />
          </div>
          <div className="flex flex-col items-center justify-between h-fit">
            {expensesCategories}
            <Button className="mt-5">Imprimir</Button>
          </div>
        </>
      )}
      {transactions.length === 0 && (
        <div className="flex flex-col w-full items-center">Sem transações</div>
      )}
    </div>
  );
}
