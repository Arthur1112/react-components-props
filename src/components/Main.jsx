import React, {useState} from "react";
import Greet from "./Greet";


const students = [
    { id: 1, firstName: 'Wade', lastName: 'Booth'},
    { id: 2, firstName: 'Alex', lastName: 'Hall'},
    { id: 3, firstName: 'Maria', lastName: 'Bruno'},
    { id: 4, firstName: 'Arthur', lastName: 'Silva'},
    { id: 5, firstName: 'Chloe'},
]


function Main(){
    const [studentList, setStudentList] = useState(students)
    const handleClick = () => {
        //add Rodrigo to out list of students
        const rodrigo = { id: 6, firstName: 'Rodrigo'}
        setStudentList([...students, rodrigo])
        document.querySelector('button').style.display = 'none' // Makes button go away after you click it
    }
    return(
        <main>
            <button onClick={handleClick}>Add Rodrigo</button>
            {studentList.map(student => {
                return (
                 <Greet 
                    key={student.id} 
                    lastName={student.lastName}
                    firstName={student.firstName}/>)
            })}
        </main>
    )
}


export default Main;