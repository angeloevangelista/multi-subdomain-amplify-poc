export default function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.badge}>client</div>
        <h1 style={styles.title}>Client App</h1>
        <p style={styles.url}>client.my-app.angeloevangelista.com.br</p>
        <p style={styles.status}>✓ Live on AWS Amplify</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f0f4ff',
    fontFamily: 'system-ui, sans-serif',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '48px 64px',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  },
  badge: {
    display: 'inline-block',
    background: '#3b82f6',
    color: '#fff',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '4px 12px',
    borderRadius: '999px',
    marginBottom: '20px',
  },
  title: {
    margin: '0 0 8px',
    fontSize: '32px',
    fontWeight: '700',
    color: '#1e293b',
  },
  url: {
    margin: '0 0 24px',
    fontSize: '14px',
    color: '#64748b',
  },
  status: {
    margin: 0,
    fontSize: '14px',
    color: '#22c55e',
    fontWeight: '500',
  },
}
