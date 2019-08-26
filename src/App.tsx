import React from 'react';
import { Provider } from 'react-redux';

import { RawIntlProvider, createIntl, createIntlCache } from 'react-intl';
import RepositoryList from './components/RepositoryList';
import en from './translations/en.json';
import vi from './translations/vi.json';

import store from './store';

const cache = createIntlCache();
const intl = createIntl({
  locale: 'vi-VN',
  messages: vi,
}, cache);

const App = () => (
  <Provider store={store}>
    <RawIntlProvider value={intl}>
      <RepositoryList />
    </RawIntlProvider>
  </Provider>
);


export default App;
