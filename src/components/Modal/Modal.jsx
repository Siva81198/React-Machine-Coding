import React, { useEffect, useState } from 'react'
import './styles.css'

const Modal = () => {
    const [apiData, setApiData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    console.log(apiData);


    useEffect(() => {
        // Using Promise .then() method:-

        // fetch('https://dummyjson.com/users')
        //     .then((response) => {
        //         if (!response.ok) throw new Error("Issue while fetching data...");
        //         return response.json()
        //     })
        //     .then((data) => setApiData(data))

        // Using try catch method:-
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                setApiData(data.users);
            } catch (error) {
                console.log("Error:", error);
            }
        }
        fetchData();
    }, [])

    const handleClick = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    }

    return (
        <>
            <div className="table-cont">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>
                                    <button className="action-button" onClick={() => handleClick(user)}>
                                        Click Me
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>User Details</h2>
                        <p>
                            <strong>Name:</strong> {selectedUser.firstName}{" "}
                            {selectedUser.lastName}
                        </p>
                        <p>
                            <strong>Age:</strong> {selectedUser.age}
                        </p>
                        <button className="close-button" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>

    )
}

export default Modal