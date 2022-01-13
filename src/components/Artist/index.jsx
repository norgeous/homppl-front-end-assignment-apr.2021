/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Artist = ({ artistData }) => {
  if (!artistData) return null;

  const {
    name,
    image_url: imageUrl,
  } = artistData;

  return (
    <Box m={2}>
      <Card sx={{ display: 'flex' }} raised>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={imageUrl}
          alt="artist"
        />
        <Box>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default Artist;
