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
    description: [
      'Plataforma web para ejercitar lógica de programación. Con soporte para JavaScript, TypeScript y Python3.' +
      ' Este sistema permite administrar acciones entre las que destacan: tabla de posicionamiento (sistema por puntos),' +
      ' usuarios y creación de desafios mediante solicitud.'
    ],
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
    description: [
      'Asistente virtual mediante WhatsApp, haciendo uso del cloud API oficial de META. Este se encarga de automatizar' +
      ' la entrega de información acerca de mis servicios y solicitar o agendar en caso de ser requerido mediante su' +
      ' automatización por correo electrónico.'
    ],
    technologies: [techs.nodeJs, techs.expressJs, techs.typescript, techs.docker]
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
    description: [
      'Bot de Discord orientado al entretenimiento, este reproduce música, genera imágenes y cuenta chistes. Permite ser' +
      ' utilizado por más de un usuario a la vez y soporta las últimas características de "slash commands" (comandos /).'
    ],
    technologies: [techs.nodeJs, techs.typescript, techs.docker]
  },
  // {
  //   id: 'PJT4',
  //   title: 'Tic tac toe online',
  //   links: {
  //     repository: 'https://github.com/MHP24/tic-tac-toe-online',
  //     production: 'https://tic-tac-toe.mg-hp.com/'
  //   },
  //   asset: 'tic-tac-toe-online.jpg',
  //   category: 'Full-stack',
  //   description: [
  //     '"El juego del gato", pero en esta ocasión en línea y en tiempo real. Haciendo uso de websockets,' +
  //     ' permite crear salas y establecer la cantidad de rounds junto a su duración por turno (soporte para' +
  //     ' 2 jugadores en tableros de 3x3). '
  //   ],
  //   technologies: [techs.nodeJs, techs.expressJs, techs.reactJs, techs.tailwindCss, techs.typescript]
  // },
  {
    id: 'PJT5',
    title: 'Abstract MH',
    links: {
      repository: 'https://github.com/MHP24/vsc-abstract-theme',
      production: 'https://marketplace.visualstudio.com/items?itemName=MiguelHP.Abstract-MH'
    },
    asset: 'abstract-mh.jpg',
    category: 'Frontend',
    description: [
      'La segunda edición de mis temas de Visual Studio Code. Este fue diseñado con el fin de facilitar' +
      ' la legibilidad en tecnologías de uso cotidiano dentro del desarrollo web (ámbito full stack).' +
      ' Inspirado en los bloques de Lego y la abstracción que estos pueden llegar a generar.'
    ],
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
    description: [
      '"Playground" en tiempo real que ejecuta JavaScript y TypeScript, entrega respuestas' +
      ' correspondientes al lenguaje. Su objetivo es permitir, probar y escribir código con un' +
      ' acercamiento bastante similar a lo que provee Visual Studio Code para una mayor familiaridad.'
    ],
    technologies: [techs.nextJs, techs.docker, techs.typescript, techs.nestJs, techs.tailwindCss]
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
    description: [
      'Chatbot en tiempo real, capaz de incorporarse en cualquier sitio web, este provee flujos automatizados' +
      ' y capacidad básica de comprensión de respuestas mediante un desarrollo pensado de forma generalizada y' +
      ' reutilizable para cualquier rubro o comunidad (Mira debajo a la derecha).'
    ],
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
    description: [
      'API inspirada en la famosa cadena de pizzas a domicilio "Papa Johns", incluye autenticación mediante' +
      ' JSON Web Token, toma de órdenes, búsqueda de productos, soporte para lectura de imágenes y manejo en' +
      ' base de datos para persistencia de todas las transacciones ocurrentes.'
    ],
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
    description: [
      'Uno de mis primeros proyectos y mi primer tema para Visual Studio Code, pensado para ocuparse con' +
      ' cualquier lenguaje y tecnología, basándose en una de mis paletas de colores favoritas (morado,' +
      ' rojo, verde y azul). El fin de este proyecto fue familiarizarse con la estructura JSON.'
    ],
    technologies: [techs.json]
  }
  // {
  //   id: 'PJT10',
  //   title: 'Speech to text',
  //   links: {
  //     repository: 'https://github.com/MHP24/Speech-to-text',
  //     production: 'https://mhp24.github.io/Speech-to-text'
  //   },
  //   asset: 'speech-to-text.jpg',
  //   category: 'Frontend',
  //   description: [
  //     'Sitio web para hacer transformaciones de voz a texto en tiempo real. La finalidad de este proyecto' +
  //     ' fue agilizar el proceso de escritura y aprender a utilizar APIs nativas del navegador (reconocimiento de voz).' +
  //     ' Tiene soporte para navegadores Google Chrome y Opera.'
  //   ],
  //   technologies: [techs.html, techs.css3, techs.javascript]
  // }
]
