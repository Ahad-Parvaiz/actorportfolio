// Fix: Import React to resolve 'Cannot find namespace 'React'' error.
import React from 'react';

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  skills: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}