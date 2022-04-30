import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchAppBar } from './components/AppBar';
import { Home } from './pages/Home';
import { Tour } from './pages/Tour';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'body2' },
                    style: { fontSize: '13px' },
                },
                {
                    props: { variant: 'body3' },
                    style: { fontSize: '12px' },
                },
            ],
        },
    },
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <SearchAppBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tour/:id" element={<Tour />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};
