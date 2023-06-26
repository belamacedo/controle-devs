import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Modal, SearchInput } from "@controle-devs-ui/react";
import {
  deleteUserMutation,
  getUsersQuery,
} from "@/services/user/user-service";

import { UserProps } from "@/app/models/User";

import { UserCard } from "@/app/components/UserCard";
import { Spinner } from "@/app/components/Spinner";

import { UserDetails } from "./UserDetails";
import * as Styles from "./styles";

const MAX_CARDS = 6;

const HomePage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<UserProps[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProps>();

  useEffect(() => {
    getUsersQuery()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleModalOpen = (user: UserProps) => {
    setIsModalOpen(true);
    setSelectedUser(user);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const handleUpdateUser = (id: number) => {
    router.push(`/users/edit/${id}`);
  };

  const handleCardDelete = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);

    deleteUserMutation(id)
      .then((response) => {
        console.log("Card excluído com sucesso!");
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao excluir o card:", error);
      });
  };

  const filteredData =
    data &&
    data.filter((item) => {
      const fullNameMatch = item.fullName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const hardSkillsMatch = item.hardSkills.some((skill) =>
        skill.value?.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return fullNameMatch || hardSkillsMatch;
    });

  const visibleData = showAll ? filteredData : filteredData.slice(0, MAX_CARDS);

  const getCardClassName = (index: number) => {
    return index === 0 ? "mt-4" : "";
  };

  const loadingIndicator =
    data.length === 0 ? (
      <div>
        <Spinner />
      </div>
    ) : null;

  return (
    <>
      <div className={Styles.homeContainer()}>
        <div className={Styles.inputContainer()}>
          <SearchInput
            placeholder={"Pesquisar"}
            onChange={(value) => setSearchQuery(value)}
          />
        </div>
        <div className={Styles.cardContainer()}>
          {loadingIndicator}
          {filteredData &&
            visibleData.map((user, index) => (
              <UserCard
                moreDetails={true}
                key={user.id}
                user={{
                  id: user.id,
                  fullName: user.fullName,
                  jobPosition: user.jobPosition,
                  imagePath: user.imagePath,
                  hardSkills: user.hardSkills,
                }}
                onClick={() => handleModalOpen(user)}
                onChange={() => handleUpdateUser(user.id)}
                onDelete={() => handleCardDelete(user.id)}
                className={getCardClassName(index)}
              />
            ))}
        </div>
        {!showAll && filteredData.length > MAX_CARDS ? (
          <div className={Styles.button()}>
            <Button text="Ver mais" onClick={handleShowAll} />
          </div>
        ) : showAll && filteredData.length > MAX_CARDS ? (
          <div className={Styles.button()}>
            <Button text="Ver menos" onClick={handleShowLess} />
          </div>
        ) : null}
      </div>
      <Modal buttonText="Voltar" open={isModalOpen} onClose={handleModalClose}>
        {selectedUser && <UserDetails userDetails={selectedUser} />}
      </Modal>
    </>
  );
};

export default HomePage;
