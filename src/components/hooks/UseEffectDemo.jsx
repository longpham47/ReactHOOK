import React, { useEffect, useState } from 'react'

// biến toàn cục
const arrDiaChi = [
    {
        id: "HCM",
        name: "Hồ Chí Minh",
        arrQuan: [
            { id: 1, name: "quận 1" },
            { id: 2, name: "quận 2" },
            { id: 3, name: "quận 3" },
        ]

    },
    {
        id: "DN",
        name: "ĐÀ NẴNG",
        arrQuan: [
            { id: 4, name: "hải châu 1" },
            { id: 5, name: "liên chiểu 2" },
            { id: 6, name: "sơn trà 3" },
        ]

    }
]


export default function UseEffectDemo() {
    // biến cục bộ


    //mouting ( chạy 1 lân khi lading ứng dung)
    // updating (state,props thay đỏi)
    //

    let [number, setNumber] = useState(0);//
    let [like, setLike] = useState(0);//

    // umber dổi thì like cugr đổi theo

    // useEffect(() => {
    //     console.log("componentDidmound");
    //     console.log("componentDidupate"); 
    // })

    //! useEffect(hàm callback,[])//

    useEffect(() => {
        console.log("componentDidmound");
    }, []);// tham số thứ 2 là mảng rổng thì chạy thoe componentDIdound

    useEffect(() => {
        /// chạy khi numer thay đổi
        // vânnx chạy khi loang ứng dụng
        // nhưng ở lân 2 khi updatingthì chỉ chạy khi numer đổi

        setLike(like + 1)
    }, [number]);// truyên giá trị vào tham số  []




    return (
        <div className='container'>
            {console.log("render")}
            <div className='w-50 mx-auto'>
                <p> number:{number}</p>
                <p>like :{like}</p>

                <button onClick={() => {
                    setNumber(number + 1);
                }} className='btn btn-info'>+</button>
                <div className="form-group">
                    <label htmlFor="">thành phố</label>
                    <select className="form-control" id="">
                        <option>hãy chọn thành phố</option>
                        <option value={"HCM"}>hồ CHÍ MIH</option>
                        <option value={"DN"}>ĐÀ NẴNG</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

            </div>
        </div>
    )
}
