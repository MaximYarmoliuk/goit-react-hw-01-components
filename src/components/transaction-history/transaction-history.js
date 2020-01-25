import React from "react";
import propTypes from "prop-types";
import styles from "./transaction-history.module.css";

function Transaction({ items }) {
  return (
    <table className={styles.container}>
      <thead className={styles.head}>
        <tr className={styles.rowOfNames}>
          <th className={styles.name}>Type</th>
          <th className={styles.name}>Amount</th>
          <th className={styles.name}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        {items.map(item => (
          <tr key={item.id} className={styles.rowOfItems}>
            <td className={styles.item}>{item.type}</td>
            <td className={styles.item}>{item.amount}</td>
            <td className={styles.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired
};

export default Transaction;
