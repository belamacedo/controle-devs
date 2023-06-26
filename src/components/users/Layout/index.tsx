import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import * as Styles from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={Styles.container()}>
      <Link href="/" className={Styles.backContent()}>
        <ArrowLeftIcon className={Styles.arrowIcon()} />
        Voltar
      </Link>
      {children}
    </div>
  );
}
