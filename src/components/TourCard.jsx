import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { AccessTime } from '@mui/icons-material';

export const TourCard = ({ tour }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link component={RouterLink} to={`/tour/${tour.id}`} underline="none">
                <Paper
                    elevation={3}
                    sx={{
                        overflow: 'hidden',
                        '&:hover': {
                            boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.5)',
                        },
                    }}
                >
                    {/* tour image */}
                    <img
                        src={tour.image}
                        alt="poster"
                        style={{ width: '100%', height: '7rem' }}
                    />

                    <Box p={1}>
                        {/* tour name */}
                        <Typography variant="subtitle1">{tour.name}</Typography>

                        {/* tour duration */}
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

                        {/* tour rating */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mt: 1,
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

                        {/* tour price */}
                        <Box>
                            <Typography variant="h6" mt={1}>
                                From ${tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Link>
        </Grid>
    );
};
