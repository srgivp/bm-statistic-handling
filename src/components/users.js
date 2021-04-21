import React, {useEffect} from "react";
import {useParams, useLocation, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersRequest} from "../redux/actions/fetch-users-actions";
import {resultsToDisplay, limit} from "./utils";
import Pages from "./pagination";

const Users = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {page} = useParams();
    let location = useLocation();
    let history = useHistory();

    useEffect(() => {
        dispatch(fetchUsersRequest({limit, page: page-1}));
    }, [page]);

    return <div id='homepage'>
        <h1>USERS</h1>
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
            <tbody>
            {resultsToDisplay(state, location, history)}
            </tbody>
        </table>
        <Pages />
    </div>
}

export default Users;