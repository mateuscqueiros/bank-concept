import { z } from "zod";

export type TransactionType = {
  id: string;
  name: string;
  value: number;
  date: Date;
  categoryId: number;
  type: string;
};

export const transactionSchema = z.object({
  title: z.string().min(1, { message: 'O título é obrigatório' }),
  value: z.number({ message: 'Digite um valor válido' }).gte(1, { message: 'O valor é obrigatório' }),
  date: z.coerce.date({
    errorMap: (issue, { defaultError }) => ({
      message: issue.code === "invalid_date" ? "Insira uma data válida" : defaultError,
    }),
  }),
  categoryId: z.number({ message: 'A categoria é obrigatória' }),
  type: z.number({ message: 'O tipo é obrigatório' })
}).required();

export type TransactionFormType = z.infer<typeof transactionSchema>;
