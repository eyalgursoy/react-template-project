import { Card, CardContent, Typography } from '@mui/material';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Typography variant='h1' sx={{ fontSize: '3rem', mb: 2 }}>
          {icon}
        </Typography>
        <Typography variant='h6' component='h3' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
