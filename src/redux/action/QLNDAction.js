//! action loại 2
// cần truyên tham số =>> return trả về 1 hàm chưa đưpọc gọi 
// dispatch cần truyên ào hmà chưa gọi 
// 

import axios from "axios"
import { ACCESS_TOKEN, TOKENCYBER, URL_API, USERLOGIN } from "../../util/setting"
import { history } from "../../App"

export const dangKyAction = (userInfo) => {
    //dispatch2 : hàm thư viện thunk hổ trợ đer đưa dât api lên ređux 
    return (dispatch2) => {
        // xữ lý call api đăng ký 
        // input : ( USERinfo dữ liệu người dùng) => dữ liệu càn truyền tư UI fform 

        let promies = axios({
            url: `${URL_API}/QuanLyNguoiDung/DangKy`,
            method: "post",
            data: userInfo,
            headers: {
                "TokenCybersoft": TOKENCYBER
            }
        });
        promies.then((result) => {
            console.log(result.data);
            // nếu cầN đưa data từ api lên redux thì gọi dispatch2

            //? nếu thành công thì thông báo và chuỷen hướng người dùng snag login
            alert("đăng ký thành công");
            // cài thêm thư viên  history để hổ tợ các filê ko phải component
            history.push("/login")


        });
        promies.catch((error) => {
            console.log(error.response?.data);
        });

    }

}




// actipon liê quan về quản lý người dùng
// {taiKhoan: 'hhh', matKhau: '123456789', soDt: '0123456789', email: '01234567@gmail.com', hoT

export const dangNhapAction = (userLogin) => {
    return (dispatch2) => {


        let promies = axios({
            url: `${URL_API}/QuanLyNguoiDung/DangNhap`,
            method: "post",
            data: userLogin,
            headers: {
                "TokenCybersoft": TOKENCYBER
            }
        });
        promies.then((result) => {
            console.log(result.data);
            // lưu xuống  local storage

            localStorage.setItem(ACCESS_TOKEN,result.data.content.accessToken);

            let userInfo = JSON.stringify(result.data.content);
            localStorage.setItem(USERLOGIN,userInfo);
            let action ={
                type : "LOGIN",
                uLogin : userInfo,
            }
            dispatch2(action)



        });
        promies.catch((error) => {
            console.log(error.response?.data);
        });

    }

}

