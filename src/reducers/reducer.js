import { ADD_ITEM } from '../actions/actions';
import initialState from '../store/initialState';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const items = [...state.items];

      const newItem = {
        id: items.length,
        name: action.name
      };
      items.push(newItem);

      return {
        ...state,
        items
      };
    }

    default:
      return state;
  }
}
