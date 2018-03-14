import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/MenuItemStyles.css';

const MenuItem = (props) => {
  const { item } = props;
  return (
    <div className={styles.menuItemBox}>
      <span className={styles.itemName}>{item.foodItem}</span>
      <span className={styles.itemCost}>{item.cost}</span>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    foodItem: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
