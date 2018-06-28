/*
 * Action types
 */
export const ADD_ITEM = 'ADD_ITEM';

/*
 * Action creators
 */
export const addItem = name => ({
  type: ADD_ITEM,
  name
});
