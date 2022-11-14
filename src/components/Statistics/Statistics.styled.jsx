import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebecf0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const Title = styled.h2`
  line-height: 1.5;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: #ebecf0;

  &:nth-of-type(2n) {
    background-color: #a5a5b7;
  }
`;

export const Label = styled.span`
  font-weight: 300;
`;

export const Percentage = styled.span`
  font-weight: 600;
`;
