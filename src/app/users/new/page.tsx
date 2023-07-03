import Layout from "@/components/users/Layout";
import { UserForm } from "@/components/users/UserForm";
import * as Styles from "./styles";

export default function NewUser() {
  return (
    <Layout>
      <h1 className={Styles.title()}>Cadastrar usuário</h1>
      <UserForm />
    </Layout>
  );
}
