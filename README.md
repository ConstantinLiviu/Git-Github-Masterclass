# 🎓 Git & GitHub Masterclass Hub

### Welcome to my Git & GitHub Masterclass Hub. This repository has evolved from a simple file storage into a professional-grade CI/CD (Continuous Integration / Continuous Deployment) infrastructure.
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/ConstantinLiviu/Git-Github-Masterclass/tree/gh-pages.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/ConstantinLiviu/Git-Github-Masterclass/tree/gh-pages)
![GitHub Release](https://img.shields.io/github/v/release/ConstantinLiviu/Git-Github-Masterclass)

### 🏗️ Project Architecture

This project is organized as a central hub that interconnects various course sections, utilizing modern DevOps practices for automation and testing.

 - **Universal Logic**: JavaScript implementations designed to run seamlessly in both Browser and Node.js environments.

 - **Unit Testing**: A robust test suite using `node:assert` to validate business logic and handle physical limits (like Absolute Zero).

 - **Automation**: A full pipeline configured via ***CircleCI** for automated testing on every push.

 - **Secure Deployment**: Automated publishing to GitHub Pages via a dedicated `gh-pages` branch using encrypted SSH keys.

 - **Modular Structure**: Integration of a **Git Submodule** to manage the project's external course fork as an independent repository.
   
---
### 🛠️ Tech Stack

 - **Language**: JavaScript (ES Modules)

 - **Styling**: Tailwind CSS (Dashboard UI)

 - **CI/CD**: CircleCI

 - **Versioning**: Semantic Versioning (SemVer)

 - **Environment**: Node.js 20.x

 - **Deployment**: GitHub Pages (via SSH)
   
---
### 🚦 How the Pipeline Works

1. **Trigger**: Any push to master (without [skip ci]) wakes up the CircleCI runner.

2. **Environment Setup**: The runner spins up a Docker container with Node.js 20.

3. **Validation**: npm test is executed. If any test fails, the process terminates immediately.

4. **Deployment**: If tests pass, the runner uses a stored SSH Private Key to authenticate with GitHub and updates the `gh-pages branch`.
   
---
### 🏷️ Versioning & Releases

This project follows Semantic Versioning (SemVer). Stable milestones are tagged to track the evolution of the CI/CD architecture:

 - v1.0: Initial project setup and logic implementation.

 - v1.2.0: Automated deployment to GitHub Pages via SSH.

To view all official releases and change logs, visit the Releases section.  

---
### 💻 Local Setup & Testing

***To replicate this environment locally***:

#### 1. Clone the repository including all submodules
```
git clone --recursive https://github.com/ConstantinLiviu/Git-Github-Masterclass.git
```
#### 2. Install dependencies
npm install

#### 3. Run the unit test suite
npm test

---
### 📝 Security & Best Practices

**SSH Fingerprinting**: Used for secure, passwordless authentication between CircleCI and GitHub.

**Environment Isolation**: Private keys are stored in CircleCI's encrypted vault, never exposed in source code.

**Branch Protection**: Deployments are automated to ensure production stability.

⭐ Developed as part of the Git & GitHub Masterclass course.
