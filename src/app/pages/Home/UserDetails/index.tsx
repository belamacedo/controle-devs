import React from 'react';
import { UserProps } from '@/app/models/User';
import * as Styles from './styles';

interface Props {
  userDetails: UserProps;
}

export const UserDetails = ({ userDetails }: Props) => {
  return (
    <div className={Styles.userDetailsContainer()}>
      <div className={Styles.columnOneContainer()}>
        <div className={Styles.columnOneContent()}>
          <div className={Styles.imageContainer()}>
            <img
              src={userDetails.imagePath}
              alt={userDetails.fullName}
              className={Styles.image()}
            />
          </div>
          <div className={Styles.nameJobContainer()}>
            <h3 className={Styles.fullName()}>{userDetails.fullName}</h3>
            <p className={Styles.jobPosition()}>{userDetails.jobPosition}</p>
          </div>
          <div className={Styles.bioContainer()}>
            <p className={Styles.bioText()}>{userDetails.bio}</p>
          </div>
        </div>
      </div>
      <div className={Styles.columnTwoContainer()}>
        <div className={Styles.squadContainer()}>
          <div className={Styles.squadContent()}>
            <h4 className={Styles.squad()}>Squad</h4>
            <div className={Styles.squadSpecsContent()}>
              <p className={Styles.name()}>
                <span className={Styles.textSpan()}>Nome:</span>{' '}
                {userDetails.squad?.squadName}
              </p>
              <p className={Styles.leader()}>
                <span className={Styles.textSpan()}>Líder:</span>{' '}
                {userDetails.squad?.squadLeaderName}
              </p>
            </div>
          </div>
          <div className={Styles.squadMemberContainer()}>
            <h4 className={Styles.membersText()}>Membros da Equipe</h4>
            <div className={Styles.memberNamesContainer()}>
              {userDetails.squad?.squadMembers.map((member, index) => (
                <div key={index} className={Styles.memberNames()}>
                  {member}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={Styles.hardSkillsContainer()}>
          <h4 className={Styles.hardSkillsText()}>Hard Skills</h4>
          <div className={Styles.hardSkills()}>
            {userDetails.hardSkills.map((skill, index) => (
              <div key={index} className={Styles.hardSkillsItems()}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
