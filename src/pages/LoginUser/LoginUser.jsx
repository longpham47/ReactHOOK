import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { dangNhapAction } from '../../redux/action/QLNDAction';
import { GP_ID } from '../../util/setting';


export default function LoginUser() {
    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',

        },
        onSubmit: values => {
            console.log(values);
            let action = dangNhapAction(values);
            dispatch(action);
        },
    });
    return (
        <div>
            <div className='loginForm'>
                <form className="py-5" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <input name='taiKhoan' onChange={formik.handleChange} type="text" className="form-control" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <input name='matKhau' onChange={formik.handleChange} type="password" className="form-control" placeholder="Enter Pass" />
                    </div>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    )
}
