import React, { useState, useEffect } from 'react';
import { Card } from '@/app/components/Card';
import { Button, Filter, Input } from '@controle-devs-ui/react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

interface UserInfo {
  id: number;
  imagePath: string;
  fullName: string;
  hardSkills: string[];
  bio: string;
}

const MAX_CARDS = 6;

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<UserInfo[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const handleCardDelete = (id: number) => {
    // Remove o card da tela
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);

    // Envia a requisição de exclusão para o json-server
    axios
      .delete(`http://localhost:3001/users/${id}`)
      .then((response) => {
        console.log('Card excluído com sucesso!');
      })
      .catch((error) => {
        console.log('Ocorreu um erro ao excluir o card:', error);
      });
  };

  const filteredData =
    data &&
    data.filter((item) => {
      const fullNameMatch = item.fullName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const hardSkillsMatch = item.hardSkills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const bioMatch = item.bio
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return fullNameMatch || bioMatch || hardSkillsMatch;
    });

  const visibleData = showAll ? filteredData : filteredData.slice(0, MAX_CARDS);
  const loadingIndicator = data.length === 0 ? <div>Carregando...</div> : null;

  const hardSkillsOptions = [
    ...new Set(data.flatMap((item) => item.hardSkills)),
  ].map((skill) => ({
    value: skill,
    label: skill,
  }));

  const filterOptions = [
    {
      label: 'HardSkills',
      options: hardSkillsOptions,
    },
  ];

  return (
    <div className='mt-4'>
      <div className='flex items-center justify-center mb-4'>
        <div className='relative flex items-center mr-4'>
          <Input
            type='text'
            placeholder='Pesquisar'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className='absolute right-3 text-gray-500' />
        </div>
        <Filter
          filterOptions={filterOptions}
          items={data.map((item) => item.fullName)}
          onFilter={() => console.log('onFilter')}
          buttonText='Filtrar'
        />
      </div>
      <div className='flex flex-wrap justify-center mb-4 space-x-4 space-y-4 list-container'>
        {loadingIndicator}
        {filteredData &&
          visibleData.map((item) => (
            <Card
              moreDetails={true}
              key={item.id}
              title={item.fullName}
              image={item.imagePath}
              skills={item.hardSkills}
              onClick={() => console.log('onClick')}
              onChange={() => console.log('onChange')}
              onDelete={() => handleCardDelete(item.id)}
            >
              {item.bio}
            </Card>
          ))}
      </div>
      {!showAll && filteredData.length > MAX_CARDS && (
        <div className='flex justify-center mt-4 mb-4'>
          <Button text='Ver mais' onClick={handleShowAll} />
        </div>
      )}
      {showAll && (
        <div className='flex justify-center mt-4 mb-4'>
          <Button text='Ver menos' onClick={handleShowLess} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
