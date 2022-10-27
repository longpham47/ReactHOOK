import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LAY_DS_PHIM } from '../../redux/types/phimType'
import { TOKENCYBER, URL_API } from '../../util/setting'



export default function ApiMiddleWare() {
    // 1 : khai báo reduce cho nghiệp vụ
    // 2 : kết nối appi  => mãng 
    // tạo hàm getAPI 
    // LIFECYCLE ĐIMOUNT => useEffect(,[])
    // 3 : dispatch mãng = >  reducer



    let { mangPhim } = useSelector(state => state.phimReducer)
    // console.log(mangPhim)
    let dispatch = useDispatch();
    useEffect(() => {
        getAPI();
    }, [])// didmount


    let renderPhim = () => {
        return mangPhim.map((phim) => {
            return <div className="col-3" key={phim.maPhim}>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={phim.hinhAnh} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{phim.tenPhim}</h5>
                        <p className="card-text">{phim.moTa}</p>

                    </div>
                </div>


            </div>
        })
    }

    let getAPI = () => {
        /**
         * tổ chức action creator => tạo action loại funtion
         * nếu action có call api thì sẻ đem toàn bộ code api sang file action
         * => BẤT ĐỒNG BỘ 
         * middleWare => sử lý bát đòng bộ api và dispatch data lên redux + tổ chức theo action creator
         * 
         * middleưare (reducc-thunk,reducx saga)
         * => dispatch 1 : gọi call apoi => chờ cho đen khi lấy dc data
         * => dispatch 2 : đảy data lên ređux
         */

        // hàm call api
        let action = (dispatch2) => {
            let promise = axios({
                method: 'get',
                url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=GP04`,
                headers: {
                    "TokenCybersoft": TOKENCYBER
                }

            });
            promise.then((result) => {
                console.log(result.data);
                let action2= {
                    type: LAY_DS_PHIM,
                    mangPhim: result.data.content
                }
                dispatch2(action2);//đảy dữ liệu lên ređux
            });
            promise.catch((error) => {
                console.log(error.data)
            });
        }
        dispatch(action);// gọi ahmf call api
    }


    




    return (
        <div className='container'>
            <h2>demo api redux</h2>
            <div className='row'>
                {renderPhim()}

            </div>
        </div>
    )
}

