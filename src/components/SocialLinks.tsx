import React from 'react';
import { SocialLink } from '../types';
import SocialButton from './SocialButton';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <section className="px-6 py-8">
      <div className="grid gap-4">
        {links.map((link) => (
          <SocialButton key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;