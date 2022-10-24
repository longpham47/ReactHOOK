import React, { Component } from 'react'
import axios from 'axios'
import { TOKENCYBER, URL_API } from '../../util/setting'



export default class ApiRCC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mangPhim: []
        }
    }

    getAPI = () => {
        let promise = axios({
            method: 'get',
            url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
            headers: { "TokenCybersoft": TOKENCYBER }
        });

        promise.then((result) => {
            console.log(result.data.content);
            this.setState({
                mangPhim: result.data.content
            }, () => {
                console.log(this.state.mangPhim)

            });
        });


        promise.catch((error) => {
            console.log(error);
        })
    } // tạo 1 lần 


    renderPhim = () => {

        return this.state.mangPhim.map((phim) => {
            return <div className="col-3" key={phim.maPhim}>
                <div className="card">
                    <img className="card-img-top" src={phim.hinhAnh} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>

            </div>
        })
    }// tạo 1 lần




    render() {
        return (
            <div>
                <button onClick={this.getAPI} className='btn btn-info'>call api</button>
                <div className="row">
                    {this.renderPhim()}
                </div>

            </div>
        )
    }// tạo lại kh updating

    componentDidMount() {
        this.getAPI()
    }
}


