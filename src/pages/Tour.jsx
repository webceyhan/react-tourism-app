import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import { ImageCollage } from '../components/ImageCollage';
import { TourFAQ } from '../components/TourFAQ';
import { BasicModal } from '../components/BasicModal';

export const Tour = () => {
    return (
        <Container sx={{ marginY: 5 }}>
            <Typography variant="h4" mb={2}>
                Explore the world in Vegas
            </Typography>

            <Grid container spacing={1} mb={2}>
                <Grid item xs={12} md={8}>
                    <img
                        src="https://media.timeout.com/images/105124791/750/422/image.jpg"
                        style={{ width: '100%', objectFit: 'cover' }}
                        height={325}
                        alt="Vegas"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ImageCollage />
                </Grid>
            </Grid>

            <Box mb={3}>
                <Typography variant="h6" mb={1}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" mb={2}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Culpa quae molestiae sed nostrum minima fugiat quaerat quas
                    ex quasi aperiam? Amet consequuntur repellat a perspiciatis
                    dignissimos excepturi sequi iure quia! Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Culpa quae molestiae sed
                    nostrum minima fugiat quaerat quas ex quasi aperiam? Amet
                    consequuntur repellat a perspiciatis dignissimos excepturi
                    sequi iure quia!
                </Typography>
            </Box>

            <Box mb={3}>
                <Typography variant="h6" mb={1}>
                    Frequently Asked Questions
                </Typography>
                <TourFAQ />
            </Box>

            <br />
            <br />

            <Paper
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation showLabels>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    );
};
