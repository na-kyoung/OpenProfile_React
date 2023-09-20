import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
//import data from '../database/profileInfo.json'
import Profile from './Profile';
import UseFetch from './UseFetch';

const ProfileList = () => {
    const {career} = useParams();
    //1. profileInfo.json 파일에서 가져온 데이터
    // const ProfileList = data.profile.filter((profile) => {
    //     return (profile.career === Number(career))
    // })
    
    //2. json 서버에서 가져온 데이터
    const profileList = UseFetch(`http://localhost:3001/profile?career=${career}`);

    return (
        <div>
            <h2> {career} 년차 </h2>
            <table>
                <tbody>
                    {
                        profileList.map((profile) => {
                            return (
                                <Profile profile={profile} key={profile.id} />
                            )
                        })
                        
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProfileList;