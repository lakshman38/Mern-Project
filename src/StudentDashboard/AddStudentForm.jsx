import { useState } from "react";

function AddStudentForm({ addStudent }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && age && course) {
            addStudent({
                name,
                age: Number(age),
                course,
                present: false
            });

            setName("");
            setAge("");
            setCourse("");
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Student</h2>

            <form onSubmit={handleSubmit} className="student-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter student name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Course</label>
                    <input
                        type="text"
                        placeholder="Enter course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="add-btn">
                    Add Student
                </button>
            </form>
        </div>
    );
}

export default AddStudentForm;