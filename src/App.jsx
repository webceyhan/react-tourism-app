import { Home } from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
