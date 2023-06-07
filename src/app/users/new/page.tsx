import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { NewUserForm } from "@/app/components/NewUserForm";
import Link from "next/link";

export default function NewUser() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-xl leading-relaxed text-gray-800 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
      >
        <ArrowLeftIcon className="h-6 w-6" />
        Voltar
      </Link>
      <NewUserForm />
    </div>
  );
}
