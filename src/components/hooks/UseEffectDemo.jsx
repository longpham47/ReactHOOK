import React, { useEffect, useState } from 'react'

// biến toàn cục
// cjỉ tạo một lần .khi render lại thì ko tạo lại nữa
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


let timeOut = "";

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
    }, []);// tham số thứ 2 là mảng rổng thì chạy thoe componentDIdmound

    useEffect(() => {
        /// chạy khi numer thay đổi
        // vânnx chạy khi loang ứng dụng
        // nhưng ở lân 2 khi updatingthì chỉ chạy khi numer đổi

        setLike(like + 1)
    }, [number]);// truyên giá trị vào tham số  [] ; Shallow Compare (number,string,bôlean)



    let [idTP, setTP] = useState("");
    let [arrQuan, setQuan] = useState([]);

    useEffect(() => {
        if (idTP !== "") {
            let thanhPho = arrDiaChi.find((tp) => {
                return tp.id == idTP;
            })
            let arrQuanNew = thanhPho.arrQuan;
            setQuan(arrQuanNew);
        }


    }, [idTP]);

    useEffect(() => { 
         timeOut = setInterval(()=>{
            console.log("interval")
        },1000);
        return () => {
            // code trong hàm sẽ thực thi được thực hiện khi component bién mất khỏi UI
            // dùng để tắt các sever chạy ngầm(willUnmount)
            clearInterval(timeOut);
        }
     },[]);// chạy mouting


    let renderQuan = () => {
        if (arrQuan.length === 0) {
            return <option>hãy chọn thành phố  trước</option>
        } else {
            return arrQuan.map((quan) => {
                return <option value={quan.id} key={quan.id}>
                    {quan.name}

                </option>
            })

        }

    }


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
                    <select className="form-control" value={idTP} id="" onChange={(event) => {
                        let idTPchon = event.target.value
                        setTP(idTPchon);

                    }}>
                        <option>hãy chọn thành phố</option>
                        <option value={"HCM"}>HỒ CHÍ MINH</option>
                        <option value={"DN"}>ĐÀ NẴNG</option>

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">quận</label>
                    <select className="form-control" id="">
                        {renderQuan()}

                    </select>
                </div>

            </div>
        </div>
    )
}
