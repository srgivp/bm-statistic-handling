import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import {useHistory, useParams} from 'react-router-dom';
import { limit } from './utils';

const Pages = () => {
  const state = useSelector(state => state);
  let history = useHistory();
  const {page} = useParams();
  const { total } = state.users;
  const pagesQuantity = total % limit ? total / limit + 1 : total / limit;
  let defaultPage;
  useEffect(() => {
      defaultPage = parseInt(page, 10);
  }, [])
  return (
    <div id="pagination">
      <Pagination
        count={pagesQuantity}
        defaultPage={defaultPage}
        variant="outlined"
        shape="rounded"
        size="small"
        onChange={(e, page) => {
          history.push(`/users/${page}`);
        }}
      />
    </div>
  );
};

export default Pages;
