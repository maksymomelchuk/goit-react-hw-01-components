import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      {stats && (
        <StatList>
          {stats.map(el => (
            <StatListItem key={el.id}>
              <Label>{el.label}</Label>
              <Percentage>{el.percentage}</Percentage>
            </StatListItem>
          ))}
        </StatList>
      )}
    </Section>
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
