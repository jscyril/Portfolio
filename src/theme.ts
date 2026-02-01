// Theme configuration for easy customization
// Change these values to switch themes

export const theme = {
    // Background colors
    bg: {
        primary: '#0a0a0f',      // Deepest background
        secondary: '#12121a',    // Card backgrounds
        tertiary: '#1a1a2e',     // Elevated surfaces
        glass: 'rgba(18, 18, 26, 0.8)', // Glassmorphism
    },

    // Accent colors (purple gradient)
    accent: {
        primary: '#7c3aed',      // Main purple
        secondary: '#a855f7',    // Lighter purple
        tertiary: '#c084fc',     // Lightest purple
        glow: 'rgba(124, 58, 237, 0.4)', // Glow effect
    },

    // Text colors
    text: {
        primary: '#f8fafc',      // Bright white
        secondary: '#cbd5e1',    // Muted text
        tertiary: '#64748b',     // Subtle text
    },

    // Special effects
    effects: {
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)',
        gradientText: 'linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)',
        glassBorder: 'rgba(124, 58, 237, 0.2)',
        shadow: '0 8px 32px rgba(124, 58, 237, 0.15)',
    },

    // Animation presets
    animation: {
        fast: '0.2s',
        normal: '0.3s',
        slow: '0.5s',
        verySlow: '1s',
    }
} as const;

export type Theme = typeof theme;
