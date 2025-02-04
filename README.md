# Project Setup Guide

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (or any preferred code editor)

### 1. Clone the Repository
To get started, clone this repository to your local machine:
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 2. Install Dependencies
Run the following command to install all necessary dependencies:
```bash
npm install
```

### 3. Running the Development Server
Start the Next.js development server with:
```bash
npm run dev
```
The app should now be running at `http://localhost:3000/`.

---

## Creating a Branch for Development
To prevent merge conflicts, each developer should work on their own branch.

### 1. Pull the Latest Changes
Before creating a new branch, ensure your local main branch is up to date:
```bash
git checkout main
git pull origin main
```

### 2. Create and Switch to a New Branch
Name your branch based on the feature or bug fix you are working on:
```bash
git checkout -b feature-branch-name
```
For example:
```bash
git checkout -b feature-navbar
```

### 3. Work on Your Feature
Make your changes and commit them:
```bash
git add .
git commit -m "Added navbar component"
```

### 4. Push Your Branch to GitHub
```bash
git push origin feature-branch-name
```

### 5. Open a Pull Request (PR)
1. Go to the repository on GitHub.
2. Navigate to the **Pull Requests** tab.
3. Click **New Pull Request**.
4. Select your branch and compare it to `main`.
5. Add a description of your changes and request a review.

### 6. Merge the PR Once Approved
Once your code is reviewed and approved, merge the PR into the `main` branch. After merging, **delete your branch** to keep the repository clean.

---

## Best Practices
- **Pull before pushing:** Always run `git pull origin main` before pushing to avoid conflicts.
- **Use descriptive commit messages:** Example: `git commit -m "Fixed navbar alignment issue"`
- **Keep branches small and focused:** A branch should handle one feature or bug fix at a time.
- **Review code before merging:** Always request a review from another team member.

---

## Deployment (Optional)
If deploying with **Vercel**, follow these steps:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the project:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to link and deploy your project.

For automatic deployments, connect the GitHub repository to Vercel.

---

This guide ensures smooth collaboration while minimizing merge conflicts. If you have any issues, reach out to the team! 🚀

