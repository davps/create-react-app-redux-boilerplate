import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import initialState from '../store/initialState';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  padding-left: 20px;
  padding-right: 20px;
  border: 0;
`;

const Button = styled.button`
  width: 100px;
`;

const Basic = ({ items, onClick }) => (
  <Container>
    <Button type="button" className="my-button" onClick={onClick}>
      Add item
    </Button>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
  </Container>
);

Basic.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired
};

Basic.defaultProps = {
  items: initialState.items
};

export default Basic;
