import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistoryListItem = ({ items }) => {
  return (
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  );
};

TransactionHistoryListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistoryListItem;
