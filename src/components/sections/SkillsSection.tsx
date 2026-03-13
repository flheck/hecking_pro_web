import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import type { SkillsData } from '@/types';
import SectionWrapper from '@/components/ui/SectionWrapper';

interface SkillsSectionProps {
  data: SkillsData;
  title: string;
  subtitle: string;
}

export default function SkillsSection({ data, title, subtitle }: SkillsSectionProps) {
  return (
    <SectionWrapper id="skills" title={title} subtitle={subtitle} alternate>
      <Grid container spacing={3}>
        {data.categories.map((category) => (
          <Grid size={{ xs: 12, md: 4 }} key={category.name}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                {/* Category header */}
                <Typography
                  variant="h6"
                  gutterBottom
                  fontWeight={700}
                  color="primary.main"
                  sx={{ mb: 3 }}
                >
                  {category.name}
                </Typography>

                {/* Skills list */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {category.skills.map((skill) => (
                    <Box key={skill.name}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mb: 0.75,
                        }}
                      >
                        <Typography variant="body2" fontWeight={500}>
                          {skill.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          bgcolor: 'divider',
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
