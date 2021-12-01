import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home/Home';
import Contact from './pages/Shared/Contact/Contact';
import Features from './pages/Features/Features';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import FormTab from './pages/Dashboard/FormTab/FormTab';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import QuestionSet from './pages/Dashboard/QuestionForm/QuestionSet/QuestionSet';
import Exam from './pages/Dashboard/ExamForm/Exam/Exam';
import ExamForm from './pages/Dashboard/ExamForm/ExamForm/ExamForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/features">
            <Features></Features>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/questionSet/:quesId">
            <QuestionSet></QuestionSet>
          </PrivateRoute>
          <PrivateRoute path="/form">
            <FormTab></FormTab>
          </PrivateRoute>
          <PrivateRoute path="/exam">
            <Exam></Exam>
          </PrivateRoute>
          <PrivateRoute path="/examForm/:quesCode">
            <ExamForm></ExamForm>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
