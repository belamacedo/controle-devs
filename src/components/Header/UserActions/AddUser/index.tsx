import React from "react";

import { Button } from "@controle-devs-ui/react";

import Link from "next/link";

const AddUser = () => {
  return (
    <Link href="/users/new">
      <Button text="Adicionar usuário" />
    </Link>
  );
};

export default AddUser;
