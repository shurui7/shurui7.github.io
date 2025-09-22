import Navigation from "@/components/Navigation";
import GlassCard from "@/components/GlassCard";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen px-6 py-24">
      <Navigation />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            {t("about.title")}
          </h1>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="space-y-8">
          <GlassCard className="stagger-animation">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent-lavender/30 flex items-center justify-center text-muted-foreground border border-glass-border flex-shrink-0 overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="space-y-4 flex-1">
                <h2 className="text-2xl font-medium text-glass-foreground">
                  {t("about.greeting")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.description1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.description2")}
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="stagger-animation">
              <h3 className="text-xl font-medium text-glass-foreground mb-4">
                {t("about.technicalSkills")}
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-glass-foreground mb-2">
                    {t("about.codingSkills")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React',
                      'Node.js',
                      'React Native',
                      'Expo',
                      'JavaScript',
                      'Tailwind CSS',
                      'Bootstrap',
                      'MySQL',
                      'MongoDB',
                      'Auth0',
                      'C',
                      'C#',
                      'C++',
                      'Python',
                    ].map(skill => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 bg-primary/20 text-primary-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-glass-foreground mb-2">
                    {t("about.designTools")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Visual Studio Code',
                      'Visual Studio',
                      'JetBrains IDEs',
                      'Figma',
                      'Linux',
                      'LM Studio',
                      'Ollama',
                      'Adobe Creative Suite',
                      'GitHub',
                      'Git',
                      'Vercel',
                    ].map(skill => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1 bg-accent-lavender/50 text-glass-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="stagger-animation">
              <h3 className="text-xl font-medium text-glass-foreground mb-4">
                {t("about.howIWork")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-glass-foreground mb-2">
                    {t("about.planning")}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {t("about.planningDescription")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-glass-foreground mb-2">
                    {t("about.development")}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {t("about.developmentDescription")}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-glass-foreground mb-2">
                    {t("about.finalCheck")}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {t("about.finalCheckDescription")}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="stagger-animation text-center">
            <h3 className="text-xl font-medium text-glass-foreground mb-4">
              {t("about.letsConnect")}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("about.connectDescription")}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:8.arsenii@gmail.com"
                className="px-6 py-2 bg-primary/20 text-primary-foreground rounded-md hover:bg-primary/30 transition-colors"
              >
                {t("about.emailMe")}
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
