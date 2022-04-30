import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ImageCollage } from '../components/ImageCollage';

export const Tour = () => {
    return (
        <Container sx={{ marginY: 5 }}>
            <Typography variant="h4" mb={3}>
                Explore the world in Vegas
            </Typography>
            <Box
                mb={3}
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
            <Box>
                <Typography variant="h6" mb={2}>
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
        </Container>
    );
};
