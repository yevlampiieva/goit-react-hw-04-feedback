import PropTypes from 'prop-types';
import { StatisticsBox, StatisticsItem, Value } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsBox>
      <StatisticsItem>
        Good: <Value>{good}</Value>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <Value>{neutral}</Value>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <Value>{bad}</Value>
      </StatisticsItem>
      <StatisticsItem>
        Total: <Value>{total}</Value>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: <Value>{positivePercentage}%</Value>
      </StatisticsItem>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
