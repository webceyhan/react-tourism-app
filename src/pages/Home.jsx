import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TourCard } from '../components/TourCard';
import cities from '../data.json';

export const Home = () => {
    return (
        <Container sx={{ marginY: 5 }}>
            {cities.map((city) => (
                <div key={city.id}>
                    <Typography variant="h4" mt={5} mb={3}>
                        Top {city.name} Tours
                    </Typography>
                    <Grid container spacing={5}>
                        {city.tours.map((tour, index) => (
                            <TourCard tour={tour} key={index} />
                        ))}
                    </Grid>
                </div>
            ))}
        </Container>
    );
};
