import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import icons from './src/data/overuse'
import iconss from './src/data/icons'
import colors from './src/data/colors'
const formatIcons = [...new Set(icons.map(item => item.icon))]

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded bg-teal-700 text-white inline-block cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:opacity-50'],
    ['link', 'inline-block cursor-pointer hover:color-orange-500 hover:border-b disabled:cursor-default disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['flex-wrapper', 'flex justify-center items-center'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: ['prose', 'prose-sm', 'm-auto', 'text-left'].concat(formatIcons).concat(iconss).concat(colors.map(item => `bg-${item}`)),
})
