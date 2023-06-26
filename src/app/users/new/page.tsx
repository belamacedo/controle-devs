import Layout from "@/components/users/Layout";
import * as Styles from "./styles";
import { UserForm } from "@/components/users/UserForm";

export default function NewUser() {
  return (
    <Layout>
      <h1 className={Styles.title()}>Cadastrar usuário</h1>
      <UserForm />
    </Layout>
  );
}
