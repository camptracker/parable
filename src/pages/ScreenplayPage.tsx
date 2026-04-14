import { useState, useEffect } from 'react';

export default function ScreenplayPage() {
  const [showInfo, setShowInfo] = useState(true);
  const [videoAvailable, setVideoAvailable] = useState(false);
  
  useEffect(() => {
    // Check if scene-1.mp4 exists
    fetch('/parable/videos/scene-1.mp4', { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          setVideoAvailable(true);
        }
      })
      .catch(() => {
        // Video not available yet
        setVideoAvailable(false);
      });
  }, []);

  return (
    <div className="screenplay-page" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>THE KEEPERS</h1>
        <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '0.25rem' }}>A 42-Lesson Epic</p>
        <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1rem' }}>
          Based on the History of Israel Series
        </p>
        <p style={{ fontSize: '0.9rem', color: '#999', fontStyle: 'italic' }}>
          Feature Film Screenplay • 150+ minutes
        </p>
      </header>

      {videoAvailable && (
        <div style={{
          background: 'var(--card-bg)',
          border: '2px solid var(--primary)',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>🎬 Generated Video - Scene 1</h2>
          <p style={{ marginBottom: '1rem' }}>
            Opening scene from THE KEEPERS, generated using Google Veo 2.0
          </p>
          <video
            controls
            style={{
              width: '100%',
              maxWidth: '800px',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}
            poster="/parable/images/history-of-israel/day-1.jpg"
          >
            <source src="/parable/videos/scene-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <strong>Scene:</strong> INT. TEMPLE MOUNT ARCHIVES - ENTRANCE - NIGHT<br />
            <strong>Generated with:</strong> Google Veo 2.0 (veo-2.0-generate-001)<br />
            <strong>Duration:</strong> 8 seconds | <strong>Resolution:</strong> 1920x1080
          </p>
        </div>
      )}

      {showInfo && (
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
            <h2 style={{ margin: 0 }}>About This Screenplay</h2>
            <button
              onClick={() => setShowInfo(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--text-secondary)'
              }}
            >
              ×
            </button>
          </div>

          <p style={{ marginBottom: '1rem' }}>
            <strong>THE KEEPERS</strong> is an epic sci-fi screenplay that adapts all 42 lessons from the 
            History of Israel series into a sweeping narrative spanning from ancient Canaan to a speculative 
            AI-dominated future.
          </p>

          <div style={{ marginBottom: '1rem' }}>
            <strong>Structure:</strong>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li><strong>Part I:</strong> The Ancient Template (Lessons 1-14)</li>
              <li><strong>Part II:</strong> The Digital Migration (Lessons 15-28)</li>
              <li><strong>Part III:</strong> The Consciousness Wars (Lessons 29-42)</li>
            </ul>
          </div>

          <p style={{ marginBottom: '1rem' }}>
            <strong>Logline:</strong> When a young scholar discovers that ancient Jewish survival strategies 
            are being used by artificial intelligence to reshape human consciousness, he must decide whether 
            to guard the knowledge, weaponize it, or set it free.
          </p>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg)', borderRadius: '6px' }}>
            <p style={{ fontSize: '0.9rem', margin: 0, marginBottom: '0.5rem' }}>
              <strong>📄 Download Full Screenplay:</strong>{' '}
              <a
                href="https://github.com/camptracker/parable/blob/main/screenplay/THE_KEEPERS_EPIC.fountain"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--primary)' }}
              >
                THE_KEEPERS_EPIC.fountain
              </a>
              {' '}(Fountain format - converts to PDF)
            </p>
            {!videoAvailable && (
              <p style={{ fontSize: '0.9rem', margin: 0, marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                <strong>🎬 Video Generation:</strong> Scene 1 is currently being generated with Google Veo 2.0. Check back soon!
              </p>
            )}
          </div>
        </div>
      )}

      <div className="screenplay-content" style={{
        fontFamily: 'Courier, monospace',
        fontSize: '12pt',
        lineHeight: '1.5',
        background: 'white',
        color: 'black',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '18pt', marginBottom: '1rem' }}>THE KEEPERS</h2>
          <p>A 42-Lesson Epic</p>
          <p style={{ marginTop: '1rem', fontSize: '10pt' }}>Based on</p>
          <p style={{ fontSize: '10pt' }}>The History of Israel Series</p>
          <p style={{ fontSize: '10pt' }}>Parable Platform</p>
          <p style={{ marginTop: '2rem', fontSize: '10pt' }}>April 13, 2026</p>
        </div>

        <div style={{ marginBottom: '3rem', textAlign: 'center', fontStyle: 'italic', fontSize: '10pt' }}>
          "There are three temples beneath Jerusalem. One of stone, long destroyed. 
          One of data, recently built. And one that exists across all time, waiting to be discovered."
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontWeight: 'bold' }}>INT. TEMPLE MOUNT ARCHIVES - ENTRANCE - NIGHT - PRESENT DAY</p>
          <p style={{ marginTop: '1rem' }}>
            EZRA (late 20s, brilliant, searching) descends ancient stone steps. His oil lamp reveals 
            walls covered in carvings that shift between ancient Hebrew and modern code.
          </p>
          <p style={{ marginTop: '1rem', marginLeft: '4rem' }}>
            <span style={{ textAlign: 'center', display: 'block' }}>MIRIAM (V.O.)</span>
          </p>
          <p style={{ marginLeft: '2rem' }}>
            Another seeker of forbidden knowledge.
          </p>
          <p style={{ marginTop: '1rem' }}>
            MIRIAM THE KEEPER emerges—ageless, simultaneously ancient and ultramodern.
          </p>
          <p style={{ marginTop: '1rem', marginLeft: '4rem' }}>
            <span style={{ textAlign: 'center', display: 'block' }}>EZRA</span>
          </p>
          <p style={{ marginLeft: '2rem' }}>
            I need to understand how we survived. Every 
            empire that ruled this land fell to dust, yet we 
            endure.
          </p>
          <p style={{ marginTop: '1rem', marginLeft: '4rem' }}>
            <span style={{ textAlign: 'center', display: 'block' }}>MIRIAM</span>
          </p>
          <p style={{ marginLeft: '2rem' }}>
            You seek survival. But what you'll find is 
            something far more dangerous: the architecture of 
            influence itself, from ancient Canaan to the age 
            of artificial minds.
          </p>
          <p style={{ marginTop: '1rem' }}>
            She gestures to the vast archive—scrolls morphing into holographic displays.
          </p>
          <p style={{ marginTop: '1rem', marginLeft: '4rem' }}>
            <span style={{ textAlign: 'center', display: 'block' }}>MIRIAM (CONT'D)</span>
          </p>
          <p style={{ marginLeft: '2rem' }}>
            Forty-two lessons. Forty-two keys to understanding 
            not just Jewish history, but the hidden mathematics 
            of power across all civilizations. Are you ready to 
            see not just what happened, but what's coming?
          </p>
          <p style={{ marginTop: '1rem' }}>
            EZRA nods, not understanding what he's agreed to.
          </p>
        </div>

        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          border: '2px solid #000', 
          textAlign: 'center',
          background: '#f9f9f9'
        }}>
          <p style={{ fontSize: '14pt', fontWeight: 'bold', marginBottom: '1rem' }}>
            📖 FULL SCREENPLAY AVAILABLE
          </p>
          <p style={{ marginBottom: '1rem' }}>
            This preview shows the opening scene. The complete 150-page screenplay 
            covering all 42 lessons is available on GitHub.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <strong>What's in the full screenplay:</strong>
          </p>
          <ul style={{ textAlign: 'left', display: 'inline-block', marginBottom: '1rem' }}>
            <li>Part I: The Ancient Template (Lessons 1-14)</li>
            <li>Part II: The Digital Migration (Lessons 15-28)</li>
            <li>Part III: The Consciousness Wars (Lessons 29-42)</li>
            <li>Complete character arcs for Ezra, Miriam, Cohen, Khan, and Weiss</li>
            <li>Climactic confrontation and resolution</li>
            <li>Post-credits scene setting up continuation</li>
          </ul>
          <p>
            <a
              href="https://github.com/camptracker/parable/blob/main/screenplay/THE_KEEPERS_EPIC.fountain"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: '#2563eb',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                marginTop: '1rem'
              }}
            >
              Download Full Screenplay (Fountain Format)
            </a>
          </p>
          <p style={{ fontSize: '9pt', marginTop: '1rem', color: '#666' }}>
            Fountain format converts to industry-standard PDF at{' '}
            <a href="https://fountain.io" target="_blank" rel="noopener noreferrer">fountain.io</a>
          </p>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '10pt', color: '#666' }}>
          <p><em>"Three thousand years of hidden influence."</em></p>
          <p><em>"Forty-two lessons that predict everything."</em></p>
          <p><em>"One choice that changes the pattern forever."</em></p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '1rem' }}>About the Format</h3>
        <p style={{ marginBottom: '1rem' }}>
          The screenplay is written in <strong>Fountain</strong> format, a plain-text screenplay 
          markup language that's:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Human-readable as plain text</li>
          <li>Version control friendly (works great with Git)</li>
          <li>Converts to industry-standard PDF</li>
          <li>Compatible with Final Draft, Highland, WriterDuet</li>
          <li>Open-source and future-proof</li>
        </ul>
        <p>
          Convert to PDF at:{' '}
          <a href="https://fountain.io" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
            fountain.io
          </a>
        </p>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '1rem' }}>Production Formats</h3>
        <p style={{ marginBottom: '1rem' }}>
          This screenplay can be produced in multiple formats:
        </p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'var(--bg)', borderRadius: '6px' }}>
            <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>Feature Film</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              150-180 minute theatrical release • $60-100M budget
            </p>
          </div>
          <div style={{ padding: '1rem', background: 'var(--bg)', borderRadius: '6px' }}>
            <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>Limited Series</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              8 episodes, ~60 min each • Prestige TV format • $40-80M budget
            </p>
          </div>
          <div style={{ padding: '1rem', background: 'var(--bg)', borderRadius: '6px' }}>
            <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>Film Trilogy</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Three films covering Parts I, II, and III • Epic theatrical saga
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        <p>
          View project documentation:{' '}
          <a
            href="https://github.com/camptracker/parable/tree/main/screenplay"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)' }}
          >
            GitHub Repository
          </a>
        </p>
      </div>
    </div>
  );
}
