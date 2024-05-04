"use client";

import { CategoryType, getCategoryItems } from "@/features/categories";
import { TransactionType } from "@/features/transactions";
import { useTransactionStore } from "@/stores";
import { useLayoutEffect, useRef, useState } from "react";

type ProgressProps = {
  categories: CategoryType[];
};

export function Progress({ categories }: ProgressProps) {
  let accSectionsHeight = 0;
  const transactions = useTransactionStore.use.transactions();

  const totalExpenses = transactions.reduce(
    (acc: number, item: TransactionType) => acc + item.value,
    0,
  );

  const ref = useRef<HTMLHeadingElement>(null);
  let [parentHeight, setParentHeight] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setParentHeight(ref.current ? ref.current.offsetHeight : 0);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const sections = categories.map((category, index) => {
    const categoryTransactions = getCategoryItems(category.id, transactions);
    const totalCategoryExpenses = categoryTransactions.reduce(
      (acc: number, transaction: TransactionType) => acc + transaction.value,
      0,
    );

    const height =
      (totalCategoryExpenses / totalExpenses) * parentHeight +
      accSectionsHeight;
    const backgroundColor = `var(-${category.color.replace("text", "")})`;
    const zIndex = categories.length - index - 1;

    accSectionsHeight += (totalCategoryExpenses / totalExpenses) * parentHeight;
    return (
      <div
        key={`section-item-${category.name}`}
        style={{ height, backgroundColor, zIndex }}
        className={`absolute bottom-0 w-full rounded-full`}
      ></div>
    );
  });

  return (
    <div
      ref={ref}
      style={{ backgroundColor: "#DDD" }}
      className={"relative min-h-[100px] w-2 rounded-full"}
    >
      {sections}
    </div>
  );
}
