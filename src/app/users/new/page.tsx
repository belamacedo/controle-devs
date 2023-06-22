import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { UserForm } from "@/app/components/UserForm";
import Link from "next/link";

import * as Styles from "./styles";

export default function NewUser() {
  return (
    <div className={Styles.container()}>
      <Link href="/" className={Styles.backContent()}>
        <ArrowLeftIcon className={Styles.arrowIcon()} />
        Voltar
      </Link>
      <h1 className={Styles.title()}>Cadastrar usuário</h1>
      <UserForm />
    </div>
  );
}
