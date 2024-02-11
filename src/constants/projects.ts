import { type TProject } from '@/types'
import { technologies as techs } from './technologies'

export const projects: TProject[] = [
  {
    id: 'PJT1',
    title: 'FCode',
    links: {
      repository: 'https://github.com/MHP24/f-code',
      production: ''
    },
    asset: 'fcode.jpg',
    category: 'Full-stack',
    technologies: [techs.nextJs, techs.css3, techs.typescript, techs.mongodb]
  },
  {
    id: 'PJT2',
    title: 'WhatsApp Bot',
    links: {
      repository: 'https://github.com/MHP24/whatsapp-bot',
      production: 'https://wa.me/message/KZ7674WVE4CGP1'
    },
    asset: 'whatsapp-bot.jpg',
    category: 'Backend',
    technologies: [techs.nodeJs, techs.expressJs, techs.typescript]
  },
  {
    id: 'PJT3',
    title: 'Discord Bot',
    links: {
      repository: 'https://github.com/MHP24/discord-bot',
      production: 'https://discord.com/oauth2/authorize?client_id=1121947695930691674&permissions=0&scope=bot%20applications.commands'
    },
    asset: 'discord-bot.jpg',
    category: 'Backend',
    technologies: [techs.nodeJs, techs.expressJs, techs.typescript]
  },
  {
    id: 'PJT4',
    title: 'Tic tac toe online',
    links: {
      repository: 'https://github.com/MHP24/tic-tac-toe-online',
      production: 'https://tic-tac-toe.mg-hp.com/'
    },
    asset: 'tic-tac-toe-online.jpg',
    category: 'Full-stack',
    technologies: [techs.nodeJs, techs.expressJs, techs.reactJs, techs.tailwindCss, techs.typescript]
  },
  {
    id: 'PJT5',
    title: 'Abstract MH',
    links: {
      repository: 'https://github.com/MHP24/vsc-abstract-theme',
      production: 'https://marketplace.visualstudio.com/items?itemName=MiguelHP.Abstract-MH'
    },
    asset: 'abstract-mh.jpg',
    category: 'Frontend',
    technologies: [techs.json]
  },
  {
    id: 'PJT6',
    title: 'Run JS Web',
    links: {
      repository: 'https://github.com/MHP24/run-js-web',
      production: 'https://run-js.mg-hp.com/'
    },
    asset: 'run-js-web.jpg',
    category: 'Full-stack',
    technologies: [techs.nextJs, techs.docker, techs.typescript, techs.nodeJs, techs.tailwindCss]
  },
  {
    id: 'PJT7',
    title: 'Chatbot Web',
    links: {
      repository: 'https://github.com/MHP24/chatbot-web',
      production: 'https://chat.mg-hp.com/files/scripts/chat/main.js'
    },
    asset: 'chatbot-web.jpg',
    category: 'Full-stack',
    technologies: [techs.reactJs, techs.typescript, techs.nestJs, techs.redis, techs.docker, techs.mysql, techs.tailwindCss]
  },
  {
    id: 'PJT8',
    title: 'Papa Johns API',
    links: {
      repository: 'https://github.com/MHP24/papa-johns-api',
      production: 'https://papa-johns-api.mg-hp.com/api/v1/docs'
    },
    asset: 'papa-johns-api.jpg',
    category: 'Backend',
    technologies: [techs.typescript, techs.nestJs, techs.docker, techs.postgresql]
  },
  {
    id: 'PJT9',
    title: 'MH Theme',
    links: {
      repository: 'https://github.com/MHP24/vsc-mh-theme',
      production: 'https://marketplace.visualstudio.com/items?itemName=PanaMiguel.mh-theme'
    },
    asset: 'mh-theme.jpg',
    category: 'Frontend',
    technologies: [techs.json]
  },
  {
    id: 'PJT10',
    title: 'Speech to text',
    links: {
      repository: 'https://github.com/MHP24/Speech-to-text',
      production: ''
    },
    asset: 'speech-to-text.jpg',
    category: 'Frontend',
    technologies: [techs.html, techs.css, techs.javascript]
  }
]
