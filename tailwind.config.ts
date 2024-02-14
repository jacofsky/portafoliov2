import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "start-primary-gradient": "var(--start-primary-gradient)",
        "end-primary-gradient": "var(--end-primary-gradient)",
        "start-secondary-gradient": "var(--start-secondary-gradient)",
        "end-secondary-gradient": "var(--end-secondary-gradient)",
      },
    },
  },
  plugins: [],
};

export default config;
