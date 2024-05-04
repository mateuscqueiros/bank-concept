import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormItem, inputStyles } from "@/components/form";
import { Button } from "@/components/elements";
import { DEFAULT_CATEGORY_FORM_VALUES } from "@/values/data";
import { CategoryFormType, categorySchema } from "../types";

type DefaultCategoryFormProps = {
  defaultValues?: CategoryFormType;
  onSubmit: (values: CategoryFormType) => void;
};

export function DefaultCategoryForm({
  defaultValues,
  onSubmit,
}: DefaultCategoryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CategoryFormType>({
    resolver: zodResolver(categorySchema),
    defaultValues: defaultValues || DEFAULT_CATEGORY_FORM_VALUES,
  });
  return (
    <form
      onSubmit={handleSubmit((values) => {
        reset();
        onSubmit(values);
      })}
      className="pt-5 flex flex-col justify-between h-full"
    >
      <FormItem label="Nome" error={errors.name}>
        <input type="text" className={inputStyles} {...register("name")} />
      </FormItem>
      <Button className="btn-primary w-full" type="submit">
        Salvar
      </Button>
    </form>
  );
}
