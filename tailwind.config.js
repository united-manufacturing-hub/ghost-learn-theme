module.exports = {
  content: ['./*.hbs', "./**/*.hbs"],
  theme: {
    fontFamily: {
      system: 'var(--font-system)',
      headings: 'var(--font-headings)',
      body: 'var(--font-body)',
    },
    extend: {
      colors: {
        // brand: 'var(--ghost-accent-color)',
        brand: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `hsla(var(--color-brand-hsl) / ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `hsla(var(--color-brand-hsl) / var(${opacityVariable}, 1))`
          }
          return `hsl(var(--color-brand-hsl))`
        },
        'brand-contrast': 'var(--color-brand-contrast)',
        'accent': 'var(--color-accent)',
        'transparent': 'transparent',
        'current': 'currentColor',
        'error': 'var(--color-error)',
        'success': 'var(--color-success)',
        'typ': 'var(--color-typography)',
        'typ-tone': 'var(--color-typography-tone)',
        'typ-content': 'var(--color-typography-content)',
        'typ-reverse': 'var(--color-typography-reverse)',
        'bgr': 'var(--color-background)',
        'bgr-tone': 'var(--color-background-tone)',
        'bgr-reverse': 'var(--color-background-reverse)',
        'bgr-opac': 'var(--color-background-opac)',
        'brd': 'var(--color-border)',
        'opac': 'rgba(0,0,0,0.05)'
      },
      maxWidth: {
        'container': 'var(--container-width)',
        'content': 'var(--content-width)',
        'content-wide': 'var(--content-width-wide)',
        'wide': 'var(--wide-width)'
      },
      backgroundImage: {
        'brand-gradient': `linear-gradient(to right, var(--color-brand), var(--color-brand-low) 20%, var(--color-brand-low) 80%, var(--color-brand))`,
        'radial-gradient': `radial-gradient(35% 80% at 50% 25%,hsla(var(--color-brand-hsl)/0.15) 0%,rgba(0,0,0,0) 100%)`,
        'fading': `linear-gradient(to right, transparent, var(--color-border), transparent)`
      },
      borderRadius: {
        'theme': 'var(--radius)',
        'theme-xxs': 'var(--radius-xxs)',
        'theme-xs': 'var(--radius-xs)',
        'theme-sm': 'var(--radius-sm)',
        'theme-md': 'var(--radius-md)',
        'theme-lg': 'var(--radius-lg)',
        'theme-xl': 'var(--radius-xl)',
      },
      boxShadow: {
        'theme': 'var(--shadow)',
        'btn': 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 5px 5px 1px hsla(var(--color-brand-hsl) / 0.1)',
        'btn-hover': 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 5px 15px 1px hsla(var(--color-brand-hsl) / 0.25)'
      },
      transitionProperty: {
        'move': 'transform, opacity, visibility',
        'width': 'width'
      },
      typography: ({ theme }) => ({
        theme: {
          css: {
            '--tw-prose-body': 'var(--color-typography-content)',
            '--tw-prose-headings': 'var(--color-typography)',
            '--tw-prose-lead': 'var(--color-typography-content)',
            '--tw-prose-links': 'var(--ghost-accent-color)',
            '--tw-prose-bold': 'var(--color-typography-content)',
            '--tw-prose-counters': 'var(--color-typography-content)',
            '--tw-prose-bullets': 'var(--color-typography-content)',
            '--tw-prose-hr': 'var(--color-border)',
            '--tw-prose-quotes': 'var(--color-typography-content)',
            '--tw-prose-quote-borders': 'var(--ghost-accent-color)',
            '--tw-prose-captions': 'var(--color-typography-content)',
            '--tw-prose-code': 'var(--color-typography-content)',
            '--tw-prose-pre-code': 'var(--color-typography-reverse)',
            '--tw-prose-pre-bg': 'var(--color-typography)',
            '--tw-prose-th-borders': 'var(--color-border)',
            '--tw-prose-td-borders': 'var(--color-border)',
            '--tw-prose-invert-body': 'var(--color-typography-reverse)',
            '--tw-prose-invert-headings': 'var(--color-typography-reverse)',
            '--tw-prose-invert-lead': 'var(--color-typography-reverse)',
            '--tw-prose-invert-links': 'var(--ghost-accent-color)',
            '--tw-prose-invert-bold': 'var(--color-typography-reverse)',
            '--tw-prose-invert-counters': 'var(--color-typography-reverse)',
            '--tw-prose-invert-bullets': 'var(--color-typography-reverse)',
            '--tw-prose-invert-hr': 'var(--color-border-reverse)',
            '--tw-prose-invert-quotes': 'var(--color-typography-reverse)',
            '--tw-prose-invert-quote-borders': 'var(--color-border-reverse)',
            '--tw-prose-invert-captions': 'var(--color-typography-reverse)',
            '--tw-prose-invert-code': 'var(--color-typography-reverse)',
            '--tw-prose-invert-pre-code': 'var(--color-typography-content)',
            '--tw-prose-invert-pre-bg': 'var(--color-typography-reverse)',
            '--tw-prose-invert-th-borders': 'var(--color-border-reverse)',
            '--tw-prose-invert-td-borders': 'var(--color-border-reverse)',
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}