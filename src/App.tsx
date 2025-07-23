import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  Chip,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

  const features = [
    {
      title: 'React 19',
      description:
        'Latest React with concurrent features and improved performance',
      icon: '⚛️',
    },
    {
      title: 'TypeScript',
      description: 'Full type safety and better developer experience',
      icon: '📘',
    },
    {
      title: 'Material-UI v7',
      description: 'Beautiful, accessible, and customizable components',
      icon: '🎨',
    },
    {
      title: 'Vite',
      description: 'Lightning-fast build tool and development server',
      icon: '⚡',
    },
    {
      title: 'ESLint + Prettier',
      description: 'Code quality and consistent formatting',
      icon: '✨',
    },
    {
      title: 'Yarn',
      description: 'Fast, reliable, and secure package management',
      icon: '🧶',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar */}
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            React Template Project
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }} role='presentation'>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant='h2' component='h1' gutterBottom>
            Welcome to Your React Template
          </Typography>
          <Typography variant='h5' color='text.secondary' paragraph>
            A modern, production-ready React application template with
            Material-UI v7, TypeScript, and all the tools you need to build
            amazing applications.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button variant='contained' size='large' sx={{ mr: 2 }}>
              Get Started
            </Button>
            <Button variant='outlined' size='large'>
              Learn More
            </Button>
          </Box>
        </Box>

        {/* Features Grid */}
        <Typography variant='h4' component='h2' gutterBottom sx={{ mb: 4 }}>
          Features
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 6 }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ flex: '1 1 300px', minWidth: 0 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography variant='h1' sx={{ fontSize: '3rem', mb: 2 }}>
                    {feature.icon}
                  </Typography>
                  <Typography variant='h6' component='h3' gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Contact Form */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant='h5' component='h3' gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
                <TextField
                  fullWidth
                  label='Name'
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  margin='normal'
                />
              </Box>
              <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
                <TextField
                  fullWidth
                  label='Email'
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  margin='normal'
                />
              </Box>
              <Box sx={{ flex: '1 1 100%', minWidth: 0 }}>
                <TextField
                  fullWidth
                  label='Message'
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  margin='normal'
                />
              </Box>
              <Box sx={{ flex: '1 1 100%', minWidth: 0 }}>
                <Button variant='contained' size='large'>
                  Send Message
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <EmailIcon
                  sx={{ fontSize: 40, color: 'primary.main', mb: 2 }}
                />
                <Typography variant='h6' gutterBottom>
                  Email
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  contact@example.com
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <PhoneIcon
                  sx={{ fontSize: 40, color: 'primary.main', mb: 2 }}
                />
                <Typography variant='h6' gutterBottom>
                  Phone
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  +1 (555) 123-4567
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <LocationIcon
                  sx={{ fontSize: 40, color: 'primary.main', mb: 2 }}
                />
                <Typography variant='h6' gutterBottom>
                  Location
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  123 Main St, City, State
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant='body2' color='text.secondary'>
            Built with ❤️ using React, TypeScript, and Material-UI
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Chip label='React' avatar={<Avatar>R</Avatar>} sx={{ mr: 1 }} />
            <Chip
              label='TypeScript'
              avatar={<Avatar>T</Avatar>}
              sx={{ mr: 1 }}
            />
            <Chip
              label='Material-UI'
              avatar={<Avatar>M</Avatar>}
              sx={{ mr: 1 }}
            />
            <Chip label='Vite' avatar={<Avatar>V</Avatar>} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
