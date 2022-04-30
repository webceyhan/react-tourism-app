import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { AccessTime } from '@mui/icons-material';

const mock = {
    id: 1,
    name: 'Immerse into the Falls',
    duration: 5,
    rating: 4.5,
    numberOfReviews: 462,
    price: 465,
    image: 'https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg',
};

export const TourCard = () => {
    return (
        <Grid item xs={12} md={3}>
            <Paper elevation={3}>
                <img src={mock.image} alt="poster" className="img" />
                <Box px={1}>
                    <Typography variant="subtitle1">{mock.name}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <AccessTime sx={{ width: 14 }} />
                        <Typography variant="body2" ml={0.5}>
                            {mock.duration} hours
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
                            value={mock.rating}
                            precision={0.5}
                            size="small"
                            readOnly
                        />
                        <Typography variant="body2" ml={0.5}>
                            {mock.rating}
                        </Typography>
                        <Typography variant="body2" ml={1.5}>
                            ({mock.numberOfReviews} reviews)
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};
