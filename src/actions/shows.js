import React from 'react'

export const ADD_SHOWS = 'ADD_SHOWS',
             LOADING_ON = 'LOADING_ON',
             LOADING_OFF = 'LOADING_OFF',
             CLEAR = 'CLEAR'

const url = 'http://api.tvmaze.com'

export function addShows(curDate){
    
    return (dispatch) => {
        dispatch({type : LOADING_ON})

        let date = new Date(curDate.dateString),
            today = new Date(),
            cur = 0,
            dateString
        date.setDate(date.getDate() + 1)
        today.setDate(today.getDate() + 1)
        today.setHours(0,0,0,0)

        while (today < date && cur < 20) {

            cur++;
            let localDate = new Date(date.setDate(date.getDate() - 1))
            dateString = date.toISOString().slice(0, 10);
            fetch(url + "/schedule?country=US&date=" + dateString)
                .then(response => response.json())
                .then(jsondata => {
                    dispatch({type : ADD_SHOWS, payload : {date : Object.assign(localDate), shows : jsondata}})
                    return true
                })
                .then(() => { 
                    if (!(today < localDate && cur < 20)) {dispatch({type : LOADING_OFF})}
                })
            
        }
    }
}

export function clear () {
    return (dispatch) => {
        dispatch({type : CLEAR})
    }
}
