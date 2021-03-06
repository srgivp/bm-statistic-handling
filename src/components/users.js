import React, { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../redux/actions/fetch-users-actions';
import { resultsToDisplay, limit } from './utils';
import Pages from './pagination';
import NavBar from './nav-bar';
import './components-styles/styles-users.scss';
import './components-styles/common-components-styles.scss';
import Spinner from './spinner';

const Users = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { page } = useParams();
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    dispatch(fetchUsersRequest({ limit, page: page - 1 }));
  }, [page]);

  return (
    <div id="users" className="flex-container">
      <header className="flex-container">AppCo</header>
      {state.users.loading ? <Spinner /> : null}
          <main>
            <NavBar />
            <h3 className="flex-container">Users statistics</h3>
            <table>
              <thead>
                <tr>
                  <th>
                    <h3>Id</h3>
                  </th>
                  <th>
                    <h3>First name</h3>
                  </th>
                  <th>
                    <h3>Last name</h3>
                  </th>
                  <th>
                    <h3>Email</h3>
                  </th>
                  <th>
                    <h3>Gender</h3>
                  </th>
                  <th>
                    <h3>Ip address</h3>
                  </th>
                  <th>
                    <h3>Total clicks</h3>
                  </th>
                  <th>
                    <h3>Total page views</h3>
                  </th>
                </tr>
              </thead>
              <tbody>{resultsToDisplay(state, location, history)}</tbody>
            </table>
          </main>
          {/*// )}*/}
      <Pages />
      {/*{state.users.loading ? <Pages style={"z-index: -1"} /> : <Pages />}*/}
      <footer>
        <div className="flex-container">
          <div>AppCo</div>
          <div>All rights reserved by ThemeTags</div>
          <div>Copyrights ?? 2019.</div>
        </div>
      </footer>
    </div>
  );
};

export default Users;
