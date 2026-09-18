"use client";
import { portfolioData } from "@/data/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

function XIcon({ size = 24 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            aria-hidden="true"
        >
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
    );
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: XIcon,
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
          <SectionHeading title="Skills" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}
          >
            {/* Core — the two pillars of the work */}
            {Object.entries(portfolioData.skills.core).map(([group, skills]) => (
              <div key={group} className="tier-block">
                <span className="tier-label">{group}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', flex: 1 }}>
                  {(skills as string[]).map((skill, index) => (
                    <SkillBadge key={index} name={skill} variant="core" />
                  ))}
                </div>
              </div>
            ))}

            {/* Supporting stack */}
            {Object.entries(portfolioData.skills.stack).map(([group, skills]) => (
              <div key={group} className="tier-block">
                <span className="tier-label">{group}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', flex: 1 }}>
                  {(skills as string[]).map((skill, index) => (
                    <SkillBadge key={index} name={skill} variant="core" />
                  ))}
                </div>
              </div>
            ))}

            {/* Tools */}
            {Object.entries(portfolioData.skills.tools).map(([group, skills]) => (
              <div key={group} className="tier-block">
                <span className="tier-label">{group}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', flex: 1 }}>
                  {(skills as string[]).map((skill, index) => (
                    <SkillBadge key={index} name={skill} variant="core" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container">
          <SectionHeading title="Experience" />
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
          <SectionHeading title="Education" />
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
          <SectionHeading title="Selected Work" />
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
          <SectionHeading title="Notes" />
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
                  <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>note/</span>
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
      <section id="contact" className="section-padding" style={{ paddingBottom: 'var(--space-section)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <SectionHeading title="Contact" />
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
              className="transition-standard"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.1rem',
                textDecoration: 'none',
                color: 'var(--accent)',
                opacity: 0.85,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
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
        background: 'radial-gradient(circle, rgba(109,93,255,0.05) 0%, transparent 65%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
    </main>
  );
}