import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {changeFrom, changeTo, fetchDetailsRequest} from "../redux/actions/fetch-details-actions";
import {msInDay} from "./utils";
import ClicksChart from "./clicks-chart";
import ViewsChart from "./views-chart";
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import NavBar from "./nav-bar";

const UserStatistic = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const params = useParams();
    const {id, page} = params;
    const {minDate, maxDate} = state.users;
    const {from, to, correctedData} = state.details;
    let toInitial = Date.parse(minDate) + 6*msInDay;
    toInitial = new Date(toInitial).toISOString().slice(0, 10);
    const {
        register,
        handleSubmit,
        control,
        setValue,
        watch
    } = useForm();
    useEffect(() => {
        dispatch(fetchDetailsRequest({id, page, from: minDate, to: toInitial}));
    }, []);

    return <div id='details'>
        <NavBar />
        <h1>STATISTIC</h1>
        <form id='user-form' onSubmit={handleSubmit((() => {

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
                        <DatePicker name='from' minDate={new Date(minDate)} maxDate={new Date(maxDate)} selected={from ? new Date(from) : null} onChange={(date) => {
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
                        <DatePicker name='to' minDate={new Date(from)} maxDate={new Date(maxDate)} selected={to ? new Date(to) : null} onChange={(date) => {
                            setValue('to', date);
                            dispatch(changeTo({to: new Date(date).toISOString().slice(0, 10)}))
                        }}/>
                    }
                />
            </div>
            <Button type='submit' id='chooseDate' className='action-button' variant='contained' size="medium">
                Choose period
            </Button>
        </form>
        {correctedData ? <ClicksChart data = {correctedData} /> : null}
        {correctedData ? <ViewsChart data = {correctedData} /> : null}
    </div>
}

export default UserStatistic;