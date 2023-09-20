import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import UseFetch from "./UseFetch";
import { useLocation } from "react-router-dom";

const UpdateProfile = () => {
    const location = useLocation();
    const profile = location.state.profile;
    console.log(profile);

    //const {id} = useParams();
    //const profile = UseFetch(`http://localhost:3001/profile?id=${id}`);

    const experience = UseFetch('http://localhost:3001/experience');
    const history = useHistory();

    const nameRef = useRef(null);
    const skillRef = useRef(null);
    const emailRef = useRef(null);
    const careerRef = useRef(null);

    // const [editInfo, setEditInfo] = useState(profile);
    // const onEditChange =(e) => {
    //         setEditInfo({
    //             ...editInfo,
    //             [e.target.name] : e.target.value
    //         })
    // }

    useEffect((id)=>{
        console.log(`${id}`);
    })

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/profile/${profile.id}`,{
            method : "PUT",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                ...profile,
                career : careerRef.current.value,
                name : nameRef.current.value,
                skill : skillRef.current.value,
                email : emailRef.current.value,
                isFindJob : false
            })
        }).then((res)=>{
            if(res.ok){
                alert(`${nameRef.current.value}님 프로필 수정 완료`);
                history.push(`/profile/${careerRef.current.value}`);
            }
        })
    }

    return (
        <>
        <form action="" onSubmit={onSubmit} className="createForm">
            <div className="input_area">
                <label> Name </label>
                <input type="text" defaultValue={profile.name} ref={nameRef} />
            </div>
            <div className="input_area">
                <label> Skill </label>
                <input type="text" defaultValue={profile.skill} ref={skillRef} />
            </div>
            <div className="input_area">
                <label> Email </label>
                <input type="text" defaultValue={profile.email} ref={emailRef} />
            </div>
            <div className="input_area">
                <label> Career </label>
                <select ref={careerRef}>
                    {
                        experience.map((career)=>{
                            //return (
                                if(profile.career == career.career){
                                    return (
                                    <option key={career.id} value={career.career} selected>
                                        {career.career} 년차
                                    </option>
                                    )
                                }
                                else{
                                    return (
                                        <option key={career.id} value={career.career}>
                                            {career.career} 년차
                                        </option>

                                    )
                                }
                                // <option key={career.id} value={career.career}>
                                //     {career.career} 년차
                                // </option>
                            //)
                        })
                    }
                </select>
            </div>
            <button> 저장 </button>
        </form>
        </>
    )
}

export default UpdateProfile;