import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form className='text-2xs'
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    > 
      <label className=''>Name : </label>
      <input className='w-32 ' type="text" name='name' value={user.name} onChange={handleInputChange} />
      <label className='px-1 mx-5'>Contact : </label>
      <input className='w-32' type="text" name='contact' value={user.contact} onChange={handleInputChange} />
      <button className="bg-green-600  hover:bg-green-800 text-white h-7 m-3  px-2  rounded-lg" >Update user</button>
      <button  onClick={() => props.setEditing(false)} className="bg-red-600  hover:bg-red-800 text-white h-7 m-3  px-2  rounded-lg">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
