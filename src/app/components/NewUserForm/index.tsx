"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  MultiSelect,
  Select,
  Switch,
} from "@controle-devs-ui/react";

import "@controle-devs-ui/react/dist/index.css";

import * as Styles from "./styles";

const skills = [
  { value: "1", label: "React Js" },
  { value: "2", label: "React Native" },
  { value: "3", label: "Angular" },
  { value: "4", label: "C#" },
];

const squad = [
  { value: "1", label: "Data Science" },
  { value: "2", label: "Frontend" },
  { value: "3", label: "Backend" },
];

export const NewUserForm = () => {
  const [output, setOutput] = useState("");
  const formSchema = z.object({
    username: z
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
    hardSkills: z.array(z.string()),
    squad: z.array(z.string()),
    biography: z.optional(z.string()),
    photo: z.optional(z.string()),
    inactiveUser: z.optional(z.boolean()),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      photo: "",
      inactiveUser: false,
      biography: "",
      username: "",
      email: "",
      description: "",
      hardSkills: [],
      squad: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setOutput(JSON.stringify(values, null, 2));
  }

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
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.photo()}>
                      Adicione uma foto:
                    </FormLabel>
                    <FormControl>
                      <ImageUpload {...field} />
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
                          asChild: false,
                          defaultChecked: false,
                          checked: false,
                          onCheckedChange: () => {},
                          disabled: false,
                          required: false,
                          name: "",
                          value: "",
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
                    <FormLabel className={Styles.biography()}>
                      Biografia:
                    </FormLabel>
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={Styles.userName()}>
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
                    <FormLabel className={Styles.email()}>E-mail:</FormLabel>
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
                    <FormLabel className={Styles.description()}>
                      Descrição:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Descrição" {...field} />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hardSkills"
                render={() => (
                  <FormItem>
                    <FormLabel className={Styles.hardSkills()}>
                      Habilidades:
                    </FormLabel>
                    <FormControl>
                      <MultiSelect
                        checkbox={true}
                        select={{
                          options: skills,
                          placeholder: "Selecione as opções",
                        }}
                        onChange={() => {}}
                      />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="squad"
                render={() => (
                  <FormItem>
                    <FormLabel className={Styles.squad()}>Squad:</FormLabel>
                    <FormControl>
                      <Select
                        placeholder="Selecione a squad"
                        descriptiveTextForAccessibility="select com opções de squad"
                        options={squad}
                      />
                    </FormControl>
                    <FormMessage className={Styles.message()} />
                  </FormItem>
                )}
              />
              <Button type="submit" text="Enviar" />
            </div>
          </div>
        </form>

        <pre className="dark:text-white">{output}</pre>
      </Form>
    </div>
  );
};
