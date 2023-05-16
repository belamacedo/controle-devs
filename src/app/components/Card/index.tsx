'use client';
import React, { ReactNode } from 'react';
import * as Styles from './styles';

interface Props {
  title: string;
  children: ReactNode;
}
const Card = ({ title, children }: Props) => (
  <div className={Styles.width()}>
    <div className={Styles.padding()}>
      <div className={Styles.title()}>{title}</div>
      <div className={Styles.children()}>{children}</div>
    </div>
  </div>
);

export default Card;
