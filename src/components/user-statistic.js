import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {changeFrom, changeTo, fetchDetailsRequest, setName} from "../redux/actions/fetch-details-actions";
import {limit, msInDay, userName} from "./utils";
import LineChart from "./chart";
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import NavBar from "./nav-bar";
import './components-styles/common-components-styles.scss';
import './components-styles/styles-details.scss';
import {fetchUsersRequest} from "../redux/actions/fetch-users-actions";

const UserStatistic = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const params = useParams();
    const {id, page} = params;
    const {minDate, maxDate, data} = state.users;
    const {from, to, correctedData} = state.details;
    let toInitial = minDate ? Date.parse(minDate) + 6 * msInDay : null;
    toInitial = new Date(toInitial).toISOString().slice(0, 10);
    const {
        handleSubmit,
        control,
        setValue
    } = useForm();
    useEffect(() => {
        if (data.length < 1) {
            dispatch(fetchUsersRequest({limit, page: page - 1}));
        } else {
            const namePayload = userName(state, id);
            dispatch(setName(namePayload));
            dispatch(fetchDetailsRequest({id, page, from: minDate, to: toInitial}));
        }
    }, [data.length]);

    return <div id='details'>
        <header className='flex-container'>AppCo</header>
        <main>
            <NavBar/>
            <div>
                <h3>{state.details.first_name} {state.details.last_name}</h3>
                <div>
                    <form id='user-form' className='flex-container' onSubmit={handleSubmit((() => {

                        dispatch(fetchDetailsRequest({id, page, from, to}))
                    }))}>
                        <div className='form-group'>
                            <label htmlFor='from'>From: </label>
                            <Controller
                                name='from'
                                type='from'
                                defaultValue={from ? new Date(from) : null}
                                control={control}
                                render={() =>
                                    <DatePicker name='from' minDate={new Date(minDate)} maxDate={new Date(maxDate)}
                                                selected={from ? new Date(from) : null}
                                                withPortal={window.matchMedia("(max-width: 700px)").matches}
                                                onChange={(date) => {
                                                    setValue('from', date);
                                                    dispatch(changeFrom({from: new Date(date).toISOString().slice(0, 10)}));
                                                    if (new Date(date) > new Date(to)) {
                                                        dispatch(changeTo({to: new Date(date).toISOString().slice(0, 10)}))
                                                    }
                                                }}/>
                                }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='to'>To: </label>
                            <Controller
                                name='to'
                                type='to'
                                defaultValue={to ? new Date(to) : null}
                                control={control}
                                render={() =>
                                    <DatePicker name='to' minDate={new Date(from)} maxDate={new Date(maxDate)}
                                                selected={to ? new Date(to) : null}
                                                withPortal={window.matchMedia("(max-width: 700px)").matches}
                                                onChange={(date) => {
                                                    setValue('to', date);
                                                    dispatch(changeTo({to: new Date(date).toISOString().slice(0, 10)}))
                                                }}/>
                                }
                            />
                        </div>
                        <Button type='submit' id='chooseDate' className='action-button' variant='contained'
                                size="medium">
                            Show charts
                        </Button>
                    </form>
                </div>

            </div>
            <div className='chart-name'>
                Clicks
            </div>
            {correctedData ? <LineChart values="clicks"/> : null}
            <div className='chart-name'>
                Views
            </div>
            {correctedData ? <LineChart values="page_views"/> : null}
        </main>
        <footer>
            <div className='flex-container'>
                <div>AppCo</div>
                <div>All rights reserved by ThemeTags</div>
                <div>Copyrights © 2019.</div>
            </div>
        </footer>
    </div>
}

export default UserStatistic;