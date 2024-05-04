import { z } from "zod";

export type TransactionType = {
  id: string;
  name: string;
  value: number;
  date: Date;
  categoryId: number;
  paymentType: number;
};

export const transactionSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  value: z.number({ message: 'Digite um valor válido' }).gte(1, { message: 'O valor deve ser maior que zero' }),
  date: z.date({
    errorMap: (issue, { defaultError }) => ({
      message: issue.code === "invalid_date" ? "Insira uma data válida" : defaultError,
    }),
  }),
  categoryId: z.number({ message: 'A categoria é obrigatória' }),
  paymentType: z.number({ message: 'O tipo é obrigatório' })
}).required();

export type TransactionFormType = z.infer<typeof transactionSchema>;
