import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import Counter from "./components/hooks/Counter"
import UseEffectDemo from './components/hooks/UseEffectDemo';
import ApiRCC from './components/hooks/ApiRCC';
import ApiRFC from './components/hooks/ApiRFC';
import UserCallBackDemo from './components/hooks/UserCallBackDemo';
import useMemoDemo from './components/hooks/useMemoDemo';
import UseRefDemo from './components/hooks/UseRefDemo';
import ReduxDemo from './pages/ReduxDemo/ReduxDemo';
import ApiMiddleWare from './pages/ReduxDemo/ApiMiddleWare';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import { HomeTempLate } from './templates/HomeTemplate';
import { FormtempLate } from './templates/FormTemplate';


// cáu hình router


function App() {
  return (
    <BrowserRouter>

      {/* <Header /> */}
      {/* // dường path sẻ hiện component home */}
      <Switch>
        {/* nếu không có exact thì so sánh đường dẫn có chứa ký tự (inclued) thoả dkiên 
          exact so sanh bằng chính xác đường dẫn
      */}
        {/* template : mẫu Ui được dùng chung cho hiểu trang
      + homeTemplate ( header - được dung chugn các trnag btn)
      + FormTemplate (thiết kế không dùng herder)
      + ađmin (sidebar,heardẻ riêng của admin) */}

      {/* HOC : truyển componet này vào props của  component khác  
        home => props ccủa homeTemplate
      */}

        {/* <Route exact path="/home" render={(propsRoute) => {
          return <div>
            <Header />
            <Home {...propsRoute}/>
          </div>
        }}/>
           <Route exact path="/about" render={(propsRoute) => {
          return <div>
            <Header />
            <About {...propsRoute}/>
          </div>
        }}/> */}

        

 

          <HomeTempLate exact path="/home" component={Home} />
          <HomeTempLate exact path="/about" component={About} />

          <FormtempLate exact path="/login" component={Login} />
          <FormtempLate exact path="/register" component={Register} />
         
          <HomeTempLate exact path="/counter" component={Counter} />
          <HomeTempLate exact path="/use-effect" component={UseEffectDemo} />
          <HomeTempLate exact path="/apircc" component={ApiRCC} />
          <HomeTempLate exact path="/apirfc" component={ApiRFC} />
          <HomeTempLate exact path="/usecallback" component={UserCallBackDemo} />
          <HomeTempLate exact path="/usememo" component={useMemoDemo} />
          <HomeTempLate exact path="/useref" component={UseRefDemo} />
          <HomeTempLate exact path="/reduxdemo" component={ReduxDemo} />
          <HomeTempLate exact path="/apimidd" component={ApiMiddleWare} />

          <HomeTempLate exact path="/detail/:maPhim" component={Detail} />

          <HomeTempLate exact path="/profile/" component={Profile} />




          {/* khi không có / trang cụ thẻ thì mặt đỊnh hiện home   */}
          <HomeTempLate exact path="/" component={Home} />
      </Switch>



    </BrowserRouter>

  );
}

export default App;
