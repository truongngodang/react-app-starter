import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import RepositoryItem from '../RepositoryItem';
import { loadRequest } from '../../store/ducks/repositories/actions';

const RepositoryList = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <ul>
      {repositories.map((repository) => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </ul>
  );
};

export default RepositoryList;
