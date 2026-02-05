import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wellthy – Wellness that pays</title>
        <meta name="description" content="Move more. Stay consistent. Get rewarded." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>
              Wellthy
            </h1>
            <p className={styles.tagline}>Wellness that pays</p>
            <p className={styles.subtitle}>
              Move more. Stay consistent. Get rewarded.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                Download for iOS
              </button>
              <button className={styles.secondaryButton}>
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepIcon}>🏃</div>
                <h3 className={styles.stepTitle}>Move</h3>
                <p className={styles.stepText}>
                  Your activity is tracked automatically via Apple Health. No GPS, no start/stop.
                </p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepIcon}>🔥</div>
                <h3 className={styles.stepTitle}>Stay Consistent</h3>
                <p className={styles.stepText}>
                  Build your streak. Consistency beats intensity. Get bonus credits for daily movement.
                </p>
              </div>
              
              <div className={styles.step}>
                <div className={styles.stepIcon}>✨</div>
                <h3 className={styles.stepTitle}>Get Rewarded</h3>
                <p className={styles.stepText}>
                  Earn credits, unlock collectibles, and feel progress every single day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collect & Progress */}
        <section className={`${styles.section} ${styles.collectSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Collect & Progress</h2>
            <p className={styles.sectionSubtitle}>
              Digital sneakers inspired by STEPN's playful aesthetic, but with zero crypto risk
            </p>
            <div className={styles.rarityGrid}>
              <div className={`${styles.rarityCard} ${styles.common}`}>
                <span className={styles.rarityEmoji}>👟</span>
                <h4 className={styles.rarityName}>Common</h4>
                <p className={styles.rarityText}>Unlocked through daily movement</p>
              </div>
              <div className={`${styles.rarityCard} ${styles.rare}`}>
                <span className={styles.rarityEmoji}>👟</span>
                <h4 className={styles.rarityName}>Rare</h4>
                <p className={styles.rarityText}>Earned through consistency</p>
              </div>
              <div className={`${styles.rarityCard} ${styles.epic}`}>
                <span className={styles.rarityEmoji}>👟</span>
                <h4 className={styles.rarityName}>Epic</h4>
                <p className={styles.rarityText}>Reserved for the most dedicated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Train with Real People</h2>
            <p className={styles.sectionSubtitle}>
              Connect with curated trainers who value consistency over intensity
            </p>
            <div className={styles.trainerCTA}>
              <p className={styles.trainerText}>
                Are you a trainer? Join Wellthy to reach people who care about sustainable fitness.
              </p>
              <button className={styles.secondaryButton}>
                Join as Trainer
              </button>
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Trust & Safety First</h2>
            <div className={styles.trustGrid}>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>🚫</span>
                <h4 className={styles.trustTitle}>No Crypto</h4>
                <p className={styles.trustText}>
                  No wallets, no tokens, no financial promises
                </p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>🔒</span>
                <h4 className={styles.trustTitle}>Privacy First</h4>
                <p className={styles.trustText}>
                  Read-only Apple Health access. Data stays on your device.
                </p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>♻️</span>
                <h4 className={styles.trustTitle}>Sustainable</h4>
                <p className={styles.trustText}>
                  Built to last, not hype. No fragile economics.
                </p>
              </div>
              <div className={styles.trustCard}>
                <span className={styles.trustIcon}>✅</span>
                <h4 className={styles.trustTitle}>Review Safe</h4>
                <p className={styles.trustText}>
                  Conservative, compliant, transparent design
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`${styles.section} ${styles.finalCTA}`}>
          <div className="container">
            <h2 className={styles.ctaTitle}>Start Your Streak Today</h2>
            <p className={styles.ctaSubtitle}>
              Free to start. No credit card required.
            </p>
            <button className={styles.primaryButton}>
              Download for iOS
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className="container">
            <p className={styles.footerText}>
              © 2024 Wellthy. Built with discipline. Shipped with trust.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
