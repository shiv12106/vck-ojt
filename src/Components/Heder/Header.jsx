import {Link} from 'react-router-dom' ;
const Header = () => {
    return(
        <div>
        <Header>
            <div className='headnav'>
            <nav>
                <Link to="/home" >Home </Link>
                <Link to="/about">About</Link>
            </nav>
            </div>


        </Header>
        </div>
    )
}

export default Header;