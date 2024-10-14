export const RESUME_DATA = {
    name: "Arsen Melikyan",
    initials: "AM",
    location: "Yerevan, Armenia, AMT",
    locationLink: "https://www.google.com/maps/place/Yerevan,+Armenia",
    about: "Senior Software Engineer focused on building products with extra attention to detail",
    summary:
        "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
    avatarUrl: "https://avatars.githubusercontent.com/u/13225220?v=4",
    personalWebsiteUrl: "https://melikyan.dev",
    contact: {
        email: "melarsen94+job@gmail.com",
        tel: "+37433760071",
        github: "bugron",
        linkedin: "arsen-melikyan",
        X: "bugron1",
        youtubeUsername: "@bugron",
    },
    education: [
        {
            school: "Yerevan State University",
            degree: "Bachelor's Degree in Physics and qualification of a teacher",
            start: "2012",
            end: "2016",
        },
    ],
    work: [
        {
            company: "ServiceTitan",
            link: "https://servicetitan.com",
            badges: [],
            title: "Senior Software Engineer -> Staff Software Engineer",
            start: "2021",
            descriptions: [
                "Implemented and delivered a front-end solution for a new ServiceTitan business direction.",
                "Improved front-end platform solutions at ServiceTitan and contributed to the in-house design system.",
                "Wrote and maintained developer documentation. Actively maintained the core platform front-end documentation.",
                "Implemented TeamCity configurations for the front-end project and a GitHub Actions PR synchronization workflow for the back-end repository.",
            ],
            usedTechnologies: [
                "React.js",
                "TypeScript",
                "Mobx",
                "Esri maps",
                "GitHub Actions",
                "Jetbrains TeamCity",
                "in-house front-end platform, and design system solutions",
            ],
        },
        {
            company: "Tidepool Labs Europe",
            link: "https://www.tidepoollabs.com/",
            badges: [],
            title: "Full Stack JavaScript Developer",
            start: "2021",
            end: "2021",
            descriptions: [
                "Improved CircleCI pull request check and feature branch deployment workflow durations by ~4 and ~2.5 times respectively.",
                "Improved developer experience by integrating static code analysis and code styling tools into the development process.",
                "Integrated third-party recipe service into the system allowing the users to use a recipe search engine powered by Elasticsearch.",
                "Dramatically improved third-party search results by applying an approximate string-matching algorithm.",
                "Simplified project structure by doing a major refactor and removing unnecessary parts which allowed for reduced duplication.",
                "Implemented a content security policy to protect client's web application from XSS attacks.",
            ],
            usedTechnologies: [
                "React.js",
                "Redux",
                "Node.js",
                "MongoDB",
                "Postgres",
                "Elasticsearch",
                "AWS",
                "CircleCI",
            ],
        },
        {
            company: "Kyndryl (previously known as IBM CIC CE Brno)",
            link: "https://www.kyndryl.com/us/en",
            badges: [],
            title: "RPA Developer, Full Stack JavaScript Developer",
            start: "2016",
            end: "2018",
            descriptions: [
                "Enabled Service Desk personnel to perform their tasks with 300% improved time efficiency by developing a web application to bridge multiple ticketing tools and standardizing the ticket creation process.",
                "Developed a browser extension (Chrome, FF, Opera, etc.) to automate routine tasks of our users.",
                "Saved FTEs by automating business and IT processes with Blue Prism and Automation Anywhere.",
                "Created cognitive solutions using IBM Watson (Assistant, NLC, etc.) and deployed them to IBM Cloud.",
            ],
            usedTechnologies: [
                "React.js",
                "Redux",
                "Vue.js",
                "Vuex",
                "WebExtentions API",
                "Blockchain (Hyperledger Composer, Fabric)",
                "Node.js",
                "MongoDB",
                "MySQL",
                "IBM Cloud",
                "IBM Watson Services",
                "Blue Prism",
                "Automation Anywhere",
            ],
        },
        {
            company: "Digilite",
            link: "https://digilite.us/",
            badges: ["Remote"],
            title: "Full Stack JavaScript Developer",
            start: "2018",
            end: "2018",
            descriptions: [
                "Temporarily took over the maintenance and development of 8thmind.com.",
                "Improved test coverage of the project and fixed existing broken tests.",
                "Suggested the team switch from Excel files to Atlassian Bitbucket for better issue management.",
            ],
            usedTechnologies: [
                "Ember.js",
                "Node.js",
                "MySQL",
                "Mocha",
                "Chai",
                "Atlassian Bitbucket",
            ],
        },
    ],
    skills: [
        "TypeScript/JavaScript",
        "React/Next.js",
        "Node.js/Nest.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "Websockets",
    ],
    projects: [
        {
            title: "melikyan.dev",
            techStack: [
                { name: "Astro", url: "https://astro.build/" },
                { name: "Starlight", url: "https://starlight.astro.build/" },
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            ],
            description:
                "My personal website and blog. Built with Astro and Starlight.",
            link: {
                label: "melikyan.dev",
                href: "https://melikyan.dev/",
            },
        },
        {
            title: "search.melikyan.dev",
            techStack: [
                { name: "Node.js", url: "https://nodejs.org/" },
                { name: "pagefind", url: "https://pagefind.app/" },
            ],
            description:
                "Aggregated search of cooperpress.com, bytes.dev and thisweekinreact.com publications starting 2020.",
            link: {
                label: "search.melikyan.dev",
                href: "https://search.melikyan.dev/",
            },
        },
        {
            title: "PR Visualizer",
            techStack: [
                { name: "Next.js", url: "https://nextjs.org/" },
                { name: "@xyflow/react", url: "https://reactflow.dev/" },
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            ],
            description:
                "This tool reveals the connections between different PRs in the same repo and helps with keeping track of chain PRs.",
            link: {
                label: "github.com",
                href: "https://github.com/bugron/pr-visualizer/",
            },
        },
        {
            title: "URL Redirector 2",
            techStack: [
                { name: "Preact", url: "https://preactjs.com/" },
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
                { name: "Vite", url: "https://vitejs.dev/" },
                {
                    name: "Chrome extension",
                    url: "https://developer.chrome.com/docs/extensions/",
                },
            ],
            description:
                "A Chrome extension for local or remote URL redirection.",
            link: {
                label: "github.com",
                href: "https://github.com/bugron/url-redirector-2/",
            },
        },
        {
            title: "@bugron/validate-dependabot-yaml",
            techStack: [
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
                { name: "Node.js", url: "https://nodejs.org/" },
                {
                    name: "CLI",
                    url: "https://en.wikipedia.org/wiki/Command-line_interface",
                },
            ],
            description:
                "A CLI that tests Dependabot configuration files against the official v2 JSON schema for validation errors.",
            link: {
                label: "github.com",
                href: "https://github.com/bugron/validate-dependabot-cli/",
            },
        },
        {
            title: "Offline registry for npm",
            techStack: [
                {
                    name: "JavaScript",
                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                },
                { name: "Node.js", url: "https://nodejs.org/" },
                { name: "Express", url: "https://expressjs.com/" },
            ],
            description:
                "Local npm registry server based on already installed packages in the registry's node_modules folder.",
            link: {
                label: "github.com",
                href: "https://github.com/bugron/npm-offline-registry/",
            },
        },
        {
            title: "Awesome ArmDevs",
            techStack: [
                { name: "GitHub", url: "https://github.com/" },
                {
                    name: "Markdown",
                    url: "https://daringfireball.net/projects/markdown/",
                },
            ],
            description:
                "A curated list of YouTube channels, GitHub handles, and personal blogs of Armenian developers who create educational content.",
            link: {
                label: "github.com",
                href: "https://github.com/bugron/awesome-armdevs",
            },
        },
        {
            title: "Armenian translation of javascript.info",
            techStack: [
                { name: "GitHub", url: "https://github.com/" },
                {
                    name: "Markdown",
                    url: "https://daringfireball.net/projects/markdown/",
                },
            ],
            description:
                "I used to manage the translation process of the well-known javascript.info, also translated some articles myself.",
            link: {
                label: "github.com",
                href: "https://github.com/javascript-tutorial/hy.javascript.info/",
            },
        },
        {
            title: "Microsoft terminology search extension",
            techStack: [
                { name: "GitHub", url: "https://github.com/" },
                {
                    name: "VSCode extension",
                    url: "https://code.visualstudio.com/api",
                },
            ],
            description:
                "A simple Extension for VSCode to search easily using Microsoft Terminology Search",
            link: {
                label: "github.com",
                href: "https://github.com/bugron/microsoft-terminology-search/",
            },
        },
        {
            title: "Quiz Mobile App",
            techStack: [
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
                { name: "React Native", url: "https://reactnative.dev/" },
                { name: "Expo", url: "https://expo.dev/" },
            ],
            description: "",
            link: {
                label: "github.com",
                href: "https://github.com/bugron/defense-questionnaire-mobile-app/",
            },
        },
        {
            title: "8thmind.com",
            techStack: [
                { name: "Ember.js", url: "https://emberjs.com/" },
                { name: "Node.js", url: "https://nodejs.org/" },
                { name: "MySQL", url: "https://www.mysql.com/" },
                { name: "DigitalOcean", url: "https://www.digitalocean.com/" },
            ],
            description:
                "I worked on both the front-end (Ember.js) and back-end (Node.js, MySQL) of the project.",
            link: {
                label: "8thmind.com",
                href: "https://www.8thmind.com/",
            },
        },
        {
            title: "iorad.com",
            techStack: [
                { name: "React.js", url: "https://reactjs.org/" },
                {
                    name: "Chrome extension",
                    url: "https://developer.chrome.com/docs/extensions/",
                },
            ],
            description:
                "I worked on both the front-end (React.js) app and a Chrome web extension.",
            link: {
                label: "iorad.com",
                href: "https://www.iorad.com/",
            },
        },
    ],
} as const;
