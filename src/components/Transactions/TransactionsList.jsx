import PropTypes from 'prop-types';
import TransactionsListItem from './TransactionsListItem';

export default function Transactions({ data }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, type, amount, currency }) => (
          <TransactionsListItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  data: PropTypes.array.isRequired,
};
