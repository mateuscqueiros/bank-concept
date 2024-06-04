import { useUser } from "@/features/auth";
import Image from "next/image";
import Link from "next/link";

export function UserCard() {
  const { data: user } = useUser();
  return (
    <div className="flex flex-row justify-center items-center p-4">
      {user ? (
        <>
          <Image
            width={20}
            height={20}
            className="border-2 rounded-full h-[70px] w-[70px]"
            src="https://doodleipsum.com/700/avatar"
            alt="Usuário"
          />
          <h3 className="ml-5 text-lg font-bold">Mateus Queirós</h3>
        </>
      ) : (
        <Link href="/login" className="underline hover:text-slate-500">
          Faça login para continuar
        </Link>
      )}
    </div>
  );
}
