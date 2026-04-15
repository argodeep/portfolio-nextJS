const YEAR = new Date().getFullYear()

export default {
  darkMode: true,
  defaultTheme: 'dark',
  footer: (
    <small
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '8rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        color: '#555',
        fontSize: '0.8rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}
    >
      <span><time>{YEAR}</time> © Arghyadeep Majumder</span>
      <span style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="https://github.com/argodeep" style={{ color: '#666', textDecoration: 'none' }}>GitHub</a>
        <a href="https://twitter.com/argodeep" style={{ color: '#666', textDecoration: 'none' }}>Twitter</a>
        <a href="https://www.linkedin.com/in/argodeep" style={{ color: '#666', textDecoration: 'none' }}>LinkedIn</a>
      </span>
    </small>
  )
}
