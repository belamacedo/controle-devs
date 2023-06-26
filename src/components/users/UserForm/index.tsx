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
  Options,
  Tooltip,
  toast,
  MultiSelect,
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
  id?: number;
  user?: User;
}

export const UserForm = ({ user, id }: Props) => {
  const router = useRouter();
  const [squads, setSquads] = useState<Options[]>([]);
  const [skills, setSkills] = useState<Options[]>([]);
  const [squadInfo, setSquadInfo] = useState<SquadInfo[]>([]);
  const [key, setKey] = useState<number>(+new Date());

  const formSchema = z.object({
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
    jobPosition: z
      .string()
      .min(2, {
        message: "A descrição deve ter pelo menos 2 caracteres..",
      })
      .nonempty("O nome é obrigatório"),
    hardSkills: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .refine((skills) => skills.length > 0, {
        message: "Selecione pelo menos uma habilidade",
      }),
    squadName: z.string().nonempty("Selecione a squad"),
    bio: z.optional(z.string()),
    inactiveUser: z.optional(z.boolean()),
    imagePath: z.custom<File | null>(),
  });

  console.log(user);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: user || {
      imagePath: null,
      inactiveUser: false,
      bio: "",
      fullName: "",
      email: "",
      jobPosition: "",
      hardSkills: [],
      squadName: "",
    },
  });

  const handleImageChange = (file: File) => {
    form.setValue("imagePath", file);
  };

  const handleRemoveImage = () => {
    form.setValue("imagePath", null);
  };

  const onChangeHardSkills = (newValue: { value: string; label: string }[]) => {
    form.setValue("hardSkills", newValue, { shouldValidate: true });
  };

  const handleClearFields = () => {
    form.reset();
  };

  const handleSquad = (value: string) => {
    const squad = squadInfo.filter((squad) => squad.squadName === value);
    return squad[0];
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (id) {
        console.log("entrou");
        await updateUserMutation(id, {
          ...values,
        });

        toast.success({
          title: "Sucesso!",
          description: "Dados do usuário alterados com sucesso",
        });

        router.push("/");
      } else {
        await addNewUserMutation(handleSquad(values.squadName), {
          ...values,
        });

        toast.success({
          title: "Sucesso!",
          description: "Usuário cadastrado com sucesso",
        });
      }

      handleClearFields();
      setKey(+new Date());
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);

      toast.error({
        title: "Erro!",
        description: "Erro ao cadastrar usuário",
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
                        accept="image/*"
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
                name="bio"
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
                      <Input placeholder="E-mail" {...field} />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobPosition"
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
                name="squadName"
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
                          value: field.value || undefined,
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
                        options={skills}
                        placeholder="Selecione as opções..."
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        onChange={(value) =>
                          onChangeHardSkills(
                            value as { label: string; value: string }[]
                          )
                        }
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                text="Cadastrar"
                disabled={form.formState.isSubmitting}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
