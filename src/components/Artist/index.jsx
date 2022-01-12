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
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imageUrl}
        alt="artist"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Artist;
