import { useEffect, useState } from "react";
import axios from "axios";

function Pb480() {

    const [formdata, setFormdata] = useState({});
    const [employees, setEmployees] = useState([]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormdata({...formdata,[name]: value});
    };
    const loadEmployees = async () => {
        const res = await axios.get("http://localhost:5000/data");
        setEmployees(res.data);
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/data", formdata);

        setFormdata({
            ename: "",
            eid: "",
            salary: "",
            dept: ""
        });

        loadEmployees();
    };

    return (
        <>
            <h2>Employee Form</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="ename"
                    placeholder="Employee Name"
                    value={formdata.ename}
                    onChange={handleInput}
                />
                <br /><br />

                <input
                    type="number"
                    name="eid"
                    placeholder="Employee ID"
                    value={formdata.eid}
                    onChange={handleInput}
                />
                <br /><br />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={formdata.salary}
                    onChange={handleInput}
                />
                <br /><br />

                <input
                    type="text"
                    name="dept"
                    placeholder="Department"
                    value={formdata.dept}
                    onChange={handleInput}
                />
                <br /><br />

                <button type="submit">Save</button>
            </form>

            <hr />

            <h2>Employee List</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map((emp, index) => (
                            <tr key={index}>
                                <td>{emp.ename}</td>
                                <td>{emp.eid}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.dept}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    );
}

export default Pb480;