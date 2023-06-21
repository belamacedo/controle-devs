"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { EditUserForm } from "../../components/EditUserForm";
import { Spinner } from "@/app/components/Spinner";
import * as Styles from "./styles";
import { getUserIdQuery } from "@/services/user/user-service";
import { toast } from "@controle-devs-ui/react";
import { User } from "@/services/user/user";

interface Props {
  params: {
    id: number;
  };
}

export default function EditUser({ params }: Props) {
  const [user, setUser] = useState<User>();

  const getUser = useCallback(async () => {
    try {
      const data = await getUserIdQuery(params.id);

      setUser(data);
    } catch (error) {
      toast.error({
        title: "Erro!",
        description: "Erro ao obter os dados do usuário",
      });
    }
  }, [params.id]);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div className={Styles.container()}>
      <Link href="/" className={Styles.backContent()}>
        <ArrowLeftIcon className={Styles.arrowIcon()} />
        Voltar
      </Link>
      <h1 className={Styles.title()}>Alterar dados do usuário</h1>
      {user ? <EditUserForm user={user} /> : <Spinner />}
    </div>
  );
}
