import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { FunctionAddUser } from '../redux/Action';

const Adduser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('staff');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userobj = { name, email, phone, role };
        dispatch(FunctionAddUser(userobj));
        console.log(userobj)
        navigate('/user')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add User</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Phone</label>
                                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="">Role</label>
                                    <select name="" value={role} onChange={e => setRole(e.target.value)} className='form-control'>
                                        <option value="admin">Admin</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type='submit'>Submit</button>
                        <Link to={'/user'} className='btn btn-danger'>Back</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Adduser
