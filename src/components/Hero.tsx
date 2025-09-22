import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GlassCard from "./GlassCard";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t } = useTranslation();
  
  return (
		<section className='min-h-screen flex items-center justify-center px-6'>
			<div className='text-center max-w-4xl mx-auto'>
				<div className='fade-in'>
					<h1 className='text-5xl md:text-7xl font-light text-foreground mb-6 tracking-tight'>
						{t("hero.name")}
					</h1>
					<p className='text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-relaxed'>
						{t("hero.tagline")}
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-6 mt-16 stagger-animation'>
					<Link to='/about' className='block'>
						<GlassCard hover className='text-center h-full'>
							<h3 className='text-lg font-medium text-glass-foreground mb-2'>
								{t("hero.aboutTitle")}
							</h3>
							<p className='text-muted-foreground text-sm leading-relaxed'>
								{t("hero.aboutDescription")}
							</p>
						</GlassCard>
					</Link>

					<Link to='/projects' className='block stagger-animation'>
						<GlassCard hover className='text-center h-full'>
							<h3 className='text-lg font-medium text-glass-foreground mb-2'>
								{t("hero.projectsTitle")}
							</h3>
							<p className='text-muted-foreground text-sm leading-relaxed'>
								{t("hero.projectsDescription")}
							</p>
						</GlassCard>
					</Link>

					<button
						onClick={() => setIsContactModalOpen(true)}
						className='block stagger-animation w-full'
					>
						<GlassCard hover className='text-center h-full'>
							<h3 className='text-lg font-medium text-glass-foreground mb-2'>
								{t("hero.contactTitle")}
							</h3>
							<p className='text-muted-foreground text-sm leading-relaxed'>
								{t("hero.contactDescription")}
							</p>
						</GlassCard>
					</button>
				</div>
			</div>

			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
			/>
		</section>
	)
};

export default Hero;