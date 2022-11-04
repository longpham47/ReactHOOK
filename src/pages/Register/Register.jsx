import React from 'react'
import { useFormik } from 'formik';
import { GP_ID } from '../../util/setting';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../redux/action/QLNDAction';


export default function Register() {

  const dispatch = useDispatch();



  const formik = useFormik({
    // giá trị khởi toạ (data cần luuw trữ )
    initialValues: {
      taiKhoan: '',
      matKhau: "",
      soDt: "",
      email: "",
      hoTen: "",
      maNhom: GP_ID,

    },

    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("tài khoảng khoảng được bỏ trống"),
      matKhau: Yup.string().required("mật khẩu không được để trống"),
      email : Yup.string().required("email không được để trống").email("email chưa đúng định dạng"),
      hoTen: Yup.string().required("họ tên không được đẻ trống").matches(/^[A-Z a-z]+$/,"họ tên không đúng định dạng")
    }),

    onSubmit: values => {
      console.log(values);
      // gọi dispatch đưa dữ liệu cho dangky action

      let action = dangKyAction(values);
      // dispatch1 giúp gọi hàm call api  
      dispatch(action);
    },
  });




  return (
    <div className='py-5'>
      <h2>đăng ký</h2>
      <form onSubmit={formik.handleSubmit}>

        <div className='form-group'>
          <input name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} onBlur={formik.handleBlur} type="text" className='form-control' placeholder=" tài khoảng" />
          {/* thông báo lổi  */}
          { formik.touched.taiKhoan && formik.errors.taiKhoan ? (
            <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
          ) : null}

        </div>
        <div className='form-group'>
          <input name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} onBlur={formik.handleBlur}   type="password" className='form-control' placeholder="mật khẩu" />

          { formik.errors.matKhau ? (
            <div className='alert alert-danger'>{formik.errors.matKhau}</div>
          ) : null}
          
        </div>
        <div className='form-group'>
          <input name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen}  onBlur={formik.handleBlur}  type="text" className='form-control' placeholder="họ tên" />

          { formik.errors.hoTen ? (
            <div className='alert alert-danger'>{formik.errors.hoTen}</div>
          ) : null}
        </div>
        <div className='form-group'>
          <input name='soDt' onChange={formik.handleChange} value={formik.values.soDt} type="text" className='form-control' placeholder="số điện thoại" />
        </div>
        <div className='form-group'>
          <input name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="text" className='form-control' placeholder="email" />

          { formik.errors.email ? (
            <div className='alert alert-danger'>{formik.errors.email}</div>
          ) : null}
        </div>
        <button className='btn btn-info'>đăng ký</button>

      </form>
    </div>
  )
}

