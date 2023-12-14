import '../css/Profile.css'

export default function Profile(){
    return(
        
<div className="profile-main">

<div className="profile-container">
    <div className="profile-header">
        <img src="vikramt.jpeg" alt="Profile Picture"/>
        <h1>John Doe</h1>
        <p>Computer Science Major</p>
        <button onclick="toggleEdit()">Edit</button>
    </div>
    <div className="profile-details">
        <div className="detail">
            <h2>Email:</h2>
            <p id="email">john.doe@example.com</p>
        </div>
        <div className="detail">
            <h2>University:</h2>
            <p id="university">XYZ University</p>
        </div>
        <div className="detail">
            <h2>Year of Study:</h2>
            <p id="year">3rd Year</p>
        </div>

    </div>

    <div className="edit-form" id="editForm">
        <label htmlFor="editEmail">Email:</label>
        <input type="text" id="editEmail" placeholder="Enter new email"/>
        <label htmlFor="editUniversity">University:</label>
        <input type="text" id="editUniversity" placeholder="Enter new university"/>
        <label htmlFor="editYear">Year of Study:</label>
        <input type="text" id="editYear" placeholder="Enter new year of study"/>
        <button onclick="saveChanges()">Save Changes</button>
    </div>
</div>


</div>

    )
}