import type { EducationItem, ProjectItem, CertificateItem, ExperienceItem } from './types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'BS (Computer Science)',
    institution: 'University of the Punjab',
    period: '2024 - 2028',
  },
  {
    degree: 'FSc. (Pre-Engineering)',
    institution: 'Aspire College Zafarwal',
    period: '2022 - 2024',
  },
  {
    degree: 'Matric (Science)',
    institution: 'Govt High School Zafarwal',
    period: '2020 - 2022',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Cyber Security Intern',
    company: 'CodeAlpha',
    period: 'Aug 2025 - Present',
    location: 'Pakistan · Remote',
    type: 'Internship',
    description: [
      'Selected for a competitive cybersecurity internship program.',
      'Gaining hands-on experience in various security domains and methodologies.',
    ],
  },
  {
    role: 'Summer Intern',
    company: 'Pakistan Career Fair',
    period: 'Jun 2025 - Aug 2025',
    location: 'Pakistan · Remote',
    type: 'Internship',
    description: [
        'Selected for a prestigious online internship program focusing on professional development and industry skills.'
    ],
  },
  {
    role: 'Wordpress Developer',
    company: 'Fiverr',
    period: 'Jun 2025 - Aug 2025',
    location: 'Remote',
    type: 'Freelance',
    description: [
        'Delivered custom, responsive, and SEO-friendly WordPress websites for a variety of clients.'
    ],
  },
  {
    role: 'Web Developer',
    company: 'Orhanix',
    period: 'Feb 2025 - Jun 2025',
    location: 'Lahore, Punjab, Pakistan · Hybrid',
    type: 'Internship',
    description: [
        'Contributed to the development and maintenance of modern web applications.',
        'Collaborated within an agile team to meet project deadlines and feature goals.'
    ],
  },
  {
    role: 'Project Manager (AI Hackathon)',
    company: 'Orhanix',
    period: 'Mar 2025 - Apr 2025',
    location: 'Internal Initiative',
    type: 'Volunteer',
    description: [
        'Successfully managed an internal AI Hackathon event, coordinating between teams and resources.'
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'Cryptography Website',
    description: 'A responsive site introducing users to the fundamentals of Cryptography and Cryptanalysis.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Ahad-Parvaiz/Cryptography',
    liveUrl: 'https://cryptography-cryptanalysis.vercel.app/',
  },
  {
    title: 'Linux Introduction Website',
    description: 'An interactive website to introduce users to the Linux OS, its architecture, and distributions.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Ahad-Parvaiz/linux-intro',
    liveUrl: 'https://learn-linux-umber.vercel.app/',
  },
  {
    title: 'Nmap Cheat Sheet',
    description: 'An interactive web tool organizing 50+ essential Nmap commands for security professionals.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Ahad-Parvaiz/Nmap-Cheat-Sheet',
    liveUrl: 'https://nmap-cheat-sheet.vercel.app/',
  },
  {
    title: 'Introduction to Cybersecurity',
    description: 'An educational website explaining core cybersecurity concepts in a clean, interactive way.',
    skills: ['Cybersecurity', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Ahad-Parvaiz/Introduction-to-Cybersecurity',
    liveUrl: 'https://introduction-to-cybersecurity.vercel.app/',
  },
  {
    title: 'Secure Coding Review – Flask App',
    description: 'Performed a complete secure code audit on a login system built with Python Flask.',
    skills: ['Python', 'Flask', 'Bandit', 'bcrypt'],
    githubUrl: 'https://github.com/Ahad-Parvaiz/CodeAlpha-Secure-Coding-Review',
  },
  {
    title: 'Python Network Sniffer',
    description: 'A real-time network sniffer using Python and Scapy to capture and log TCP/IP packets.',
    skills: ['Python', 'Scapy', 'Networking'],
    githubUrl: 'https://github.com/Ahad-Parvaiz/CodeAlpha_Basic-Network-Sniffer',
  },
];

export const CERTIFICATIONS_DATA: CertificateItem[] = [
    { name: 'Cybersecurity Red Team Fundamentals', issuer: 'MindLuster', url: 'https://www.mindluster.com/student/certificate/f0d45e52' },
    { name: 'Ethical Hacking: Web Enumeration', issuer: 'Udemy', url: 'https://www.udemy.com/certificate/UC-ec44aca2-de3e-4000-a4d7-25a55dc7114e/' },
    { name: 'Fundamentals of Dark Web Training', issuer: 'SOCRadar', url: 'https://credsverse.com/credentials/1674f5f5-39a7-4005-b5a5-a55805df2960?preview=1' },
    { name: 'Introduction to Cybersecurity Awareness', issuer: 'HP LIFE', url: 'https://drive.google.com/file/d/1hAaeoKIAs6SxOe7Reh1tMVX6E0RGRYBs/view?usp=sharing' },
    { name: 'Red Team Mastery: Advanced Offensive Security', issuer: 'Udemy', url: 'https://www.udemy.com/certificate/UC-3bc14cbe-3462-449d-8720-4662b0e2eb46/' },
    { name: 'Ethical Hacking', issuer: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/L1XXT33UY7SK' },
    { name: 'Kali Linux', issuer: 'Coursera', url: 'https://www.coursera.org/account/accomplishments/verify/WFNJQW0GHA33' },
    { name: 'Network Mastery for Ethical Hackers', issuer: 'Udemy', url: 'https://www.udemy.com/certificate/UC-a9064671-5249-423a-b32a-9254fcba1b76/' },
];