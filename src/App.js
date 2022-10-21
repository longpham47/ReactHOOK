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

// cáu hình router


function App() {
  return (
    <BrowserRouter>
    
    <Header/>
      {/* // dường path sẻ hiện component home */}
      <Switch>
      {/* nếu không có exact thì so sánh đường dẫn có chứa ký tự (inclued) thoả dkiên 
          exact so sanh bằng chính xác đường dẫn
      */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/use-effect" component={UseEffectDemo} />
        <Route exact path="/apircc" component={ApiRCC} />
        <Route exact path="/apirfc" component={ApiRFC} />
        
        {/* khi không có / trang cụ thẻ thì mặt đỊnh hiện home   */}
        <Route exact path="/" component={Home} />
      </Switch>
      


    </BrowserRouter>

  );
}

export default App;
