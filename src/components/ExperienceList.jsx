import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import UseFetch from './UseFetch';
//import data from '../database/experienceInfo.json'

const ExperienceList = () => {
    //json 서버에서 가져온 데이터
    const experience = UseFetch(`http://localhost:3001/experience`);
    return (
        <div>
            <ul className="list_experience">
            {
                //data.experience.map((career) => {  //파일에서 가져온 데이터
                experience.map((career)=>{
                    return (
                        <li key={career.id}>
                            {/* {career.career} 년차 */}
                            <Link to={`/profile/${career.id}`}>
                                {career.career} 년차
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default ExperienceList;