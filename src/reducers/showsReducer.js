import React from 'react'
import { ADD_SHOWS, LOADING_OFF, LOADING_ON, CLEAR } from '../actions/shows'

const InitialState = {
  schedule: [],
  loading: true,
}

export default function showsReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_SHOWS: {
      const schedule = [...state.schedule]
      schedule.push({
        date: action.payload.date,
        shows: action.payload.shows,
      })
      return { schedule: schedule, loading: state.loading }
    }
    case CLEAR: {
      return { schedule: [], loading: true }
    }
    case LOADING_ON: {
      return { ...state, loading: true }
    }
    case LOADING_OFF: {
      return { ...state, loading: false }
    }
  }
}
