import axios from 'axios';
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADDING_SMURF = "ADD_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const  ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/


export const fetchSmurfs = () => {
  return function(dispatch) {
    dispatch({type: FETCH_SMURFS_START});
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(({data: {results}}) => {
        dispatch({
          type: FETCH_SMURFS_SUCCESS,
          payload: results.data
        })
      })
      .catch(err => 
        dispatch({
          type: FETCH_SMURFS_FAILURE,
          payload: err
        }));
  };
};

export const addNewSmurf = (newSmurf) => {
  console.log(newSmurf)
    return function(dispatch) {
      dispatch({ type: ADDING_SMURF });
      axios 
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(({data}) => {
        dispatch({
          type: SMURF_ADDED, 
          payload: data
        })
      })
      .catch(err => {
        dispatch({ 
          type: ADD_SMURF_FAILURE, 
          payload: err
          });
      });
    }
  }

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
