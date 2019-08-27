import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ApplicationState } from '../../store';
import RepositoryItem from '../RepositoryItem';
import { loadRequest } from '../../store/ducks/repositories/actions';

const RepositoryList = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories.data);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const intData = async () => {
      await i18n.changeLanguage('vi');
      await dispatch(loadRequest());
    };
    intData();
  }, [dispatch, i18n]);

  return (
    <ul>
      {t('Home')}
      {repositories.map((repository) => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </ul>
  );
};

export default RepositoryList;
