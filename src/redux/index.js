import { configureStore } from 'redux-starter-kit';
import users from './users';

export default configureStore({
  reducer: {
    users,
  },
});
