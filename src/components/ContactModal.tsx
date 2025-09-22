import { X, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t } = useTranslation();
  
  if (!isOpen) return null;

  return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
			<div
				className='absolute inset-0 bg-black/20 backdrop-blur-sm'
				onClick={onClose}
			/>
			<div className='relative glass-card rounded-glass p-8 max-w-md w-full mx-4 fade-in'>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 p-2 text-muted-foreground hover:text-glass-foreground transition-colors'
				>
					<X className='w-5 h-5' />
				</button>

				<h2 className='text-2xl font-medium text-glass-foreground mb-6'>
					{t("contact.title")}
				</h2>

				<div className='space-y-4'>
					<div className='flex items-center gap-3'>
						<Mail className='w-5 h-5 text-primary' />
						<a
							href='mailto:8.arsenii@gmail.com'
							className='text-glass-foreground hover:text-primary transition-colors'
						>
							8.arsenii@gmail.com
						</a>
					</div>

					<div className='flex items-center gap-3'>
						<Phone className='w-5 h-5 text-primary' />
						<a
							href='tel:+14508584132'
							className='text-glass-foreground hover:text-primary transition-colors'
						>
							+1 (450) 858-4132
						</a>
					</div>

					<div className='flex items-center gap-3'>
						<MapPin className='w-5 h-5 text-primary' />
						<span className='text-glass-foreground'>Mirabel, QC</span>
					</div>

					<div className='pt-4 border-t border-glass-border'>
						<div className='flex gap-4'>
							<a
								href='https://github.com/shurui7'
								className='flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors'
							>
								<Github className='w-5 h-5' />
								<span>{t("contact.github")}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ContactModal;