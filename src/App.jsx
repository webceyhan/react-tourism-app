import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { SearchAppBar } from './components/AppBar';
import { TourCard } from './components/TourCard';
import cities from './data.json';
import './App.css';

export const App = () => {
    return (
        <div className="App">
            <SearchAppBar />
            <Container sx={{ marginY: 5 }}>
                {cities.map((city) => (
                    <>
                        <Typography variant="h4" mt={5} mb={3}>
                            Top {city.name} Tours
                        </Typography>
                        <Grid container spacing={5}>
                            {city.tours.map((tour, index) => (
                                <TourCard tour={tour} key={index} />
                            ))}
                        </Grid>
                    </>
                ))}
            </Container>
        </div>
    );
};
