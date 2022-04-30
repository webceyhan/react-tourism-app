import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TourCard } from './components/TourCard';

export const App = () => {
    return (
        <div className="App">
            <Container>
                <Grid container spacing={5}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </Grid>
            </Container>
        </div>
    );
};
