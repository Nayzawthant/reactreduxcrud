import React from 'react'

const UserListing = () => {
  return (
    <div className='card'>
      <div className="card-header">
        <h2>User List</h2>
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
            <tbody></tbody>
        </table>
      </div>
    </div>
  )
}

export default UserListing
