import { DiJavascript1 } from "react-icons/di";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiFirebase,
  SiFramer,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiNodedotjs,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiPhp,
  SiMaterialui,
  SiPython,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiNginx,
  SiVercel,
  SiCloudflare,
  SiJest,
  SiCypress,
  SiPostman,
  SiSentry,
  SiDatadog,
  SiOpenai,
  SiStripe,
  SiPaypal,
  SiJira,
  SiNestjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Gsap from "../vectors/gsap";

const Frontend = [
  {
    name: "React Js",
    icon: <FaReact />,
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "Material UI",
    icon: <SiMaterialui />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "Javascript",
    icon: <DiJavascript1 />,
  },
  {
    name: "Sass",
    icon: <FaSass />,
  },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
  },
  {
    name: "GSAP",
    icon: <Gsap />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
  },
];

const Backend = [
  {
    name: "Node Js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Django",
    icon: <SiDjango />,
  },
  {
    name: "Express Js",
    icon: <SiExpress />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
  },
  {
    name: "Python (FastAPI, Flask)",
    icon: <SiPython />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "SiSqlite",
    icon: <SiSqlite />,
  },
  {
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    name: "PHP",
    icon: <SiPhp />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
];

const DevOpsCloud = [
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "Github",
    icon: <SiGithub />,
  },
  {
    name: "GitLab CI/CD",
    icon: <SiGitlab />,
  },
  {
    name: "Jenkins",
    icon: <SiJenkins />,
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
  },
  {
    name: "Cloudflare",
    icon: <SiCloudflare />,
  },
];

const TestingPerformance = [
  {
    name: "Jest",
    icon: <SiJest />,
  },
  {
    name: "Cypress",
    icon: <SiCypress />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    name: "Sentry",
    icon: <SiSentry />,
  },
  {
    name: "Datadog",
    icon: <SiDatadog />,
  },
];

const Other = [
  {
    name: "OpenAI",
    icon: <SiOpenai />,
  },
  {
    name: "Stripe",
    icon: <SiStripe />,
  },
  {
    name: "PayPal",
    icon: <SiPaypal />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Jira",
    icon: <SiJira />,
  },
];

const SkillsData = {
  Frontend,
  Backend,
  DevOpsCloud,
  TestingPerformance,
  Other,
};

export default SkillsData;
