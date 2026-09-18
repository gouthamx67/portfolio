"use client";
import { portfolioData } from "@/data/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

const iconMap: Record<string, React.ComponentType> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Mail: Mail,
};

export default function Home() {
  return (
    <main className="page">
      <Navbar />

      <Hero
        name={portfolioData.name}
        role={portfolioData.role}
        bio={portfolioData.bio}
      />

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container">
          <SectionHeading title="Skills" subtitle="My Technical Expertise" />
          <div className="skills-grid">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.1em',
                  borderBottom: '1px solid var(--card-border)',
                  paddingBottom: '0.5rem'
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {(skills as string[]).map((skill, index) => (
                    <SkillBadge key={index} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container">
          <SectionHeading title="Experience" subtitle="Where I've Worked" />
          <div className="experience-list">
            {portfolioData.experience.map(exp => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass"
                style={{ padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>{exp.role}</h3>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {exp.company} | {exp.location}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1rem' }}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{highlight}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="container">
          <SectionHeading title="Education" subtitle="My Academic Journey" />
          <div className="education-list">
            {portfolioData.education.map(edu => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass"
                style={{ padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>{edu.degree}</h3>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {edu.school} | {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <SectionHeading title="Selected Projects" subtitle="Building Digital Experiences" />
          <div className="projects-grid">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>


      {/* Blogs Section */}
      <section id="blogs" className="section-padding">
        <div className="container">
          <SectionHeading title="Blogs" subtitle="Sharing My Thoughts" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {portfolioData.blogs.map(blog => (
              <motion.a
                href={blog.link}
                key={blog.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  borderBottom: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  transition: 'background-color 0.3s ease',
                  flexDirection: 'column'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Blog</span>
                  <h4 style={{ fontSize: '1.5rem', marginTop: '0.25rem', marginBottom: '0.25rem' }}>{blog.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', maxWidth: 'none' }}>{blog.excerpt}</p>
                </div>
                <div className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExternalLink/>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading title="Get In Touch" subtitle="Let's Build Something Great" />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {portfolioData.socials.map(social => {
              const Icon = iconMap[social.icon] || Mail;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="glass"
                  style={{
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    margin: '0 auto'
                  }}
                >
                  <Icon/>
                </motion.a>
              );
            })}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href={portfolioData.socials.find(s => s.name === 'Email')?.url}
              className="script-text transition-standard"
              style={{ fontSize: '1.25rem', textDecoration: 'none', color: 'white', opacity: 0.8 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              {portfolioData.socials.find(s => s.name === 'Email')?.url.replace('mailto:', '')}
            </a>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              📞 {portfolioData.contact.phone}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              📍 {portfolioData.contact.location}
            </p>
          </div>
        </div>
      </section>


      {/* Background decoration */}
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--glow-white) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
    </main>
  );
}