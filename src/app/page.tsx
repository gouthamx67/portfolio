"use client";
import { portfolioData } from "@/data/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

const iconMap: any = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Mail: Mail,
};

export default function Home() {
  return (
    <main>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 style={{
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.1em'
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {(skills as string[]).map((skill, index) => (
                    <SkillBadge key={index} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <SectionHeading title="Selected Projects" subtitle="Building Digital Experiences" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                  padding: '2.5rem 2rem',
                  borderBottom: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  transition: 'background-color 0.3s ease'
                }}
              >
                <div style={{ flex: 1 }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{blog.date}</span>
                  <h4 style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{blog.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>{blog.excerpt}</p>
                </div>
                <div className="glass" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExternalLink size={20} />
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
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {portfolioData.socials.map(social => {
              const Icon = iconMap[social.icon] || Mail;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="glass"
                  style={{
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%'
                  }}
                >
                  <Icon size={32} />
                </motion.a>
              );
            })}
          </div>
          <div style={{ marginTop: '4rem' }}>
            <a
              href={portfolioData.socials.find(s => s.name === 'Email')?.url}
              className="script-text transition-standard"
              style={{ fontSize: '2rem', textDecoration: 'none', color: 'white', opacity: 0.8 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
            >
              {portfolioData.socials.find(s => s.name === 'Email')?.url.replace('mailto:', '')}
            </a>
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
