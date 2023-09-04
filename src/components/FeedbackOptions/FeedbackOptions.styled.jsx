import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
`;

export const FeedbackButton = styled.button`
  width: 150px;
  height: 44px;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  background-color: #b0cbfa;
  border: 1px solid #4134f9;
  border-radius: 4px;
  box-shadow: 2px 2px 2px -1px #4134f9;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
    background-color: #4134f9;
    box-shadow: 2px 2px 2px -1px black;
    color: white;
  }
`;
