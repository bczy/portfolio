import React from 'react';
import i18n from '../i18n';

function Card(){
    return (
      <div style={styles.card}>
          <ul style={styles.card.text}>
            <li>{i18n.t('idCard.brief')}</li>
            <li>{i18n.t('idCard.skills')}</li>
            <li>{i18n.t('idCard.hobbies')}</li>
          </ul>
      </div>
    );
}
const styles = {
  card: {
    text: {
      'list-style-type': 'none',
      'font-size': '0.8em',
      'text-align': 'left'
    },
  },
  
};
export default Card;
