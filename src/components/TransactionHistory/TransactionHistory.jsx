import React from 'react';
import s from './TransactionHistory.module.css';
import TransactionHistoryListItem from './TransactionHistoryListItem/TransactionHistoryListItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransactionHistoryListItem items={items} />
    </table>
  );
};

export default TransactionHistory;
