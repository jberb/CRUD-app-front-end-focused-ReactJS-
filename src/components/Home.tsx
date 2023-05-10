import React from "react";
import { useState, Fragment } from "react";
import EditMember from "./EditMember";
import AddMember from "./AddMember";
import UserTable from "./UserTable";



function Home() {
      
    const usersData = [
		{ id: 1, name: 'Jerry Mark', contact: '0994516975' },
		{ id: 2, name: 'Jerilyn', contact: '09125766632' },
		{ id: 3, name: 'Mary Jean', contact: '09785132699' },
	]

	const initialFormState = { id: null, name: '', contact: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, contact: user.contact })
	}

	return (
		<div className="flex justify-center">
		
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2 className="text-center font-serif text-2xl bg-yellow-100 mt-5">Edit Member</h2>
							<EditMember
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2  className="text-center font-serif text-2xl bg-yellow-100 mt-5">Add user</h2>
							<AddMember addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div >
					<h2 className="flex-large text-center font-serif text-2xl bold bg-yellow-100 mt-5">Family Contact </h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
  }
export default Home;