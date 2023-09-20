import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
    return (
        <div className="header">
            <h1>
                <a href="/"> Open Profile </a>
            </h1>
            <div className="menu">
                {/* <a href="#" className="link"> 경력 추가 </a> */}
                <Link to='/create-experience' className="link">
                    경력 추가
                </Link>
                {/* <a href="#" className="link"> 프로필 추가 </a> */}
                <Link to='/create-profile' className="link">
                    프로필 추가
                </Link>
            </div>
        </div>
    )
}

export default Header;