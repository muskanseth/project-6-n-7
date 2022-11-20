import './App.css';
import Header from './components/Header';
import { Col, Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Options from './components/Options';
import Home from './components/Home';
// import Footer from './components/Footer';
import AllAccounts from './components/AllAccounts';
import AddAccount from './components/AddAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Transfer from './components/Transfer';



function App() {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Container >
        <Routes>
                <Route path="/"             exact element={<Header title={"Welcome Users"}/>} />
                <Route path="/accounts"     exact element={<Header title={"All Transactions History"}/>} />
                <Route path="/add-account"  exact element={<Header title={"Add New Account"}/>} />
                <Route path="/deposit"      exact element={<Header title={"Deposit Money"}/>} />
                <Route path="/withdraw"     exact element={<Header title={"Withdraw Money"}/>} />
                <Route path="/Transfer"     exact element={<Header title={"Transfer Money"}/>} />
                {/* <Route path="/Footer" /> */}
              </Routes>

          {/* <Header /> */}
          <Row>
            <Col md={3}><Options/></Col>
            <Col md={9}>
              <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/accounts" exact element={<AllAccounts/>} />
                <Route path="/add-account" exact element={<AddAccount/>} />
                <Route path="/deposit" exact element={<Deposit/>} />
                <Route path="/withdraw" exact element={<Withdraw/>} />
                <Route path="/transfer" exact element={<Transfer/>} />

              </Routes>
            </Col>
          </Row>
          {/* <Footer/> */}
        </Container>
      </Router>
    </div>
  );
}

export default App;
