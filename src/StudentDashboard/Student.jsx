function Student({ name, age, course, present, onDelete, onToggle }) {
    return (
        <div className="student-card">
            <div className="student-info">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Course:</strong> {course}</p>
                <p><strong>Status:</strong> {present ? "Present" : "Absent"}</p>
            </div>

            <div className="student-actions">
                <button onClick={onToggle}>Toggle</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}

export default Student;