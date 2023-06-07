import React from "react";

import { Button } from "@/app/components/Button";

import Link from "next/link";

const AddUser = () => {
  return (
    <Link href="/users/new">
      <Button text="Adicionar usuário" />
    </Link>
  );
};

export default AddUser;
