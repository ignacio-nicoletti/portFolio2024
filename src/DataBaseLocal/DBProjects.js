// -------------------------Portadas------------------
import karku from "../Assets/Imagesprojects/karku.png";
import nabijash from "../Assets/Imagesprojects/nabijash.png";
import TimeApp from "../Assets/Imagesprojects/time-app.png";
import videogame from "../Assets/Imagesprojects/individualP.png";
import Drone from "../Assets/Imagesprojects/droner.png";
import Store from "../Assets/Imagesprojects/store.png";
import Nails from "../Assets/Imagesprojects/nailsturn.png";
import AdvancePortada from "../Assets/Imagesprojects/ecomerce.png";
import proceso from "../Assets/Imagesprojects/proceso.png";
import tecno2 from "../Assets/Imagesprojects/tecno2.png";
import thercarr from "../Assets/Imagesprojects/Thercarr.png";
import TabacosLp from "../Assets/Imagesprojects/tabacoslp.png";
import Guijama from "../Assets/Imagesprojects/guijama.jpg";
import challengeBanco from "../Assets/Imagesprojects/challengeBanco.png";
import challengeMarvel from "../Assets/Imagesprojects/challengeMarvel.png";
import challengeWakeUp from "../Assets/Imagesprojects/challengeWakeUp.png";
import portfolio2022 from "../Assets/Imagesprojects/portfolio2022.png";
import cardGame from "../Assets/Imagesprojects/cardGame.png";
import facetracker from "../Assets/Imagesprojects/facetracker.png";
// -------------------------Portadas------------------

const DBProyect = [
  {
    title: "Plataforma de juegos",
    shortDescription:
      "Plataforma de juegos creada con sockets para tiempo real, se mantiene en construccion y contiene Berenejena, Poker y carrera de caballos con cartas. Se puede tener una cuenta para subir de nivel y sino como invitado.",
    longDescription: "",
    PortadaProject: cardGame,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720729614/portfolio/Games/fyifsuarvhjxycgaon1o.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720729613/portfolio/Games/hihguh0ryvmam1iesii9.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720730017/portfolio/Games/unag6ud0c3m0rndczfrn.png",
    ],
    videoProject: "",
    tecnologies: ["•ReactJs", "•NodeJs", "•SocketIo", "•ExpressJs", "•MongoDB"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/GamesBoard",
    linkDeploy: "",
    category: ["Todos", "Game"],
  },
  {
    title: "Planificador de gastos",
    shortDescription: "App mobile para ver nuestros gastos.",
    longDescription:
      "App mobile que permite agregar un presupuesto y luego ir agregando gastos con detalles del mismo.",
    PortadaProject:
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1713811907/portfolio/GastosApp/o4infb6pcqb46ucsmthg.png",
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1712758972/portfolio/GastosApp/dyqqwpch8q5i6uipakhy.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1712758971/portfolio/GastosApp/cfdemrzxugcqcc4efwti.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1712758973/portfolio/GastosApp/o4infb6pcqb46ucsmthg.png",
    ],
    videoProject: "",
    tecnologies: [
      "•ReactJs",
      "•React-native",
      "•Reanimated",
      "•Typescript",
      "•Picker",
    ],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/PlanGastosNative",
    linkDeploy: "",
    category: ["Todos", "Sistema-de-gestion", "Mobile"],
  },
  {
    title: "FaceTracker ",
    shortDescription:
      "Aplicacion pque trackea el rostro y en busca de similitudes con una foto para saber si esa persona es la misma que la imagen.",
    longDescription: "",
    PortadaProject: facetracker,
    MediaProject: [
      "",
    ],
    videoProject:
      "",
    tecnologies: [
      "•ReactJs",
      "•Clmtrackr",
      "•face-api",
      "•react-webcam",
      "•tracking",
    ],
    deploy: false,
    linkGitHub: "",
    linkDeploy: "https://github.com/ignacio-nicoletti/faceTracker",
    category: ["Todos"],
  },
  {
    title: "Guijama",
    shortDescription: "Sistema de facturacion con catalogo de productos.",
    longDescription:
      "Sistema de facturacion con utilizacion de codigos de barra,filtrado y exportacion de pdf, adaptado al 100% a celular, funcional y visual.",
    PortadaProject: Guijama,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1711373624/portfolio/guijama/jm0wehmamzphy3rhr4jk.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1711373624/portfolio/guijama/uzqvpbwlsat5fip1foss.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1711373623/portfolio/guijama/gim5ubhmsvimjudjso0e.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1711373228/portfolio/guijama/r19r1260u0e7zeimjxgu.mp4",
    tecnologies: [
      "•ReactJs",
      "•ReactPDF",
      "•Quagga",
      "•NodeJs",
      "•Express",
      "•MongoDb",
    ],
    deploy: true,
    linkGitHub: "",
    linkDeploy: "https://distribuidora-guijama.vercel.app/",
    category: ["Todos", "Sistema-de-gestion"],
  },
  {
    title: "TabacosLP",
    shortDescription:
      "Sistema de facturacion con preparacion para futuro catálogo público.",
    longDescription:
      "Sistema de facturacion con utilizacion de codigos de barra.",
    PortadaProject: TabacosLp,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1709139999/portfolio/TabacosLp/qhypfpjm3oagv9cdr7cq.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1709139999/portfolio/TabacosLp/dhaxgwhmtu2mwljptgmj.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1709139999/portfolio/TabacosLp/dhaxgwhmtu2mwljptgmj.png",
      "  https://res.cloudinary.com/dbu2biawj/image/upload/v1709140000/portfolio/TabacosLp/fk6jh8qj2uu2syza97hm.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1709139991/portfolio/TabacosLp/iymbgrxwyxnchet7ac81.mp4",
    tecnologies: [
      "•ReactJs",
      "•CSS",
      "•NodeJs",
      "•Express",
      "•MongoDb",
      "•JWT",
    ],
    deploy: false,
    linkGitHub: "",
    linkDeploy: "",
    category: ["Todos", "Sistema-de-gestion"],
  },
  {
    title: "Thercarr",
    shortDescription:
      "LandingPage de empresa orientada a la instalacion de unidades frigorificas para el transporte de cargas.",
    longDescription:
      "LandingPage promocionando a una empresa orientada a la instalacion de unidades frigorificas para el transporte de cargas. ",
    PortadaProject: thercarr,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1706546201/portfolio/thercarr/d2wemenb7g7hbvouaqpz.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1706546201/portfolio/thercarr/relq2oudaehplsb46t6j.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1706546200/portfolio/thercarr/tmyn2lk5je9difs0yaes.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1706547295/portfolio/thercarr/fy1piaobkzso2vo9kebi.mp4",
    tecnologies: ["•ReactJs", "•CSS", "•AOS", "•JS"],
    deploy: true,
    linkGitHub: "",
    linkDeploy: "https://www.thercarr.com.ar",
    category: ["Todos", "LandingPage"],
  },
  {
    title: "Karku",
    shortDescription:
      "Plataforma E-Comerce para productos de cosmetica natural complementada con Landingpage.",
    longDescription:
      "Karku es una plataforma en línea que combina la presentación de productos ecológicos con un sistema de compras online. El proyecto consta de dos partes principales: Una landingPage de presentación y un eCommerce con características avanzadas. El eCommerce de Karku permite a los usuarios explorar y comprar productos sostenibles en línea. ",
    PortadaProject: karku,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1703257079/portfolio/karku/mkxrdzqjflejwgaebt0p.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1703257079/portfolio/karku/wbifqb23r4srsewddvao.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1703257079/portfolio/karku/ozrlqkdnbfndtcjkhnvt.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1703257080/portfolio/karku/mxuws9qmmpegi4ln1qpy.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1703257201/portfolio/karku/uylwdvh2tibxcaak5e4k.mp4",
    tecnologies: ["•ReactJs", "•CSS", "•NodeJs", "•MongoDB"],
    deploy: true,
    linkGitHub: "",
    linkDeploy: "https://www.karku.com.ar",
    category: ["Todos", "E-commerce"],
  },
  {
    title: "Challenge-Banco",
    shortDescription:
      "Prueba tecnica para ingreso a un banco, realizando el mapeo y navegacion sobre cuentas bancarias.",
    longDescription: " ",
    PortadaProject: challengeBanco,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720640383/portfolio/challenges/upx2t0gym6rfwz9snbjm.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720640383/portfolio/challenges/u445kbk9rfhwg4afzbz1.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1720640388/portfolio/challenges/aokhqmb9nuohq21t11yj.mp4",
    tecnologies: ["•ReactJs", "•CSS"],
    deploy: false,
    linkGitHub:
      "https://github.com/ignacio-nicoletti/Challenges/tree/main/Challenge/Challenge-React",
    linkDeploy: "",
    category: ["Todos", "Challenges"],
  },
  {
    title: "Challenge-Marvel",
    shortDescription:
      "Prueba tecnica poniendo en practica mapeo de informacion .",
    longDescription: " ",
    PortadaProject: challengeMarvel,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720640676/portfolio/challenges/uilmow3zhj4xrvcl0qwe.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720640385/portfolio/challenges/vkiqaucn9lt4xazweyev.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1720640395/portfolio/challenges/sjwcrg4jjw7ot1jmp1ez.mp4",
    tecnologies: ["•ReactJs", "•CSS"],
    deploy: false,
    linkGitHub:
      "https://github.com/ignacio-nicoletti/Challenges/tree/main/challenge%20marvel",
    linkDeploy: "",
    category: ["Todos", "Challenges"],
  },
  {
    title: "Challenge-WakeUp",
    shortDescription:
      "Prueba tecnica consumiendo un backend propiamente creado con mapeo de restaurantes y realizacion de encomiendas .",
    longDescription: " ",
    PortadaProject: challengeWakeUp,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720650476/portfolio/challenges/lhoq5psij1hfuupslyvh.png",
    ],
    videoProject: "",
    tecnologies: ["•ReactJs", "•CSS", "•NodeJs", "•ExpresJs"],
    deploy: false,
    linkGitHub:
      "https://github.com/ignacio-nicoletti/Challenges/tree/main/ChallengeWakeUp",
    linkDeploy: "",
    category: ["Todos", "Challenges"],
  },
  {
    title: "Advance_detailer",
    shortDescription:
      "Desarrollo de LandingPage complementada con E-comerce. Dirigida a rubro de detailing de vehiculos.",
    PortadaProject: AdvancePortada,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697634902/portfolio/advance/wjh1hndl9utczdll3yfh.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697634900/portfolio/advance/mqlzqitq7voc7c6r8b8r.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697634899/portfolio/advance/am7qrtgqp7mjhidrlzw3.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697634891/portfolio/advance/qqjihsams84cx39g0733.png",
    ],
    // videoProject: advanceVideo,
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1697636201/portfolio/advance/bddljmo0wner2mtciq68.mp4",

    longDescription:
      " E-Comerce con LandingPage realizado para el rubro automotriz especificamente en la estetica, aportando informacion al usuario a cerca de trabajos realizados, venta de productos y compra de los mismos utilizando mercado Pago.",
    tecnologies: [
      "•NextJS",
      "•CSS",
      "•Typescript",
      "•NodeJs",
      "•MongoDB",
      "•Mercado Pago",
    ],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/Advance_detailer",
    linkDeploy: "",
    category: ["Todos", "E-commerce"],
  },
  {
    title: "NABIJASH",
    shortDescription:
      "Plataforma desarrollada en el Bootcamp SoyHenry para evalucion final y grupal.",
    longDescription:
      " Proyecto evaluativo grupal realizado en la carrera de programación, teniendo como objetivo la construccion de una pagina E-comerce, usando metodología Scrum, MongoDB y Typescript con nodeJs.   ",
    PortadaProject: nabijash,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1706798092/portfolio/nabijash/uswl7isnyepnmnzatsao.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1706798091/portfolio/nabijash/fcttxzvdvxwm0owk1s6f.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1706798092/portfolio/nabijash/fu7qyrgnnyllwadbg5fx.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1697636635/portfolio/nabijash/dxmuv60bxuyob6y368tq.mp4",
    tecnologies: [
      "•NodeJs",
      "•ExpressJs",
      "•MongoDB",
      "•ReactJs",
      "•Redux",
      "•Typescript",
    ],
    deploy: true,
    linkGitHub: "",
    linkDeploy: "https://nabijash.vercel.app/",
    category: ["Todos", "Sistema-de-gestion"],
  },
  {
    title: "VideoGames SPA",
    shortDescription:
      "Proyecto creado en SoyHenry como evalacion individual de los conocimientos aprendidos.",
    longDescription:
      "Proyecto evaluativo individual en la que se ponía a prueba lo aprendido en la carrera de programacion, realizando un CRUD con nodeJs y postgreSQL para luego ser defendido oralmente ante profesionales.",
    PortadaProject: videogame,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635008/portfolio/pi/e8awsqlnqoqwchobzjtm.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635010/portfolio/pi/ypsdem2fjr3jccoipjgn.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635009/portfolio/pi/uunijkpsr5o61lxstgfp.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635007/portfolio/pi/brgjyac5ok38untlpjf2.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1697634026/portfolio/lqnzcc4l2van5gnwg3f5.mp4",
    tecnologies: ["•ReactJs", "•Redux", "•NodeJs", "•Sequelize", "•PostgreSQL"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/proyecto_individual",
    linkDeploy: "",
    category: ["Todos", "Projects"],
  },
  {
    title: "Juego de cartas",
    shortDescription:
      "Juego de cartas por turnos creado con sockets para jugar online.",
    longDescription:
      "Juego creado para continuar con el aprendizaje de socketIo basado en repartija de cartas, turnos y apuesta de ganadas, comenzando 1 carta hasta 7 por jugador.",
    PortadaProject: proceso,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697635116/portfolio/berenjena/gi609xkyjk95bgec7h96.png",
    ],

    videoProject: "",
    tecnologies: ["•NextJs", "•JavaScript", "•CSS", "•Socket.io"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/Ta-Te-Ti-con-react-",
    linkDeploy: "",
    category: ["Todos", "Game"],
  },
  {
    title: "Ta - Te - Ti",
    shortDescription:
      "El famoso y tradicional juego de cruces y circulos desarrollado con ReactJs.",
    longDescription:
      "Juego creado para la práctica de libreria socketIo, basado en turnos y lograr completar un 3 en linea antes que el rival lo consiga.",
    PortadaProject: proceso,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•ReactJs", "•JavaScript", "•CSS", "•Socket.io"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/Ta-Te-Ti-con-react-",
    linkDeploy: "",
    category: ["Todos", "Game"],
  },
  {
    title: "Time-APP",
    shortDescription:
      "Aplicación de consumo de API y renderizado del tiempo con ReactJs.",
    longDescription:
      "Proyecto realizado como estudio, para práctica de consumo de API y mapeo de la información obtenida, en ella se puede buscar una lugar en específico y saber el clima de la semana. ",
    PortadaProject: TimeApp,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697637691/portfolio/weatherapp/c9enunroeowma61jdysv.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1697637690/portfolio/weatherapp/bxnb8lay3yxlj7fzy3a0.png",
    ],
    videoProject: "",
    tecnologies: ["•ReactJs", "•JavaScript", "•CSS", "•HTML"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/TimeApp",
    linkDeploy: "",
    category: ["Todos", "Projects"],
  },
  {
    title: "Portfolio-Droner",
    shortDescription:
      "Portfolio realizado para un Droner y utilizado para su publicidad",
    longDescription:
      "Portfolio diseñado para una persona especializada en el manejo de drones, aportando videos de sus proyectos y una descripcion de si.",
    PortadaProject: Drone,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•ReactJs", "•CSS", "•TypeScript", "•EmailJs"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/Drone-",
    linkDeploy: "",
    category: ["Todos", "Portfolios"],
  },
  {
    title: "Portfolio-Nicoletti-2022",
    shortDescription: "Portfolio realizado en 2022",
    longDescription: "",
    PortadaProject: portfolio2022,
    MediaProject: [
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720650933/portfolio/portfolios/m1dcupfgp5gofatxdq55.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720650933/portfolio/portfolios/vlsyetbocbfingdxigmi.png",
      "https://res.cloudinary.com/dbu2biawj/image/upload/v1720650932/portfolio/portfolios/vqmunpubhciwa6cp2dze.png",
    ],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1720650937/portfolio/portfolios/rlbcpzwjxo9yyyzv3ojw.mp4",
    tecnologies: ["•ReactJs", "•CSS"],
    deploy: false,
    linkGitHub: "",
    linkDeploy: "",
    category: ["Todos", "Portfolios"],
  },
  {
    title: "Store",
    shortDescription: "Aprendiendo NextJs creando una store con formato SPA.",
    longDescription:
      "Aplicación desarrollada para interiorizarme en el uso del Framework NextJs, en ella se puede visualizar productos de venta, poder agregarlos a un carrito o en su defecto eliminarlos del carrito y saber el total a pagar.",
    PortadaProject: Store,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•NextJS", "•CSS", "•JavaScript", "•HTML"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/storeAPP-nextJS",
    linkDeploy: "",
    category: ["Todos", "E-commerce"],
  },
  {
    title: "App de turnos",
    shortDescription:
      "Desarrollo de una app para reservar turno, marcando dÍa y horario.",
    longDescription:
      "Aplicación desarrollada para comercio de estética, en el cual dispone la posibilidad de marcar el servicio, fecha y horario, esta envía un email al admin para luego confirmar el turno.",
    PortadaProject: Nails,
    MediaProject: [],
    videoProject: "",
    tecnologies: ["•NextJS", "•CSS", "•JavaScript", "•Emailjs"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/nailsPage",
    linkDeploy: "",
    category: ["Todos", "Sistema-de-gestion"],
  },
  {
    title: "Proyecto final tecnología II",
    shortDescription:
      "Proyecto grupal desarrollado con Processing y TuioTracker.",
    longDescription:
      "Se realizó un proyecto grupal utilizando Processing y Tuio, programa que mediante un patrón trackea su posición entre ciertos parámetros. El juego consiste en derrotar una hydra de 3 cabezas, cubriendo/esquivando sus ataques y disparando flechas.",
    PortadaProject: tecno2,
    MediaProject: [],
    videoProject:
      "https://res.cloudinary.com/dbu2biawj/video/upload/v1697640815/portfolio/tecno2/cbh9psaj0v11bobqanwi.mp4",
    tecnologies: ["•Processing", "•Java", "•Tuio", "•POO"],
    deploy: false,
    linkGitHub: "https://github.com/ignacio-nicoletti/tecnologia-2FBA",
    linkDeploy: "",
    category: ["Todos", "Game"],
  },
];

export default DBProyect;
