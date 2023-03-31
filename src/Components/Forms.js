import { useState } from "react"
import "./form.css"


function Forms(){

    const [name, setName] = useState("")
    const [department, setDepartment] = useState("")
    const [rating, setRating] = useState("")

    const handleChange = (e)=> {
        const {name, value} = e.target

        switch(name){
            case "name":{
                setName(value)
                break;
            }
            case "department":{
                setDepartment(value)
                break;
            }
            case "rating":{
                setRating(value)
                break;
            }

            default:{
                return
            }
        }

    }
    
    const [record, setRecord] = useState([])
    const submitButton = (e) =>{
        e.preventDefault();
        

        const newRecord = {name, department, rating, id: new Date().getTime().toString()}
        
        setRecord([...record, newRecord] )
        setName('')
        setDepartment('')
        setRating("")
    }

    return(
        <div>
            <form onSubmit={submitButton}>
           
                <div>
                    <label for="name">Name: </label>
                    <input type="text" id="name" name="name"  value={name} onChange={handleChange}/>
                </div>

                <br /><br />

                <div>
                    <label for="department">Department:</label>
                    <input type="text" id="department" name="department"  value={department} onChange={handleChange}/>
                </div>
                <br /><br />

                <div>
                    <label for="rating">Rating:</label>
                    <input type="number" id="rating" name="rating" value={rating} onChange={handleChange}/>
                </div>

                <br /><br /><br />

                <button type="submit"> Submit</button>

            </form>

            <div className="record-div">
                {
                    record.map((ele) =>{
                        
                        const {name, department, rating} = ele
                        return(
                            <div className="showData">
                                <p>Name: {name} | Department: {department} | Rating: {rating} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Forms

