import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";

const CreateExperience = () => {
    const experience = UseFetch(`http://localhost:3001/experience`);
    const history = useHistory();

    const addExperience = () => {
        fetch('http://localhost:3001/experience',{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                career : experience.length
            })
        }).then((res)=>{
            if(res.ok){
                alert(`${experience.length}년차 추가 완료`);
                history.push(`/`);
            }
        })
    }


    return (
        <div>
            <h1> 현재 최대 경력 : {experience.length-1} 년차 </h1>
            <button onClick={addExperience}> 년차 추가 </button>
        </div>
    )
}

export default CreateExperience;