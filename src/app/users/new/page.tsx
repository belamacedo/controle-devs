import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { UserForm } from "@/app/components/users/UserForm";
import Layout from "@/app/components/users/Layout";
import Link from "next/link";

import * as Styles from "./styles";

export default function NewUser() {
  return (
    <Layout>
      <h1 className={Styles.title()}>Cadastrar usuário</h1>
      <UserForm />
    </Layout>
  );
}
