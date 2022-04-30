import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { AccessTime } from '@mui/icons-material';

import { createTheme, ThemeProvider } from '@mui/material';

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

export const TourCard = ({ tour }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img src={tour.image} alt="poster" className="img" />
                    <Box px={1}>
                        <Typography variant="subtitle1">{tour.name}</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <AccessTime sx={{ width: 14 }} />
                            <Typography variant="body2" ml={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: 3,
                            }}
                        >
                            <Rating
                                name="read-only"
                                value={tour.rating}
                                precision={0.5}
                                size="small"
                                readOnly
                            />
                            <Typography variant="body2" ml={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant="body3" ml={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" mt={0}>
                                From ${tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};
