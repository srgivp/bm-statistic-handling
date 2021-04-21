import React from "react";
import {useSelector} from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Pagination} from '@material-ui/lab';
import {useHistory} from "react-router-dom";
import {limit} from "./utils";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

// export function PaginationRounded() {
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <Pagination count={10} shape="rounded" />
//             <Pagination count={10} variant="outlined" shape="rounded" />
//         </div>
//     );
// }

const Pages = () => {
    const state = useSelector(state => state);
    let history = useHistory();
    const {total} = state.users;
    const pagesQuantity = total % limit ? total / limit + 1 : total / limit;
    return <div id='pagination'>
        <Pagination count={pagesQuantity} variant="outlined" shape="rounded" onChange={(e, page) => {history.push(`/users/${page}`)}}  />
    </div>
};

export default Pages;