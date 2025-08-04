// ContactInfo.tsx
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactInfo: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        GET IN TOUCH
      </Typography>
      <Typography variant="body1" mb={4}>
        Eleifend est vitae tincidunt ligula. Morbi pharetra sem id lectus iaculis,
        nec commodo mauris interdum ipsum neque, ullamcorper diam mollis rutrum nulla.
        Porta quis ante laoreet lobortis.
      </Typography>

      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <HomeIcon />
          <Typography>info@yourmail.com</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <PhoneIcon />
          <Typography>212-328-0493</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon />
          <Typography>1521 Farnum Road, New York NY 10011</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactInfo;
