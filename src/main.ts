import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// import initUnocssRuntime from '@unocss/runtime'
// import {
//   presetIcons, 
// } from 'unocss'
// initUnocssRuntime({ 
//   presets: [
//     presetIcons({
//       scale: 1.2,
//       warn: true,
//     }),
//   ],
// })
// not work
const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
