'use client';

import { useState, type ReactElement, type FormEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import { useTranslations } from 'next-intl';
import type { ContactData } from '@/types';
import SectionWrapper from '@/components/ui/SectionWrapper';

const socialIconMap: Record<string, ReactElement> = {
  GitHub: <GitHubIcon />,
  LinkedIn: <LinkedInIcon />,
  Twitter: <TwitterIcon />,
};

interface ContactSectionProps {
  data: ContactData;
  title: string;
  subtitle: string;
}

export default function ContactSection({ data, title, subtitle }: ContactSectionProps) {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to a form backend (e.g. AWS SES, Formspree, Resend)
    // For now, just simulate a success state
    setStatus('success');
  };

  return (
    <SectionWrapper id="contact" title={title} subtitle={subtitle}>
      <Grid container spacing={5}>
        {/* Contact info */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {data.email && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                    flexShrink: 0,
                  }}
                >
                  <EmailIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="overline" color="text.secondary" display="block">
                    {t('info.email')}
                  </Typography>
                  <MuiLink href={`mailto:${data.email}`} color="inherit" underline="hover">
                    {data.email}
                  </MuiLink>
                </Box>
              </Box>
            )}

            {data.phone && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'secondary.contrastText',
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="overline" color="text.secondary" display="block">
                    {t('info.phone')}
                  </Typography>
                  <Typography>{data.phone}</Typography>
                </Box>
              </Box>
            )}

            {data.location && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    bgcolor: 'grey.200',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'text.secondary',
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="overline" color="text.secondary" display="block">
                    {t('info.location')}
                  </Typography>
                  <Typography>{data.location}</Typography>
                </Box>
              </Box>
            )}

            {/* Social links */}
            {data.social && data.social.length > 0 && (
              <Box sx={{ display: 'flex', gap: 1, pt: 1 }}>
                {data.social.map((link) => (
                  <IconButton
                    key={link.platform}
                    component={MuiLink}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {socialIconMap[link.platform] ?? link.platform[0]}
                  </IconButton>
                ))}
              </Box>
            )}
          </Box>
        </Grid>

        {/* Contact form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              {status === 'success' ? (
                <Alert severity="success" sx={{ borderRadius: 2 }}>
                  {t('form.success')}
                </Alert>
              ) : (
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                >
                  <TextField
                    label={t('form.name')}
                    name="name"
                    required
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    label={t('form.email')}
                    name="email"
                    type="email"
                    required
                    fullWidth
                    variant="outlined"
                  />
                  <TextField
                    label={t('form.message')}
                    name="message"
                    required
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    {t('form.send')}
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
