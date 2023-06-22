"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { toast } from "@controle-devs-ui/react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { UserForm } from "@/app/components/users/UserForm";
import Layout from "@/app/components/users/Layout";
import { Spinner } from "@/app/components/Spinner";
import { getUserIdQuery } from "@/services/user/user-service";
import { User } from "@/services/user/user";
import * as Styles from "./styles";

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
    <Layout>
      <h1 className={Styles.title()}>Alterar dados do usuário</h1>
      {user ? <UserForm user={user} id={params.id} /> : <Spinner />}
    </Layout>
  );
}
