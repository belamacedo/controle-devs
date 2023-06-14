"use client";
import React, { useEffect, useState } from "react";
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
} from "@controle-devs-ui/react";

import "@controle-devs-ui/react/dist/index.css";

import { squadQuery } from "@/services/squad/squad-service";
import { squadInfoQuery } from "@/services/squadInfo/squadInfo-service";

import * as Styles from "./styles";
import { skillsQuery } from "@/services/skills/skills-service";
import { newUserQuery } from "@/services/user/user-service";
import { SquadInfo } from "@/services/squadInfo/squadInfo";

export const NewUserForm = () => {
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
    imagePath: z.custom<File | null>(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    return squadInfo.filter((squad) => squad.squadName === value);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await newUserQuery({
        ...values,
        imagePath: values.imagePath !== null ? generateRandomImage() : null,
        squad: handleSquad(values.squad),
      });

      handleClearFields();
      setKey(+new Date());
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  const loadSquad = async () => {
    try {
      const data = await squadQuery();

      setSquads(data);
    } catch (error) {
      console.error("Erro ao carregar as squad:", error);
    }
  };

  const loadSkills = async () => {
    try {
      const data = await skillsQuery();

      setSkills(data);
    } catch (error) {
      console.error("Erro ao carregar as habilidades:", error);
    }
  };

  const loadSquadInfo = async () => {
    try {
      const data = await squadInfoQuery();

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
                  <FormItem>
                    <FormControl>
                      <Switch
                        label=" O usuário está inativo? "
                        root={{
                          defaultChecked: field.value,
                          checked: field.value,
                          onCheckedChange: field.onChange,
                          disabled: false,
                          required: false,
                          name: "inactiveUser",
                          value: field.value,
                        }}
                        thumb={{ asChild: false }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
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
                      <Input placeholder="Nome completo" {...field} />
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
