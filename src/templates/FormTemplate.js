import { Fragment } from "react"
import { Route } from "react-router-dom"


export const FormtempLate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid" src="https://source.unsplash.com/random?seafood" alt="" />
                    </div>
                    <div className="col-6">
                        <props.component {...propsRoute} />
                    </div>


                </div>

            </div>


        </Fragment>
    }} />
}