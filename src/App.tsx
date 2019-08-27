import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import RepositoryList from './components/RepositoryList';
import store from './store';

const Loader = () => <div>loading...</div>;

const App = () => (
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <RepositoryList />
    </Suspense>
  </Provider>
);


export default App;
