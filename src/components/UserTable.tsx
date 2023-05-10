import React from 'react'

const UserTable = props => (
  <table className='flex flex-col  items-center font-serif'>
    <thead>
      <tr className='bg-green-200 rounded-md border bold '>
        <th className='py-2 w-80'>Name</th>
        <th className='px-16  py-2 w-1/2'>Contact</th>
        <th className='px-8 py-2 w-1/5'>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr className="bg-gray-200 justify-between font text-center" key={user.id}>
            <td className="px-5 py-2 w-56">{user.name}</td>
            <td  className="px-20 py-2 w-56">{user.contact}</td>
            <td>
              <button 
                onClick={() => {
                  props.editRow(user)
                }}
                className="bg-blue-600  hover:bg-blue-800 text-white h-7 m-3  px-2  rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="bg-red-600  hover:bg-red-800 text-white h-7 m-3  px-2  rounded-lg"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
