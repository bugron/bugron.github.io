import { defineConfig } from "astro/config";
import starlightBlog from "starlight-blog";
import starlight from "@astrojs/starlight";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import { BLOG_URL } from "./src/constants";
import tailwindcss from "@tailwindcss/vite";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.DEV ? "http://localhost:4321/" : BLOG_URL,
    image: {
        objectFit: "contain",
    },
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        starlight({
            lastUpdated: true,
            title: "Arsen Melikyan",
            favicon: "/favicon.ico",
            plugins: [
                starlightBlog({
                    authors: {
                        bugron: {
                            name: "Arsen Melikyan",
                            title: "Staff Software Engineer @ ServiceTitan",
                            picture: "/arsen-avatar.jpg",
                            url: "https://melikyan.dev",
                        },
                    },
                }),
                starlightImageZoom(),
                starlightLinksValidator({
                    exclude: ["/blog/"],
                }),
            ],
            logo: {
                dark: "/public/logo-dark.png",
                light: "/public/logo-light.png",
                alt: "Arsen Melikyan's personal blog logo",
                replacesTitle: true,
            },
            editLink: {
                baseUrl:
                    "https://github.com/bugron/bugron.github.io/edit/astro/",
            },
            customCss: ["./src/styles/custom.css"],
            components: {
                MarkdownContent:
                    "./src/components/overrides/MarkdownContent.astro",
                ThemeSelect: "starlight-blog/components/ThemeSelect.astro",
                TableOfContents: "./src/components/TableOfContents.astro",
                Header: "./src/components/Header.astro",
                Head: "./src/components/Head.astro",
            },
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/bugron",
                },
                {
                    icon: "linkedin",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/arsen-melikyan/",
                },
                {
                    icon: "x.com",
                    label: "X",
                    href: "https://twitter.com/bugron1",
                },
                {
                    icon: "youtube",
                    label: "YouTube",
                    href: "https://www.youtube.com/@bugron",
                },
            ],
            head: [
                {
                    tag: "script",
                    attrs: {
                        src: "https://www.googletagmanager.com/gtag/js?id=G-EWP344X6RY",
                        type: "text/partytown",
                        async: true,
                    },
                },
                {
                    tag: "script",
                    attrs: {
                        type: "text/partytown",
                    },
                    content: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-EWP344X6RY');
					`,
                },
            ],
        }),
        compress(),
        robotsTxt(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ],
});
