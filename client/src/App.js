import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout'
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/forgot_password" element={<LoginForm />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
