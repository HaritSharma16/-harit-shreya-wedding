import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{extend:{colors:{ivory:'#F8F3EA',ink:'#29231F',wine:'#5A2530',gold:'#B28A4A',sand:'#E9DDCA'},fontFamily:{display:['var(--font-cormorant)','serif'],sans:['var(--font-inter)','sans-serif']}}},plugins:[] } satisfies Config;
