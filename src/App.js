import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import SignUpForm from './components/sign-up-form/sign-up-form.componenet';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='sign-up' element={<SignUpForm />} />
      </Route>
    </Routes>
  );
};

export default App;
