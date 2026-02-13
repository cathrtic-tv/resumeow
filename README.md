# Résuméow - Résumé Manager
<div>
    <picture>
        <!-- <source srcset=".github/README/resumeow.png" media="(prefers-color-scheme: light)"> -->
        <img src=".github/README/resumeow.png" width="100%" alt="Résuméow Logo">
    </picture>
    <div>
        <!-- <span>&nbsp;</span> -->
        <!-- <a href="https://ko-fi.com/CathRTic_tv"><img align="right" src="https://img.shields.io/badge/Support%20me%20on%20Ko--fi-%231F6FEBFF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTEuMzUxIDIuNzE1Yy0yLjcgMC00Ljk4Ni4wMjUtNi44My4yNkMyLjA3OCAzLjI4NSAwIDUuMTU0IDAgOC42MWMwIDMuNTA2LjE4MiA2LjEzIDEuNTg1IDguNDkzYzEuNTg0IDIuNzAxIDQuMjMzIDQuMTgyIDcuNjYyIDQuMTgyaC44M2M0LjIwOSAwIDYuNDk0LTIuMjM0IDcuNjM3LTRhOS41IDkuNSAwIDAgMCAxLjA5MS0yLjMzOEMyMS43OTIgMTQuNjg4IDI0IDEyLjIyIDI0IDkuMjA4di0uNDE1YzAtMy4yNDctMi4xMy01LjUwNy01Ljc5Mi01Ljg3Yy0xLjU1OC0uMTU2LTIuNjUtLjIwOC02Ljg1Ny0uMjA4bTAgMS45NDdjNC4yMDggMCA1LjA5LjA1MiA2LjU3MS4xODJjMi42MjQuMzExIDQuMTMgMS41ODQgNC4xMyA0di4zOWMwIDIuMTU2LTEuNzkyIDMuODQ0LTMuODcgMy44NDRoLS45MzVsLS4xNTYuNjQ5Yy0uMjA4IDEuMDEzLS41OTcgMS44MTgtMS4wMzkgMi41NDZjLS45MDkgMS40MjgtMi41NDUgMy4wNjQtNS45MjIgMy4wNjRoLS44MDVjLTIuNTcxIDAtNC44MzEtLjg4My02LjA3OC0zLjE5NWMtMS4wOS0yLTEuMjk4LTQuMTU1LTEuMjk4LTcuNTA2YzAtMi4xODEuODU3LTMuNDAyIDMuMDEyLTMuNzE0YzEuNTMzLS4yMzMgMy41NTktLjI2IDYuMzktLjI2bTYuNTQ3IDIuMjg3Yy0uNDE2IDAtLjY1LjIzNC0uNjUuNTQ2djIuOTM1YzAgLjMxMS4yMzQuNTQ1LjY1LjU0NWMxLjMyNCAwIDIuMDUxLS43NTQgMi4wNTEtMnMtLjcyNy0yLjAyNi0yLjA1Mi0yLjAyNm0tMTAuMzkuMTgyYy0xLjgxOCAwLTMuMDEzIDEuNDgtMy4wMTMgMy4xNDJjMCAxLjUzMy44NTggMi44NTcgMS45NDkgMy44OTdjLjcyNy43MDEgMS44NyAxLjQyOSAyLjY0OSAxLjg5NmExLjQ3IDEuNDcgMCAwIDAgMS41MDcgMGMuNzgtLjQ2NyAxLjkyMi0xLjE5NSAyLjYyMy0xLjg5NmMxLjExNy0xLjAzOSAxLjk3NC0yLjM2NCAxLjk3NC0zLjg5N2MwLTEuNjYyLTEuMjQ3LTMuMTQyLTMuMDM5LTMuMTQyYy0xLjA2NSAwLTEuNzkyLjU0NS0yLjMzOCAxLjI5OGMtLjQ5My0uNzUzLTEuMjQ2LTEuMjk4LTIuMzEyLTEuMjk4Ii8+PC9zdmc+"></a> -->
    </div>
</div>

<br>

<p align="center">
    <a href="#installation-and-usage-guide">Installation and Usage</a>
    <br>
    <a href="#environment-variables">Env. Variables</a> •
    <a href="#résumé-data">Résumé Data</a> •
    <a href="#résumé-icons">Résumé Icons</a>
</p>

<br>

Create, maintain, and generate multiple professional résumé versions using JSON data. Résuméow allows for tailored résumés with a single source of truth (SSOT), providing multiple styles and formats to choose from.
- Flexible data structure supporting multiple résumés with a single source of truth.
- Generate PDF files and host as a local webapp for live preview and editing.
- Customizable icon library with Material Design Icons and Simple Icons included by default.



<br>

## Installation and Usage Guide
To get started with Résuméow, clone the repository and install the package dependencies.

> [!NOTE]
> This project requires [Node.js](https://nodejs.org), and was last tested using `Node.js v22.16.0` and `npm v11.5.0`.\
> Find your versions by running `node -v` and `npm -v` respectively.

<br>

**Install package dependencies:**
```shell
npm install
```

**Run as local webapp:**
```shell
npm run dev
```

**Generate PDF files:**
```shell
npm run main
```



<br>

## Environment Variables
The following environment variables can be configured to customize behavior:

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `OUTPUT_PATH` | `"./node_outputs/.env"` | Output location for logs and saved PDFs. |
| `PORT` | `3000` | The port number used for Vite when running `npm run dev`.<br>PORT + 1 is used when running `npm run main`. |



<br>

## Résumé Data
When running the application, résumé data is loaded from `.json5` files stored in the [`/data`](/data) directory. This flexible system allows you to create multiple résumé variants from a single source of truth.

Data files are processed as follows:
- [`__default.json5`](/data/__default.json5) is mandatory and should be used as the base for all of your résumé details. This includes your name, contact information, education, and past experiences, allowing to avoid repeating basic details.
- Additional `.json5` files can extend or override your `__default.json5` data to create specialized versions of your résumé. To completely remove a value, simply set the desired keys value to `null`.
- Section and subsection keys are combined and sorted in reverse order. Using prefixes which start with numbers, such as `2024-Q2_` and `2024-Q1_`, allows for easy control over display orders with the most recent dates appearing first.

> [!TIP]
> Prefixing data `.json5` files with `_` will favorite them, pinning them to the top of your list in the webapp interface homepage.

<br>

Your `data.json5` file should have a similar structure to the following:

**About Section:**
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

**Aside Sections:**
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

**Main Sections:**
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

## Résumé Icons
Icons can be used in sections, subsections, and certain elements depending on the résumé style. Icons are referenced as relative paths from the [`src/assets/icons`](src/assets/icons) directory and should include the file extension.

<br>

By default, the following icon sets are included:

<a href="https://github.com/Templarian/MaterialDesign" title="Material Design Icons"><img src="https://img.shields.io/badge/Material_Design_Icons-%232194F3FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDcuMnYyLjRoOS42VjBIMjR2Ny4yaC0yLjR2OS42SDI0VjI0aC03LjJ2LTIuNEg3LjJWMjRIMHYtNy4yaDIuNFY3LjJIMHptMTYuOCA3LjJWNC44SDcuMnYyLjRINC44djkuNmgyLjR2Mi40aDkuNnYtMi40aDIuNFY3LjJNMi40IDIuNHYyLjRoMi40VjIuNG0xNC40IDB2Mi40aDIuNFYyLjRNMi40IDE5LjJ2Mi40aDIuNHYtMi40bTE0LjQgMHYyLjRoMi40di0yLjR6Ii8+PC9zdmc+"></a>
<a href="https://github.com/simple-icons/simple-icons" title="Simple Icons"><img src="https://img.shields.io/badge/Simple_Icons-%23111111FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMEM4LjY4OCAwIDYgMi42ODggNiA2czIuNjg4IDYgNiA2YzQuNjQtLjAwMSA3LjUyNiA1LjAzOSA1LjE3NiA5LjA0aDEuNjhBNy41MDcgNy41MDcgMCAwIDAgMTIgMTAuNUE0LjUgNC41IDAgMCAxIDcuNSA2YzAtMi40ODQgMi4wMTYtNC41IDQuNS00LjVzNC41IDIuMDE2IDQuNSA0LjVIMThjMC0zLjMxMi0yLjY4OC02LTYtNm0wIDNhMyAzIDAgMCAwIDAgNmM0IDAgNC02IDAtNm0wIDEuNUExLjUgMS41IDAgMCAxIDEzLjUgNnYuMDAyYy0uMDAyIDEuMzM2LTEuNjE3IDIuMDAzLTIuNTYxIDEuMDU4UzEwLjY2NCA0LjUgMTIgNC41TTcuNSAxNXYxLjVIOXY2SDQuNVYyNGgxNXYtMS41SDE1di02aDEuNVYxNVptMyAxLjVoM3Y2aC0zem0tNiAxLjQ3YzAgMS4wOS4yMTYgMi4xMDkuNjQ0IDMuMDY5aDEuNjg0QTUuOTYgNS45NiAwIDAgMSA2IDE3Ljk3WiIvPjwvc3ZnPg=="></a>

<br>

**Example usage:**
```json
"icon": "Icon_Set/icon-name.svg"
```

**Adding custom icons:**
1. Create a new directory in [`/src/assets/icons`](/src/assets/icons).
2. Add your SVG files to the new directory.
3. Reference them using the `directory/filename` pattern shown above.

