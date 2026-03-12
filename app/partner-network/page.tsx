'use client';

import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Strategic Partner Opportunity | JAM Growth Partners',
  description:
    'Private partner opportunity for executives, consultants, and business development professionals.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PartnerNetworkPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main style={{ backgroundColor: '#ffffff', color: '#111827' }}>
      <section
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: isMobile ? '56px 20px 32px' : '80px 24px 40px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '8px 14px',
            borderRadius: '999px',
            backgroundColor: '#f3f4f6',
            color: '#4b5563',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '22px',
          }}
        >
          Private Partner Opportunity
        </div>

        <h1
          style={{
            fontSize: isMobile ? '2.25rem' : 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            maxWidth: '900px',
            margin: '0 0 22px 0',
          }}
        >
          Turn trusted business relationships into long-term strategic opportunities.
        </h1>

        <p
          style={{
            fontSize: isMobile ? '1.02rem' : '1.18rem',
            lineHeight: 1.75,
            color: '#4b5563',
            maxWidth: '800px',
            margin: '0 0 26px 0',
          }}
        >
          JAM Growth Partners is building a select network of executives,
          consultants, and relationship-driven professionals who can introduce
          employers to a differentiated workforce value strategy that can
          enhance employee retention, improve perceived benefits value, and
          create the opportunity for partners to participate in the economics of
          successful client relationships.
        </p>

        <div
          style={{
            backgroundColor: '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '14px',
            padding: '18px 20px',
            maxWidth: '760px',
            marginBottom: '32px',
            fontSize: '0.98rem',
            lineHeight: 1.6,
            color: '#374151',
          }}
        >
          <strong>Important:</strong> This is not an affiliate program or lead
          marketplace. We work with a limited number of partners who can make
          credible introductions to employers.
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <a
            href="#partner-form"
            style={{
              display: 'inline-block',
              padding: '14px 22px',
              borderRadius: '10px',
              backgroundColor: '#111827',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 700,
              textAlign: 'center',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            Request a Private Conversation
          </a>

          <a
            href="#how-it-works"
            style={{
              display: 'inline-block',
              padding: '14px 22px',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              color: '#111827',
              textDecoration: 'none',
              fontWeight: 700,
              border: '1px solid #d1d5db',
              textAlign: 'center',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            See How It Works
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: isMobile ? '12px 20px 56px' : '24px 24px 72px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? '1fr'
              : 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '18px',
          }}
        >
          {[
            {
              title: 'Referral Participation',
              text:
                'Participate in the economics of successful client relationships through a structured referral model.',
            },
            {
              title: 'Client Value First',
              text:
                'Introduce a solution designed to improve the employee experience while strengthening an employer’s overall value proposition.',
            },
            {
              title: 'Executive-Level Fit',
              text:
                'Ideal for professionals with access to owners, CEOs, CFOs, CHROs, brokers, and decision-makers.',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '18px',
                padding: '26px',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
              }}
            >
              <h3
                style={{
                  margin: '0 0 10px 0',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: '#4b5563',
                  lineHeight: 1.7,
                  fontSize: '1rem',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        style={{
          backgroundColor: '#f9fafb',
          borderTop: '1px solid #e5e7eb',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            padding: isMobile ? '56px 20px' : '80px 24px',
          }}
        >
          <div style={{ maxWidth: '760px', marginBottom: '40px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#6b7280',
                margin: '0 0 12px 0',
              }}
            >
              How It Works
            </p>

            <h2
              style={{
                fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                margin: '0 0 18px 0',
              }}
            >
              A simple model built for credible introductions, not heavy lifting.
            </h2>

            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.75,
                color: '#4b5563',
                margin: 0,
              }}
            >
              We are looking for strategic partners who already have trust with
              employers and can recognize when an organization may benefit from
              a more proactive, value-oriented approach to employee health and
              workforce support.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr'
                : 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px',
            }}
          >
            {[
              {
                step: '01',
                title: 'Identify a fit',
                text:
                  'You introduce employers or advisors who value differentiated solutions and a stronger employee offering.',
              },
              {
                step: '02',
                title: 'We lead the process',
                text:
                  'JAM handles positioning, discovery, education, and next-step guidance with the prospect.',
              },
              {
                step: '03',
                title: 'Client receives value',
                text:
                  'The employer gains access to a compelling solution that can complement broader workforce and benefits objectives.',
              },
              {
                step: '04',
                title: 'You participate in the relationship',
                text:
                  'When a client relationship is implemented, partners participate in a structured referral-based compensation model tied to the ongoing success of the program.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '18px',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#9ca3af',
                    marginBottom: '12px',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    margin: '0 0 10px 0',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: '#4b5563',
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: isMobile ? '56px 20px' : '80px 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
            gap: '36px',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#6b7280',
                margin: '0 0 12px 0',
              }}
            >
              Ideal Partner Profile
            </p>

            <h2
              style={{
                fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                margin: '0 0 18px 0',
              }}
            >
              Designed for professionals with influence, trust, and strong commercial instincts.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#4b5563',
                lineHeight: 1.75,
                margin: '0 0 26px 0',
                maxWidth: '720px',
              }}
            >
              This opportunity is best suited for people who naturally create
              business momentum through relationships, credibility, and market
              access rather than transactional selling alone.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile
                  ? '1fr'
                  : 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                'Current or former C-level executives',
                'Board advisors and operating partners',
                'Benefits and HR consultants',
                'B2B sales leaders and business development professionals',
                'Fractional executives and strategic advisors',
                'Professionals with employer and broker relationships',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '14px',
                    padding: '16px 18px',
                    backgroundColor: '#ffffff',
                    color: '#111827',
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ minWidth: 0 }}>
            <div
              style={{
                borderRadius: '20px',
                padding: '28px',
                background: 'linear-gradient(180deg, #111827 0%, #1f2937 100%)',
                color: '#ffffff',
                boxShadow: '0 12px 24px rgba(17,24,39,0.12)',
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#d1d5db',
                  margin: '0 0 12px 0',
                }}
              >
                Why Partners Engage
              </p>

              <h3
                style={{
                  fontSize: '1.8rem',
                  lineHeight: 1.2,
                  margin: '0 0 16px 0',
                  fontWeight: 800,
                }}
              >
                Add value to your network without building a new practice line.
              </h3>

              <p
                style={{
                  color: '#e5e7eb',
                  lineHeight: 1.75,
                  margin: '0 0 20px 0',
                }}
              >
                The right partnership should strengthen your relationships, not
                complicate them. This model allows you to introduce a
                differentiated employer-facing solution while JAM handles
                strategy, positioning, and the client process.
              </p>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#f3f4f6',
                  lineHeight: 1.9,
                }}
              >
                <li>Structured referral participation</li>
                <li>Low operational burden on your end</li>
                <li>Executive-level positioning</li>
                <li>Meaningful client-facing value</li>
                <li>Selective partnership model</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#111827',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            padding: isMobile ? '56px 20px' : '80px 24px',
          }}
        >
          <div style={{ maxWidth: '860px' }}>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#9ca3af',
                margin: '0 0 12px 0',
              }}
            >
              Positioning
            </p>

            <h2
              style={{
                fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                margin: '0 0 18px 0',
              }}
            >
              This is not about pushing a product. It is about opening the right conversation.
            </h2>

            <p
              style={{
                color: '#d1d5db',
                lineHeight: 1.8,
                fontSize: '1.08rem',
                margin: 0,
              }}
            >
              Strong referral partners know that credibility matters. The goal
              is not to pressure clients into another vendor discussion. The
              goal is to identify employers that may benefit from a more
              distinctive workforce offering and make a thoughtful introduction
              that creates value on both sides.
            </p>
          </div>
        </div>
      </section>

      <section
        id="partner-form"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: isMobile ? '56px 20px 80px' : '80px 24px 100px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '30px',
            alignItems: 'start',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#6b7280',
                margin: '0 0 12px 0',
              }}
            >
              Start the Conversation
            </p>

            <h2
              style={{
                fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
                fontWeight: 800,
                margin: '0 0 18px 0',
              }}
            >
              Request a private discussion.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: '#4b5563',
                maxWidth: '620px',
                margin: 0,
              }}
            >
              If you work with employers, advisors, or leadership teams and see
              potential alignment, complete the form and we can discuss fit,
              positioning, and how a referral relationship could work.
            </p>
          </div>

          <div
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '20px',
              padding: isMobile ? '22px' : '28px',
              backgroundColor: '#ffffff',
              boxShadow: '0 8px 18px rgba(0,0,0,0.04)',
            }}
          >
            <form
              action="https://formspree.io/f/xnjgvvor"
              method="POST"
              style={{
                display: 'grid',
                gap: '16px',
              }}
            >
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Full Name
                </label>
                <input id="name" name="name" type="text" required style={inputStyle} />
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email Address
                </label>
                <input id="email" name="email" type="email" required style={inputStyle} />
              </div>

              <div>
                <label htmlFor="company" style={labelStyle}>
                  Company / Organization
                </label>
                <input id="company" name="company" type="text" style={inputStyle} />
              </div>

              <div>
                <label htmlFor="role" style={labelStyle}>
                  Current Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Executive, consultant, advisor, sales leader, etc."
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="network" style={labelStyle}>
                  Tell us about your network or referral interest
                </label>
                <textarea
                  id="network"
                  name="network"
                  rows={6}
                  placeholder="Briefly describe the types of employers, advisors, or business relationships you work with."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                />
              </div>

              <input
                type="hidden"
                name="_subject"
                value="New Strategic Partner Inquiry - JAM Growth Partners"
              />

              <button
                type="submit"
                style={{
                  marginTop: '8px',
                  border: 'none',
                  borderRadius: '12px',
                  backgroundColor: '#111827',
                  color: '#ffffff',
                  padding: '15px 18px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                Request a Conversation
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: 600,
  color: '#111827',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 14px',
  borderRadius: '12px',
  border: '1px solid #d1d5db',
  fontSize: '1rem',
  color: '#111827',
  backgroundColor: '#ffffff',
  boxSizing: 'border-box',
};
