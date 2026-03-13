import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getMdxContent, getYamlContent } from '@/lib/content';
import type { ContactData, SkillsData } from '@/types';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import { routing } from '@/routing';

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [tAbout, tSkills, tContact] = await Promise.all([
    getTranslations({ locale, namespace: 'about' }),
    getTranslations({ locale, namespace: 'skills' }),
    getTranslations({ locale, namespace: 'contact' }),
  ]);

  // Load content from files
  const aboutContent = getMdxContent(locale, 'about');
  const skillsData = getYamlContent<SkillsData>(locale, 'skills');
  const contactData = getYamlContent<ContactData>(locale, 'contact');

  return (
    <>
      <AboutSection
        content={aboutContent}
        title={tAbout('title')}
        subtitle={tAbout('subtitle')}
      />
      <SkillsSection
        data={skillsData}
        title={tSkills('title')}
        subtitle={tSkills('subtitle')}
      />
      <ContactSection
        data={contactData}
        title={tContact('title')}
        subtitle={tContact('subtitle')}
      />
    </>
  );
}
