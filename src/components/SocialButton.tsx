import React from 'react';
import { SocialLink } from '../types';
import { Facebook, Globe, Instagram, Video, ExternalLink } from 'lucide-react';

interface SocialButtonProps {
  link: SocialLink;
}

const SocialButton: React.FC<SocialButtonProps> = ({ link }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'globe':
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card interactive-element flex items-center justify-between w-full p-5 mb-4"
    >
      <div className="flex items-center">
        <div className="mr-4 p-2 rounded-full bg-primary/20 text-primary">
          {getIcon(link.icon)}
        </div>
        <span className="font-medium text-white">{link.name}</span>
      </div>
      <span className="text-sm font-medium text-light-purple hover:text-white transition-colors duration-200">{link.actionText} →</span>
    </a>
  );
};

export default SocialButton;