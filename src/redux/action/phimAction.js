import axios from "axios";
import { TOKENCYBER, URL_API } from "../../util/setting";
import { LAY_DS_PHIM } from "../types/phimType";




export const LayDanhSachPhimAction = (maNhom = "GP01") => {



    // trả về hàm chưa gọi
    return (dispatch2) => {
        let promise = axios({
            method: 'get',
            url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
            headers: {
                "TokenCybersoft": TOKENCYBER
            }

        });
        promise.then((result) => {
            // console.log(result.data);
            let action2 = {
                type: LAY_DS_PHIM,
                mangPhim: result.data.content
            }
            dispatch2(action2);//đảy dữ liệu lên ređux
        });
        promise.catch((error) => {
            console.log(error.data)
        });


    }
}

