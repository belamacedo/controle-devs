import { Input } from '@controle-devs-ui/react';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as Styles from './styles'

export interface SearchInputProps {
  placeholder: string;
  width?: string;
  borderColor?: string;
  onChange: (value: string) => void;
}

const SearchInput = ({
  placeholder,
  onChange,
  width,
  borderColor,
}: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onChange(value);
  };

  

  return (
    <div className={Styles.container()}>
      <Input
        type='text'
        className={`${Styles.inputStyles()} border-${borderColor} w-${width}`}
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
      />
      <FaSearch className={Styles.icon()} />
    </div>
  );
};

export default SearchInput;
