module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "display-h3": "var(--display-h3-font-family)",
        "display-h4": "var(--display-h4-font-family)",
        "display-h6": "var(--display-h6-font-family)",
        "label-large": "var(--label-large-font-family)",
        "label-medium": "var(--label-medium-font-family)",
        "label-small": "var(--label-small-font-family)",
        "text-bold-large": "var(--text-bold-large-font-family)",
        "text-medium": "var(--text-medium-font-family)",
        "text-small": "var(--text-small-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          'Apple Color Emoji"',
          'Segoe UI Emoji"',
          'Segoe UI Symbol"',
          'Noto Color Emoji"',
        ],
      },
      colors: {
        background: "#f4f0f0",

        // Primary brand (yellows/oranges/browns)
        primary: {
          50: "#fbf9eb",
          100: "#f6f2cb",
          200: "#efe299",
          300: "#e6cc5e",
          400: "#deb83b",
          500: "#cd9f25",
          600: "#b17c1d",
          700: "#8d5a1b",
          800: "#76491d",
          900: "#653e1e",
          950: "#3a200e",
        },

        // Secondary brand (grays)
        secondary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1e1e1e",
        },

        // Neutral (blue-grays)
        neutral: {
          50: "#f9fafb",
          100: "#eceff2",
          200: "#d5dde2",
          300: "#b0bfc9",
          400: "#859bab",
          500: "#668091",
          600: "#516778",
          700: "#425462",
          800: "#394753",
          900: "#333e47",
          950: "#22292f",
        },

        // Success/Green
        success: {
          50: "#eefff5",
          100: "#d6ffea",
          200: "#b0ffd7",
          300: "#73ffb9",
          400: "#30f893",
          500: "#05df72",
          600: "#00bc5c",
          700: "#02934b",
          800: "#08733f",
          900: "#095e36",
          950: "#00351c",
        },

        // Info/Yellow
        info: {
          50: "#fefde8",
          100: "#fffdc2",
          200: "#fff987",
          300: "#ffee43",
          400: "#ffdf20",
          500: "#efc403",
          600: "#ce9800",
          700: "#a46c04",
          800: "#88540b",
          900: "#734510",
          950: "#432405",
        },

        // Error/Red
        error: {
          50: "#fff1f2",
          100: "#ffe0e1",
          200: "#ffc6c9",
          300: "#ff9fa4",
          400: "#ff676e",
          500: "#fb2c36",
          600: "#e91923",
          700: "#c4111a",
          800: "#a21219",
          900: "#86161b",
          950: "#490609",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class"],
};
