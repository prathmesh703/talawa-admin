import React from 'react';
import aboutImg from 'assets/images/defaultImg.png';
import styles from './OrganizationCard.module.css';

interface InterfaceOrganizationCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

function organizationCard(props: InterfaceOrganizationCardProps): JSX.Element {
  const imageUrl = props.image ? props.image : aboutImg;

  return (
    <div className={styles.mainContainer}>
      <img src={imageUrl} width="100px" height="auto" />
      <div className={styles.organizationDetails}>
        <b>{props.name}</b>
        <span>{props.description}</span>
      </div>
    </div>
  );
}

export default organizationCard;
