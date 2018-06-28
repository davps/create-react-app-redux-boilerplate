import { ADD_ITEM, addItem } from '../actions/actions';
import reducer from './reducer';

describe(ADD_ITEM, () => {
  let initialState;
  let stateA;
  let stateB;
  let stateC;
  beforeEach(() => {
    initialState = reducer(undefined, {});
    stateA = reducer(initialState, addItem('Item 1'));
    stateB = reducer(stateA, addItem('Item 2'));
    stateC = reducer(stateB, addItem('Item 3'));
  });
  it('initial state', () => {
    expect(initialState).not.toBeNull();
    expect(initialState).toBeDefined();
    expect(initialState.items).toBeDefined();
    expect(initialState.items.length).toBe(0);
  });
  it('after 3 additions', () => {
    expect(stateC.items.length).toBe(3);
  });
});
