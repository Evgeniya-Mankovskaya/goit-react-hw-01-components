import style from "./TransactionHistory.module.css";
import TransactionItem from "./TransactionItem";

function TransactionHistory({ transactions }) {
  return (
    <table className={style.transactionTable}>
      <thead>
        <tr className={style.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <TransactionItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
