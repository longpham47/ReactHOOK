import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export default function Header() {

   let {uLogin} =  useSelector(state =>state.QLNDreducer)
    let renderName = (  ) => {
            if (uLogin != null ){
                //đả đang nhập
                return       <NavLink className="nav-link" to="/profile">hello {uLogin.hoTen}</NavLink>

            }else{
                //chưa đang nhập 
                return <NavLink className="nav-link" to="/login">Login</NavLink>
            }

    }

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                    
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            {renderName()}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">about</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/counter">counter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/use-effect">UseEffect</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apircc">APIrcc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apirfc">APIrfc</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usecallback">UserCallBack</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/usememo">useMemoDemo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/useref">useRef</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reduxdemo">reduxDemoHook</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apimidd">ApiMiddleWare</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/detail/phim123">Detail</NavLink>
                        </li>

                    </ul>

                </div>
            </nav>

        </header>
    )
}

