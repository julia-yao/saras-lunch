import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const headerData = useSelector(state => state.common.header);
    const { logo, nav } = headerData;

    return <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                { logo && 
                    <Link className="navbar-brand d-flex flex-fill justify-content-start align-items-center" href={logo.url}>
                        <img className="w-25" src={logo.image} alt="" srcSet="" />
                        <div>
                            { logo.text }
                        </div>
                    </Link>
                }
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* 如果改成用 link 的話這邊連結綁定會有問題 */}
                        {
                            nav !== undefined && 
                                nav.map((navItem, navIndex) => 
                                    <li className="nav-item" key={navIndex}>
                                        <a
                                            className="nav-link"
                                            href={navItem.url}>
                                            {navItem.text}
                                        </a>
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;