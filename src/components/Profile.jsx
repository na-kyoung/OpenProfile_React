import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Profile = ({profile}) => {
    const [isFindJob, setIsFindJob] = useState(profile.isFindJob);
    const [isShow, setIsShow] = useState(false);

    const toggleFind = () => {
        console.log(`${profile.id}`);
        fetch(`http://localhost:3001/profile/${profile.id}`,{
            method : "PUT", //PUT 수정
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                ...profile,
                isFindJob : !isFindJob
            })
        }).then((res)=>{
            if(res.ok){
                setIsFindJob(!isFindJob);
            }
        })
    }

    const toggleShow = () => {
        setIsShow(!isShow);
    }

    const del = () => {
        if(window.confirm(`정말 삭제하시겠습니까?`)){
            fetch(`http://localhost:3001/profile/${profile.id}`,{
                method : "DELETE"
            }).then((res)=>{
                if(res.ok){
                    window.location.reload();
                }
            })
        }
    }

    return (
        <>
            <div className="card">
                {/* <img src="https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol.png" className="card-img"/> */}
                {/* <img src="https://w7.pngwing.com/pngs/919/467/png-transparent-avatar-male-man-people-person-profile-user-mobile-basic-icon.png" className="card-img" /> */}
                <img src="https://png.pngtree.com/png-vector/20190926/ourlarge/pngtree-man-icon-isolated-on-abstract-background-png-image_1742606.jpg" className="card-img" />
                <div className="container">
                    {/* <h4> {profile.name} </h4> */}
                    <div className="findJob">
                        <input type="checkbox"
                        checked={isFindJob}
                        onChange={toggleFind} />
                        {isFindJob ? "구직완료":"구직중"}
                    </div>
                    <h4> {profile.name} </h4>
                    <p> {profile.skill} </p>
                    <p> {profile.email} </p>
                    {/* <Link to='/update-profile/{profile.id}' > */}
                    <Link to={{
                        pathname: '/update-profile',
                        state: {
                            profile : profile
                        },
                    }}>
                        <button className="btn_update">
                            수정
                        </button>
                    </Link>
                    <button onClick={del} className="btn_del">
                        삭제
                    </button>
                </div>
            </div>
            {/* <tr className={isFind ? "off":""}>
                <td>
                    <input type="checkbox"
                    checked={isFind}
                    onChange={toggleFind} />
                </td>
                <td>
                    {profile.name}
                </td>
                <td>
                    {profile.skill}
                </td>
                <td>
                    {profile.email}
                </td>
                <td>
                    {isFind ? "구직완료":"구직중"}
                </td>
                <td>
                    <Link to='/update-profile/{profile.id}' >
                        <button className="btn_update">
                            수정
                        </button>
                    </Link>
                    <button onClick={del} className="btn_del">
                        삭제
                    </button>
                </td>
            </tr> */}
        </>
    )
}

export default Profile;