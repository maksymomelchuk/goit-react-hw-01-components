import PropTypes from 'prop-types';
import TransactionsListItem from './TransactionsListItem';
import { Table, TableHead } from './Transactions.styled';

export default function Transactions({ data }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
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
    </Table>
  );
}

Transactions.propTypes = {
  data: PropTypes.array.isRequired,
};
