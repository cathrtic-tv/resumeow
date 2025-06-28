# Résuméow - Résumé Manager
<picture><img src=".github/README/Banner.png" width="1024"></picture><br><br>
Create and maintain multiple professional résumé versions, using json data.\
Résuméow allows for tailored résumés with a single source of truth (SSOT), and provides a number of styles to choose from.



<br>

## Commands
Package Installation:
```shell
npm install
```

Running the app:
```shell
npm run dev
# or
npx vite
```

<br>

> [!NOTE]
> Remember to create your `.env` file.

<br>

This project uses npm, and was last tested using `Node.js v22.16.0` and `npm 10.8.1`.
> If you're having trouble, find your versions by running `node -v` and `npm -v` respectively.\
> You can download and update Node.js, which includes npm, [here](https://nodejs.org/en/download).



<br>

## Résumé Data
Data for this app is stored in [`/data`](/data), as a number of `.json5` files.
- [`__default.json5`](/data/__default.json5) is mandatory and contains your base résumé information (name, contacts, experience, education, etc.)
- Additional `.json5` files can be used to extend or override your default data to create specialized versions of your résumé

<br>

> [!TIP]
> Prefixing your `data.json5` files with `_` will favorite it, pinning it to the top of your list.

<br>

Your `data.json5` file should have a similar structure to the following:

```json
"about": {
    "name": "Junior McJohnson",
    "profession": "CEO and Security Expert",
    "details": [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    ],
    "email": "contact@example.com",
    "location": "Unknown, Here",
    "phone": "+###########",
    "phoneLabel": "(+##) ### ### ###",
    "socials": {
        "linkedin": {
            "icon": "Material_Design_Icons/linkedin.svg",
            "link": "https://www.linkedin.com/in/",
            "linkLabel": "linkedin.com/in/",
        },
    },
}
```
```json
"asideSections": {
    "00_skills": {
        "title": "Skills",
        "icon": "Material_Design_Icons/auto-fix.svg",
        "subsections": {
            "0010_competencies": {
                "title": "Competencies",
                "details": [
                    { "label": "Praesent Euismod" },
                    { "label": "Mauris Dapibus" },
                ],
            },
        },
    },
}
```
```json
"mainSections": {
    "00_experiences": {
        "title": "Experiences",
        "icon": "Material_Design_Icons/briefcase-variant.svg",
        "subsections": {
            "2025-05_alfa-acta": {
                "date": "2025/05 - Present",
                "title": "Chief Executive Officer",
                "company": "ALFA ACTA",
                "location": "Somewhere, Here",
                "locationType": "Hybrid",
                "link": "https://www.example.com",
                "linkLabel": "example.com",
                "details": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                ],
            },
        },
    },
}
```

<br>

> [!NOTE]
> Section and subsection keys are sorted and ordered in reverse, with higher numbers displayed first. Use prefixes like `2024-a_`, `2024-b_`, or `2025-0_` to organize and control display order across data files.



<br>

## Résumé Icons
By default, the following icon sets are included:

<a href="https://github.com/Templarian/MaterialDesign" title="Material Design Icons"><img src="https://img.shields.io/badge/Material_Design_Icons-%232194F3FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDcuMnYyLjRoOS42VjBIMjR2Ny4yaC0yLjR2OS42SDI0VjI0aC03LjJ2LTIuNEg3LjJWMjRIMHYtNy4yaDIuNFY3LjJIMHptMTYuOCA3LjJWNC44SDcuMnYyLjRINC44djkuNmgyLjR2Mi40aDkuNnYtMi40aDIuNFY3LjJNMi40IDIuNHYyLjRoMi40VjIuNG0xNC40IDB2Mi40aDIuNFYyLjRNMi40IDE5LjJ2Mi40aDIuNHYtMi40bTE0LjQgMHYyLjRoMi40di0yLjR6Ii8+PC9zdmc+"></a>
<a href="https://github.com/simple-icons/simple-icons" title="Simple Icons"><img src="https://img.shields.io/badge/Simple_Icons-%23111111FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMEM4LjY4OCAwIDYgMi42ODggNiA2czIuNjg4IDYgNiA2YzQuNjQtLjAwMSA3LjUyNiA1LjAzOSA1LjE3NiA5LjA0aDEuNjhBNy41MDcgNy41MDcgMCAwIDAgMTIgMTAuNUE0LjUgNC41IDAgMCAxIDcuNSA2YzAtMi40ODQgMi4wMTYtNC41IDQuNS00LjVzNC41IDIuMDE2IDQuNSA0LjVIMThjMC0zLjMxMi0yLjY4OC02LTYtNm0wIDNhMyAzIDAgMCAwIDAgNmM0IDAgNC02IDAtNm0wIDEuNUExLjUgMS41IDAgMCAxIDEzLjUgNnYuMDAyYy0uMDAyIDEuMzM2LTEuNjE3IDIuMDAzLTIuNTYxIDEuMDU4UzEwLjY2NCA0LjUgMTIgNC41TTcuNSAxNXYxLjVIOXY2SDQuNVYyNGgxNXYtMS41SDE1di02aDEuNVYxNVptMyAxLjVoM3Y2aC0zem0tNiAxLjQ3YzAgMS4wOS4yMTYgMi4xMDkuNjQ0IDMuMDY5aDEuNjg0QTUuOTYgNS45NiAwIDAgMSA2IDE3Ljk3WiIvPjwvc3ZnPg=="></a>

<br>

To add more icons, create a new directory in [`/src/assets/icons`](/src/assets/icons) and add your SVG files.
