import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchAppBar } from './components/AppBar';
import { Home } from './pages/Home';
import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <SearchAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
