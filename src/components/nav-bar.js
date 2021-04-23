import React from "react";
import {useSelector} from "react-redux";
import {
    Link,
    Route,
    useParams
} from "react-router-dom";
import {default as MuiLink} from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const NavBar = () => {
    const state = useSelector((state) => {
        return state;
    });
    const {page, id} = useParams();

    const userName = (id) => {
        if (id) {
            const user = state.users.data.filter(item =>item.id === Number(id))
            return `${user[0].first_name} ${user[0].last_name}`;
        } else {
            return null;
        }
    }
    const LinkRouter = (props) => <MuiLink {...props} component={Link} />;
    const breadcrumbNameMap = {
        [`/users/${page}`]: [`Users page ${page}`],
        [`/users/${page}/user/${id}`]: [`${userName(id)}`],
    }

    return <div id='nav-bar' className='flex-container'>
        <div id='breadcrumbs-container'>
            <Route>
                {({ location }) => {
                    let pathname;
                    const indexToSlice = location.pathname.indexOf('?')+1;
                    if (indexToSlice > 0) {
                        pathname = location.pathname.slice(0, indexToSlice);
                    } else {
                        pathname = location.pathname;
                    }
                    const pathnames = pathname.split('/').filter((x) => x);

                    return (
                        <Breadcrumbs aria-label="breadcrumb">
                            <LinkRouter color="inherit" to="/">
                                Home
                            </LinkRouter>
                            {pathnames.map((value, index) => {
                                if (value === 'users' || value === 'user') {
                                    return null;
                                }
                                const last = index === pathnames.length - 1;
                                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                                return last ? (
                                    <Typography color="textPrimary" key={to}>
                                        {breadcrumbNameMap[to]}
                                    </Typography>
                                ) : (
                                    <LinkRouter color="inherit" to={to} key={to}>
                                        {breadcrumbNameMap[to]}
                                    </LinkRouter>
                                );
                            })}
                        </Breadcrumbs>
                    );
                }}
            </Route>
        </div>
    </div>

}

export default NavBar;