import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      {stats && (
        <ul className="stat-list">
          {stats.map(el => (
            <li className="item" key={el.id}>
              <span className="label">{el.label}</span>
              <span className="percentage">{el.percentage}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
