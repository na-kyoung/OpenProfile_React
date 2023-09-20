import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRef } from "react";
import UseFetch from "./UseFetch";

const CreateProfile = () => {
    const experience = UseFetch('http://localhost:3001/experience');
    const history = useHistory();

    const nameRef = useRef(null);
    const skillRef = useRef(null);
    const emailRef = useRef(null);
    const careerRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/profile',{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                career : careerRef.current.value,
                name : nameRef.current.value,
                skill : skillRef.current.value,
                email : emailRef.current.value,
                isFindJob : false
            })
        }).then((res)=>{
            if(res.ok){
                alert(`${nameRef.current.value}님 프로필 추가 완료`);
                history.push(`/profile/${careerRef.current.value}`);
            }
        })
    }

    return (
        <>
        <form action="" onSubmit={onSubmit} className="createForm">
            <div className="input_area">
                <label> Name </label>
                <input type="text" placeholder="홍길동" ref={nameRef} />
            </div>
            <div className="input_area">
                <label> Skill </label>
                <input type="text" placeholder="Language" ref={skillRef} />
            </div>
            <div className="input_area">
                <label> Email </label>
                <input type="text" placeholder="id@profile.com" ref={emailRef} />
            </div>
            <div className="input_area">
                <label> Career </label>
                <select ref={careerRef}>
                    {
                        experience.map((career)=>{
                            return (
                                <option key={career.id} value={career.career}>
                                    {career.career} 년차
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <button> 저장 </button>
        </form>
        </>
    )
}

export default CreateProfile;