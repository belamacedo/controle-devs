import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, SearchInput } from '@controle-devs-ui/react';
import { deleteUser, getUsers } from '@/services/user/user-service';
import { Card } from '@/app/components/Card';
import { UserProps } from '@/app/models/User';
import * as Styles from './styles';

const MAX_CARDS = 6;

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<UserProps[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const handleCardDelete = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);

    deleteUser(id)
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

      return fullNameMatch || hardSkillsMatch;
    });

  const visibleData = showAll ? filteredData : filteredData.slice(0, MAX_CARDS);

  const getCardClassName = (index: number) => {
    return index === 0 ? 'mt-4' : '';
  };

  const loadingIndicator = data.length === 0 ? <div>Carregando...</div> : null;

  return (
    <div className={Styles.homeContainer()}>
      <div className={Styles.inputContainer()}>
        <SearchInput
          placeholder={'Pesquisar'}
          onChange={(value) => setSearchQuery(value)}
        />
      </div>
      <div className={Styles.cardContainer()}>
        {loadingIndicator}
        {filteredData &&
          visibleData.map((item, index) => (
            <Card
              moreDetails={true}
              key={item.id}
              user={{
                id: item.id,
                fullName: item.fullName,
                jobPosition: item.jobPosition,
                imagePath: item.imagePath,
                hardSkills: item.hardSkills,
              }}
              onClick={() => console.log('onClick')}
              onChange={() => console.log('onChange')}
              onDelete={() => handleCardDelete(item.id)}
              className={getCardClassName(index)}
            />
          ))}
      </div>
      {!showAll && filteredData.length > MAX_CARDS ? (
        <div className={Styles.button()}>
          <Button text='Ver mais' onClick={handleShowAll} />
        </div>
      ) : showAll && filteredData.length > MAX_CARDS ? (
        <div className={Styles.button()}>
          <Button text='Ver menos' onClick={handleShowLess} />
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
