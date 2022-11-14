import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 100px 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 200px;
  padding: 10px;
  background-color: #ebecf0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.children ? `green` : `red`)};
`;

export const Image = styled.img`
  width: 50px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
