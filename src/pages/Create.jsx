import { Form } from "react-router-dom";
import Navbar from "../components/Navbar";


const Create = () => {
    return (<div>
        <Navbar/>
        <h1>Add New Resource</h1>
        <Form action="/create" method="post">
            <input type="text" name="title" placeholder="write title here" />
            <input type="text" name="description" placeholder="write description here"/>
            <input type="text" name="img" placeholder="add image URL here" />
            <button>Add New Resource</button>
        </Form>
        </div>
    )
}

export default Create;