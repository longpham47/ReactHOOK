import { Fragment } from "react"
import { Route } from "react-router-dom"
import Header from "../components/Header/Header"



export const HomeTempLate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Header />
            <props.component {...propsRoute} />
        </Fragment>
    }} />
}