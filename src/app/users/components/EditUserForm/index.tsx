"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  Button,
  ImageUpload,
  Select,
  Switch,
  useForm,
  MultiSelect,
  MultiValueProps,
  Options,
  Tooltip,
  toast,
} from "@controle-devs-ui/react";

import "@controle-devs-ui/react/dist/index.css";

import { getSquadQuery } from "@/services/squad/squad-service";
import { getSquadInfoQuery } from "@/services/squadInfo/squadInfo-service";

import * as Styles from "./styles";
import { getSkillsQuery } from "@/services/skills/skills-service";
import {
  addNewUserMutation,
  updateUserMutation,
} from "@/services/user/user-service";
import { SquadInfo } from "@/services/squadInfo/squadInfo";
import { User } from "@/services/user/user";

interface Props {
  user: User;
}

export const EditUserForm = ({ user }: Props) => {
  const router = useRouter();

  const [squads, setSquads] = useState<Options[]>([]);
  const [skills, setSkills] = useState<Options[]>([]);
  const [squadInfo, setSquadInfo] = useState<SquadInfo[]>([]);
  const [key, setKey] = useState<number>(+new Date());
  console.log(user);
  const formSchema = z.object({
    id: z.number(),
    fullName: z
      .string()
      .min(2, {
        message: "O nome de usuário deve ter pelo menos 2 caracteres..",
      })
      .nonempty("O nome é obrigatório"),
    email: z
      .string()
      .email("Formato de e-mail inválido")
      .toLowerCase()
      .nonempty("O e-mail é obrigatório"),
    description: z
      .string()
      .min(2, {
        message: "A descrição deve ter pelo menos 2 caracteres..",
      })
      .nonempty("O nome é obrigatório"),
    hardSkills: z.array(z.string()).refine((skills) => skills.length > 0, {
      message: "Selecione pelo menos uma habilidade",
    }),
    squad: z.string().nonempty("Selecione a squad"),
    biography: z.optional(z.string()),
    inactiveUser: z.optional(z.boolean()),
    imagePath: z.custom<File | string | null | undefined>(),
  });

  const updatedUser: z.infer<typeof formSchema> = {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    squad: user.squad.squadName,
    description: user.description,
    hardSkills: user.hardSkills,
    imagePath: user.imagePath,
    biography: user.biography,
    inactiveUser: user.inactiveUser,
  };

  console.log(updatedUser);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: user
      ? updatedUser
      : {
          imagePath: null,
          inactiveUser: false,
          biography: "",
          fullName: "",
          email: "",
          description: "",
          hardSkills: [],
          squad: "",
        },
  });

  const handleImageChange = (file: File) => {
    form.setValue("imagePath", file);
  };

  const handleRemoveImage = () => {
    form.setValue("imagePath", null);
  };
  const onChangeHardSkills = (selectedOptions: MultiValueProps) => {
    const options = selectedOptions.map((option) => option.label);
    form.setValue("hardSkills", options);
  };

  const handleClearFields = () => {
    form.reset();
  };

  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * 100) + 1;
    return `https://randomuser.me/api/portraits/women/${randomIndex}.jpg`;
  };

  const handleSquad = (value: string) => {
    const squad = squadInfo.filter((squad) => squad.squadName === value);
    return squad[0];
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (user) {
        await updateUserMutation(user.id, {
          ...values,
          imagePath: values.imagePath !== null ? generateRandomImage() : null,
          squad: handleSquad(values.squad),
        });

        router.push("/");
      } else {
        await addNewUserMutation({
          ...values,
          imagePath: values.imagePath !== null ? generateRandomImage() : null,
          squad: handleSquad(values.squad),
        });
      }

      handleClearFields();
      setKey(+new Date());
      toast.success({
        title: "Sucesso!",
        description: user
          ? "Dados do usuário alterados"
          : "Usuário cadastrado com sucesso",
      });
    } catch (error) {
      console.error("Erro ao salvar:", error);

      toast.error({
        title: "Erro!",
        description: user
          ? "Erro ao Alterar dados do usuário"
          : "Erro ao cadastrar usuário",
      });
    }
  }

  const loadSquad = async () => {
    try {
      const data = await getSquadQuery();

      setSquads(data);
    } catch (error) {
      console.error("Erro ao carregar as squad:", error);
    }
  };

  const loadSkills = async () => {
    try {
      const data = await getSkillsQuery();

      setSkills(data);
    } catch (error) {
      console.error("Erro ao carregar as habilidades:", error);
    }
  };

  const loadSquadInfo = async () => {
    try {
      const data = await getSquadInfoQuery();

      setSquadInfo(data);
    } catch (error) {
      console.error("Erro ao carregar as informações das squads:", error);
    }
  };

  useEffect(() => {
    loadSquad();
    loadSkills();
    loadSquadInfo();
  }, []);

  return (
    <div className={Styles.container()}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={Styles.formContainer()}
        >
          <div className={Styles.formContent()}>
            <div className={Styles.contentLeftFields()}>
              <FormField
                name="imagePath"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.photo()}>
                      Adicione uma foto:
                    </FormLabel>
                    <FormControl>
                      <ImageUpload
                        key={key}
                        {...field}
                        onChange={handleImageChange}
                        onRemove={handleRemoveImage}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="inactiveUser"
                render={({ field }) => (
                  <Tooltip
                    message=" Usuários que estão de férias, licença ou que foram desligados."
                    content={{ sideOffset: 5 }}
                  >
                    <FormItem>
                      <FormControl>
                        <Switch
                          label=" O usuário está inativo? "
                          root={{
                            checked: field.value,
                            onCheckedChange: field.onChange,
                            name: "inactiveUser",
                            value: field.value,
                          }}
                          thumb={{ asChild: false }}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className={Styles.message()} />
                    </FormItem>
                  </Tooltip>
                )}
              />
            </div>

            <div className={Styles.contentRightFields()}>
              <FormField
                name="biography"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.label()}>Biografia:</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        className={Styles.biographyInput()}
                        value={field.value}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.label()}>
                      Nome completo:
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nome completo"
                        {...field}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.label()}>E-mail:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="E-mail"
                        {...field}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.label()}>Descrição:</FormLabel>
                    <FormControl>
                      <Input placeholder="Descrição" {...field} />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="squad"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.label()}>Squad:</FormLabel>
                    <FormControl>
                      <Select
                        key={key}
                        {...field}
                        descriptiveTextForAccessibility="select com opções de squad"
                        placeholder="Selecione a squad..."
                        options={squads}
                        root={{
                          onValueChange: field.onChange,
                          defaultValue: field.value,
                        }}
                      />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hardSkills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.label()}>
                      Habilidades:
                    </FormLabel>
                    <FormControl>
                      <MultiSelect
                        key={key}
                        {...field}
                        checkbox={true}
                        select={{
                          options: skills,
                          placeholder: "Selecione as opções...",
                          closeMenuOnSelect: false,
                          hideSelectedOptions: false,
                          isSearchable: true,
                        }}
                        onChange={onChangeHardSkills}
                      />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                text={user ? "Alterar" : "Cadastrar"}
                disabled={form.formState.isSubmitting}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
