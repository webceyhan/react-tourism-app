import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ImageCollage } from '../components/ImageCollage';

export const Tour = () => {
    return (
        <Container sx={{ marginY: 5 }}>
            <Typography variant="h4" mt={5} mb={3}>
                Explore the world in Vegas
            </Typography>
            <Box
                mt={3}
                sx={{
                    display: 'flex',
                }}
            >
                <img
                    src="https://media.timeout.com/images/105124791/750/422/image.jpg"
                    height={325}
                />
                <ImageCollage />
            </Box>
        </Container>
    );
};
