import { toast } from "react-toastify";
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType";
import axios from 'axios'

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getUsetList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const addUser = () => {
    return {
        type: ADD_USER
    }
}

export const updateUser = () => {
    return {
        type: UPDATE_USER
    }
}

export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    }
}

export const fetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
      //  setTimeout(() => {
            axios.get("http://localhost:8000/user").then(res => {
                const userlist = res.data;
                dispatch(getUsetList(userlist));
            }).catch(err => {
                dispatch(failRequest(err.message));
            });
      //  }, 2000);

    }
}

export const RemoveUser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
      //  setTimeout(() => {
            axios.delete(`http://localhost:8000/user/${code}`).then(res => {
                dispatch(deleteUser());
            }).catch(err => {
                dispatch(failRequest(err.message));
            });
      //  }, 2000);

    }
}

export const FunctionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
      //  setTimeout(() => {
            axios.post('http://localhost:8000/user',data).then(res => {
                dispatch(addUser());
                toast.success('User Added successfully');
            }).catch(err => {
                dispatch(failRequest(err.message));
            });
      //  }, 2000);

    }
}

export const FunctionUpdateUser = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
      //  setTimeout(() => {
            axios.put(`http://localhost:8000/user/${code}`,data).then(res => {
                dispatch(updateUser());
                toast.success('User Updated successfully');
            }).catch(err => {
                dispatch(failRequest(err.message));
            });
      //  }, 2000);

    }
}

export const fetchUserObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
      //  setTimeout(() => {
            axios.get(`http://localhost:8000/user/${code}`).then(res => {
                const userlist = res.data;
                dispatch(getUserObj(userlist));
            }).catch(err => {
                dispatch(failRequest(err.message));
            });
      //  }, 2000);

    }
}