'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
} from '@mui/material';

const themeColor = '#256EFF';
const textColor = '#0A0908';
const backgroundColor = '#FCFCFC';

const programs = [
  {
    title: 'Support Groups for Women, Caregivers, and Trauma Survivors',
    description:
      'This program creates safe and empowering circles for women, caregivers, and individuals overcoming trauma. Through guided conversations and therapeutic support, we help participants rebuild confidence, share experiences, and develop effective coping mechanisms in a non-judgmental environment.',
  },
  {
    title: 'Mental Health Workshops and Training',
    description:
      'We provide structured training sessions led by mental health professionals covering emotional wellness, stress management, and psychological resilience. These interactive workshops help individuals, families, and organizations better understand mental health and support systems.',
  },
  {
    title: 'School & Workplace Wellness Programs',
    description:
      'Our integrated wellness programs are tailored for schools and workplaces. We focus on mental fitness, mindfulness, emotional regulation, and burnout prevention to cultivate balanced, high-performing, and emotionally intelligent environments for students and staff.',
  },
  {
    title: 'Outreach for Underserved Communities',
    description:
      'This outreach program brings vital mental health resources to marginalized and rural communities. Through mobile clinics, community talks, and volunteer-led support sessions, we bridge gaps in access and education with a culturally sensitive approach.',
  },
  {
    title: 'Eleos Mama Circle: A Safe Space for Mothers',
    description:
      'Eleos Mama Circle offers a compassionate space for mothers to connect, share challenges, and build mental and emotional strength. Topics include postpartum care, emotional fatigue, parenting stress, and holistic self-care supported by trained facilitators.',
  },
  {
    title: 'Pre-Menopause & Menopause Circle',
    description:
      'This program is designed for women navigating pre-menopause and menopause. It provides education on hormonal changes, emotional balance, lifestyle support, and peer-to-peer empowerment to promote graceful transitions with dignity and community.',
  },
  {
    title: 'Youth Empowerment Bootcamps',
    description:
      'Our youth bootcamps combine personal development training, mental health education, and leadership-building workshops. Through hands-on learning and mentorship, we equip young people with skills for emotional strength, self-awareness, and community impact.',
  },
  {
    title: "Men's Emotional Health Roundtables",
    description:
      'A judgment-free, confidential space for men to discuss emotional health, societal pressure, identity, and healing. Through guided conversation and peer bonding, men gain emotional intelligence and break the stigma around vulnerability.',
  },
  {
    title: 'Wellness Retreats in Nature',
    description:
      'These immersive nature retreats promote deep healing through guided therapy, breathwork, mindful movement, and group connection. Participants unplug from daily stressors, rediscover inner calm, and return renewed with practical tools for lasting wellness.',
  },
];

const ProgramsPage = () => {
  return (
    <Box sx={{ backgroundColor, py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            color: textColor,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.75rem' },
          }}
        >
          Our Wellness Programs
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            color: textColor,
            textAlign: 'center',
            maxWidth: '720px',
            mx: 'auto',
            mb: 5,
            fontSize: { xs: '1rem', md: '1.125rem' },
          }}
        >
          We offer tailored mental health and wellness programs to uplift and empower every member of our community. Explore our offerings and find the support that speaks to your journey.
        </Typography>

        <Grid container spacing={4}>
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#fff',
                  border: `2px solid ${themeColor}`,
                  borderRadius: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: themeColor, fontWeight: 700, mb: 1.5 }}
                >
                  {program.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: textColor, mb: 2, flexGrow: 1 }}
                >
                  {program.description}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 'auto',
                    backgroundColor: themeColor,
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#1e50cc',
                    },
                  }}
                >
                  Apply for this Program
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProgramsPage;
