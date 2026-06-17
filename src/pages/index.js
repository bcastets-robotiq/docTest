import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/bcastets-robotiq/docTest"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const features = [
  {
    title: 'Docs',
    description: 'Test documentation structure, sidebars, and content organization.',
  },
  {
    title: 'Plugins',
    description: 'Experiment with Docusaurus plugins and theme configurations safely.',
  },
  {
    title: 'Deployment',
    description: 'Validate build and deploy workflows before rolling out to production.',
  },
];

export default function Home() {
  return (
    <Layout description="A sandbox for testing Docusaurus features">
      <Hero />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className={styles.featureGrid}>
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
