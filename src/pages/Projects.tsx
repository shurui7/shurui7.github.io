import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import GlassCard from "@/components/GlassCard";
import HealthHubEmbed from "@/components/HealthHubEmbed";
import UDSEmbed from "@/components/UDSEmbed";
import { ExternalLink, FigmaIcon, Github, Globe, YoutubeIcon } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string; // Make githubUrl optional
  liveUrl?: string; // Make liveUrl optional
  imageUrl?: string; // Use this for preview image
  liveIcon?: React.ReactNode;
  liveText?: string; // Customizable Live Demo text
  liveUrl2?: string; // Second live demo button
  liveIcon2?: React.ReactNode;
  liveText2?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showHealthHub, setShowHealthHub] = useState(false);
  const [showUDSHub, setShowUDSHub] = useState(false);
  const { t } = useTranslation();

  const projects: Project[] = [
	{
		id: '1',
		title: t("projects.project1.title"),
		description: t("projects.project1.description"),
		longDescription: t("projects.project1.longDescription"),
		technologies: [
			'Unity',
			'C#',
			'Game Development',
			'Interactive Design',
			'Photoshop',
		],
		githubUrl: 'https://github.com/shurui7/BeatTheDev-Game',
		liveUrl: 'https://shurui7.itch.io/beatthedev',
		liveIcon: <Globe size={16} />,
		imageUrl: '/previewBeatTheDev.png',
		liveText: t("projects.download"),
	},
	{
		id: '2',
		title: t("projects.project2.title"),
		description: t("projects.project2.description"),
		longDescription: t("projects.project2.longDescription"),
		technologies: [
			'React',
			'JavaScript',
			'Bootstrap',
			'React Router',
			'Emotion',
			'React Icons',
			'API Integration',
		],
		githubUrl: 'https://github.com/shurui7/HealthHubUDEM',
		imageUrl: '/previewHealthHub.png',
		liveUrl: '/health-hub',
		liveText: t("projects.viewWebsite"),
		liveIcon: <Globe size={16} />,
	},
	{
		id: '3',
		title: t("projects.project3.title"),
		description: t("projects.project3.description"),
		longDescription: t("projects.project3.longDescription"),
		technologies: ['JavaScript', 'Node.js', 'Algorithms'],
		githubUrl: 'https://github.com/shurui7/project_euler_solutions',
		imageUrl: '/previewProjectEuler.png',
		liveText: t("projects.projectEuler"),
		liveUrl: 'https://projecteuler.net/',
		liveIcon: <Globe size={16} />,
	},
	{
		id: '4',
		title: t("projects.project4.title"),
		description: t("projects.project4.description"),
		longDescription: t("projects.project4.longDescription"),
		technologies: ['C++', 'Arduino', 'Robotics'],
		githubUrl: 'https://github.com/shurui7/MCAR-Script/blob/main/MCARS.ino',
		imageUrl: '/previewRobotics.png',
		liveUrl: 'https://youtu.be/FNRo6cZVB58',
		liveIcon: <YoutubeIcon size={16} />,
		liveText: t("projects.demoVideo"),
		liveUrl2: 'https://www.youtube.com/watch?v=2g92PguIc1o',
		liveIcon2: <YoutubeIcon size={16} />,
		liveText2: t("projects.demoVideo2"),
	},
	{
		id: '5',
		title: t("projects.project5.title"),
		description: t("projects.project5.description"),
		longDescription: t("projects.project5.longDescription"),
		technologies: ['LM Studio', 'API', 'n8n', 'Qwen Ai Model'],
		githubUrl:
			'https://github.com/shurui7/AiVideoGenerator/blob/main/AI%20Video%20Creator%20n8n.json',
		imageUrl: '/previewAiAutomation.png',
	},
	{
		id: '6',
		title: t("projects.project6.title"),
		description: t("projects.project6.description"),
		longDescription: t("projects.project6.longDescription"),
		technologies: [
			'React',
			'JavaScript',
			'Emotion',
			'React Router',
			'React Icons',
			'Bootstrap',
		],
		githubUrl: 'https://github.com/shurui7/DemoHealthWebsite',
		imageUrl: '/previewUDS.png',
		liveUrl: '/uds-hub',
		liveText: t("projects.viewWebsite"),
		liveIcon: <Globe size={16} />,
	},
	{
		id: '7',
		title: t("projects.project7.title"),
		description: t("projects.project7.description"),
		longDescription: t("projects.project7.longDescription"),
		technologies: ['React Native', 'Figma', 'Styled Components'],
		liveUrl: 'https://www.youtube.com/watch?v=L3-pcpRsydo',
		liveIcon: <YoutubeIcon size={16} />,
		liveText: t("projects.demoVideo"),
		liveUrl2:
			'https://www.figma.com/design/oYOJ1IEGe6BjUNvVQUFJI9/Untitled?node-id=4-83&t=FZ8UV57nr6boyFch-1',
		liveIcon2: <FigmaIcon size={16} />,
		liveText2: t("projects.figmaDesign"),
		imageUrl: '/previewFigma.png',
	},
	{
		id: '8',
		title: t("projects.project8.title"),
		description: t("projects.project8.description"),
		longDescription: t("projects.project8.longDescription"),
		technologies: [
			'Unity',
			'C#',
			'Game Development',
			'Interactive Design',
			'Photoshop',
		],
		githubUrl: 'https://github.com/shurui7/WhiskersLabyrinth',
		liveUrl: 'https://shurui7.itch.io/whiskers-labyrinth',
		liveIcon: <Globe size={16} />,
		imageUrl: '/previewWhiskers.png',
		liveText: t("projects.download"),
	},
]

  const handleProjectClick = (project: Project) => {
    if (project.id === '2') {
      // Health Hub project - show embedded website
      setShowHealthHub(true);
    } else if (project.id === '6') {
      // UDS Hub project - show embedded website
      setShowUDSHub(true);
    } else {
      // Other projects - show modal
      setSelectedProject(project);
    }
  };

  if (showHealthHub) {
    return <HealthHubEmbed onBack={() => setShowHealthHub(false)} />;
  }

  if (showUDSHub) {
    return <UDSEmbed onBack={() => setShowUDSHub(false)} />;
  }

  return (
    <div className="min-h-screen px-6 py-24">
      <Navigation />
      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            {t("projects.title")}
          </h1>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlassCard
              key={project.id}
              hover
              className={`stagger-animation`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                onClick={() => handleProjectClick(project)}
                className="space-y-4"
              >
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title + ' preview'}
                    className="aspect-video w-full object-cover rounded-md"
                  />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-accent-lavender to-accent-mint rounded-md opacity-50"></div>
                )}
                <div>
                  <h3 className="text-lg font-medium text-glass-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/20 text-primary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <GlassCard className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-medium text-glass-foreground">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              {selectedProject.imageUrl ? (
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title + ' preview'}
                  className="aspect-video w-full object-cover rounded-md"
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-accent-lavender to-accent-mint rounded-md opacity-50"></div>
              )}

              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="space-y-3">
                <h4 className="font-medium text-glass-foreground">{t("projects.technologies")}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 bg-primary/20 text-primary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-glass border border-glass-border rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <Github size={16} />
                    <span>{t("projects.code")}</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-md hover:bg-primary/30 transition-colors"
                  >
                    {selectedProject.liveIcon || <ExternalLink size={16} />}
                    <span>{selectedProject.liveText || t("projects.liveDemo")}</span>
                  </a>
                )}
                {selectedProject.liveUrl2 && (
                  <a
                    href={selectedProject.liveUrl2}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground rounded-md hover:bg-primary/30 transition-colors"
                  >
                    {selectedProject.liveIcon2 || <ExternalLink size={16} />}
                    <span>{selectedProject.liveText2 || t("projects.liveDemo2")}</span>
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default Projects;