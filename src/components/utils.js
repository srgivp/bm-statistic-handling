import React from "react";

export const limit = 25;
export const resultsToDisplay = (state, location, history) => {
    return state.users.data.map((item, index) => {
        return <tr key={index} onClick={() => {history.push(`${location.pathname}/${item.id}`)}}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.mail}</td>
            <td>{item.gender}</td>
            <td>{item.ip_address}</td>
            <td>{item.total_clicks}</td>
            <td>{item.total_page_views}</td>
        </tr>
    })
}

export const msInDay = 86400000;
