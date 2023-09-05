import './App.css';
import Layout from './components/layout/Layout'
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import LandingPage from './pages/LandingPage/LandingPage';
import AddQuestionForm from './pages/AddQuestionForm/AddQuestionForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add_question" element={<AddQuestionForm />} />

        {/* <Route path="/forgot_password" element={<LoginForm />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
