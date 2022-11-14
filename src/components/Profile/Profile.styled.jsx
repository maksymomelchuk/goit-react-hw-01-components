import styled from '@emotion/styled';

export const Card = styled.div`
  margin: 50px auto 100px;
  width: 250px;
  border-radius: 2px;
  background-color: #ebecf0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: auto;
  border-radius: 50%;
  background-color: #ebf0f0;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #a5a8a8;
`;

export const Location = styled.p`
  font-weight: 500;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  background-color: #a5a5b8;
  padding: 20px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const StatsLabel = styled.span`
  font-weight: 300;
`;
export const StatsQuantity = styled.span`
  font-weight: 600;
`;
