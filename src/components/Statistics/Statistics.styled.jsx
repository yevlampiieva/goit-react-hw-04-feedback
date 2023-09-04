import styled from 'styled-components';

export const StatisticsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StatisticsItem = styled.p`
  width: 100px;
  padding: 15px;
  border: 1px solid #4134f9;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

export const Value = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #4134f9;
  margin: 12px 0 0 0;
`;
