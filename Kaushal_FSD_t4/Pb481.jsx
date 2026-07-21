import { useState } from "react";
import axios from "axios";

function Pb481() {
    const [formdata, setFormdata] = useState({});
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormdata({...formdata,[name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/data",formdata );
            alert(res.data);

            setFormdata({
                sname: "",
                cname: "",
                email: ""
            });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h2>Course Enrollment Form</h2>

            <form onSubmit={handleSubmit}>

                Student Name :
                <input
                    type="text"
                    name="sname"
                    value={formdata.sname}
                    onChange={handleInput}
                />
                <br /><br />

                Course Name :
                <input
                    type="text"
                    name="cname"
                    value={formdata.cname}
                    onChange={handleInput}
                />
                <br /><br />

                Email :
                <input
                    type="email"
                    name="email"
                    value={formdata.email}
                    onChange={handleInput}
                />
                <br /><br />

                <button type="submit"> Enroll</button>
            </form>
        </>
    );
}

export default Pb481;