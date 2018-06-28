import store from './store';
import initialState from './initialState';
import { addItem } from '../actions/actions';

it('verify if the store works', () => {
  expect(store.getState()).toEqual(initialState);

  const unsubscribe = store.subscribe(() => {
    expect(store.getState().items).toBeDefined();
    expect(store.getState().items.length).toEqual(1);
  });

  store.dispatch(addItem());
  unsubscribe();
});
