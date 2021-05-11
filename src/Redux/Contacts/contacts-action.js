import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', data => ({
    payload: {
    id: uuidv4(),
    ...data,
},
}));

/* const addContact = data => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    ...data,
  },
});
 */
const deleteContact = createAction('contacts/delete');

/* const deleteContact = todoId => ({
  type: types.DELETE,
  payload: todoId,
}); */

const filterContacts = createAction('contacts/filter');

/* const filterContacts = value => ({
  type: types.FILTER,
  payload: value,
}); */

export default { addContact, deleteContact, filterContacts };