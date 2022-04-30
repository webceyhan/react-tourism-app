import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img src={mock.image} alt="poster" className='img' />
                <Typography variant="subtitle1">
                    {mock.name}
                </Typography>
            </Paper>
        </Grid>
    );
};
