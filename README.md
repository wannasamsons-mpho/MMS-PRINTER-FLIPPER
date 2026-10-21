# MMS PRINTER FLIPPER

A responsive, dependency-free website for MMS PRINTER FLIPPER, built with plain HTML, CSS and JavaScript. It does not need a build step, framework, or package installation.

## Publish on Render

1. Push this project to a GitHub repository. If you have not done that yet, follow the GitHub steps below.
2. Sign in to [Render](https://render.com/), choose **New → Blueprint**, and connect your GitHub repository.
3. Render will find `render.yaml` and configure the site as a static website. Review the settings and create the service.
4. When the deploy finishes, open the `.onrender.com` link Render provides.

The Blueprint uses the project root (`.`) as the published folder because `index.html` and its CSS and JavaScript files are in the root. There is no backend, build tool, or dependency installation. Push later changes to the connected branch to deploy an update.

Alternatively, in the Render dashboard create a **New → Static Site**, connect the repository, leave **Root Directory** blank, set **Build Command** to `echo "No build required"`, and set **Publish Directory** to `.`.

## Run locally

1. Open this folder in VS Code.
2. Install the **Live Server** extension in VS Code if it is not already installed.
3. Right-click `index.html` and choose **Open with Live Server**.

Alternatively, if Python is installed, open a terminal in this folder and run:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Add your business details

Edit `config.js` and fill in the phone number, email, address, WhatsApp number, and social profile URLs. Use an international-format WhatsApp number with digits only (for example, a South African number beginning with `27`, without a `+`). Unavailable details can stay blank; unconfigured social links are hidden.

## Quotation form

The form validates the visitor's details in the browser but does **not** send or save them. There is no backend or messaging integration. The form explicitly tells visitors this; add a backend or a real form service before describing it as a submitted quotation.

## Publish updates to GitHub

Create a repository on GitHub, then run these commands in the VS Code terminal from this project folder (replace the URL with your repository's URL):

```powershell
git init
git add .
git commit -m "Build MMS PRINTER FLIPPER website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

For later changes (including updates to a connected Render site):

```powershell
git add .
git commit -m "Describe your website update"
git push
```

You can publish this static site using GitHub Pages from the repository's **Settings → Pages** screen, selecting the `main` branch and root folder.
