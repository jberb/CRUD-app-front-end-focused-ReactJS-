import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', contact: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form className='font-serif py-3'
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.contact) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name :</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Contact :</label>
			<input type="text" name="contact" value={user.contact} onChange={handleInputChange} />
			<button className="bg-yellow-600  hover:bg-yellow-800 text-white h-7 mx-6  px-2   rounded-lg">Add new user</button>
		</form>
	)
}

export default AddUserForm
