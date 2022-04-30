import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchAppBar } from './components/AppBar';
import { Home } from './pages/Home';
import { Tour } from './pages/Tour';
import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <SearchAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tour/:id" element={<Tour />} />
            </Routes>
        </BrowserRouter>
    );
};
