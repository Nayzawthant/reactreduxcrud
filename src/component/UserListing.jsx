import React, { useEffect } from 'react'
import { RemoveUser, fetchUserList } from '../redux/Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserListing = (props) => {

    useEffect(() => {
        props.loaduser();
    },[]);
    const handleDelete = (code) => {
        if (window.confirm('Do yo want to remove')) {
            props.removeUser(code);
            props.loaduser();
            toast.success('User removed successfully');
        }
    }
  return (
    props.user.loading?<div><h2>Loading...</h2></div>:
    props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:

    <div className='card'>
      <div className="card-header">
        <Link to={'/user/add'} className='btn btn-success'>Add User</Link>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.user.userlist && props.user.userlist.map(item =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.role}</td>
                            <td>
                                
                                <Link to={`/user/edit/${item.id}`} className='btn btn-primary'>Edit</Link>
                                <button className='btn btn-danger' onClick={()=>{handleDelete(item.id)}}>Delete</button>
                            </td>
                        </tr>
                        )
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loaduser:() => dispatch(fetchUserList()),
        removeUser:(code) =>dispatch(RemoveUser(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserListing);
