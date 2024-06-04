import { Modal } from "@/components/elements/Modal";
import { useUser } from "@/features/auth";
import { uuid } from "@/lib/utils";
import { useModalStore } from "@/stores";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCreateTransaction } from "../../api";
import { TransactionFormType } from "../../types";
import { DefaultTransactionForm } from "../Form";

export function CreateTransactionModal() {
  const thisModalName = "createTransaction";
  const createTransaction = useCreateTransaction();
  const close = useModalStore.use.close();
  const { data: user } = useUser();
  const router = useRouter();

  const onSubmit = (values: TransactionFormType) => {
    if (user) {
      const data = { id: uuid(), ...values, userId: user.id };
      createTransaction.mutate({ data });
      close(thisModalName);
    } else {
      toast("Você não está logado", {
        action: {
          label: "Ir para login",
          onClick: () => router.push("/login"),
        },
      });
    }
  };

  return (
    <Modal title="Transação" name={thisModalName}>
      <DefaultTransactionForm onSubmit={onSubmit} />
    </Modal>
  );
}
