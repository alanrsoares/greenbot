# Greenbot

[![npm downloads](https://img.shields.io/npm/dt/@greenbot/cli.svg)](https://npmjs.org/@greenbot/cli)
![Version](https://img.shields.io/badge/version-0.33.4-blue)
![License](https://img.shields.io/badge/license-MIT-green)

> An interactive package updater for npm-based applications.

## Features

- 🎨 Beautiful web UI for dependency updates
- ⌨️ Fully keyboard accessible
- 🏗️ Supports multiple package managers: npm, yarn, pnpm
- 📦 Monorepo savvy: Automatically identifies your package structure

## Quick Start

### Run Greenbot with your favorite package manager

| Package Manager | Command                      |
| --------------- | ---------------------------- |
| npm             | `npx @greenbot@latest`       |
| pnpm            | `pnpx @greenbot/cli@latest`  |
| bun             | `bun x @greenbot/cli@latest` |

📌 For `yarn`, you'll need to install it globally:

```bash
yarn global add @greenbot/cli
@greenbot/cli
```

## Technical Details

### Version

Current Version: `0.33.4`

### Binaries

The CLI executable is located at `./bin/greenbot.cjs`

### Available Scripts

| Script        | Description                                      |
| ------------- | ------------------------------------------------ |
| `dev`         | Concurrently run Vite and the Node.js binary     |
| `build`       | Build the project using Vite                     |
| `serve`       | Preview the build                                |
| `check`       | Run type checks with Svelte                      |
| `postversion` | Amend the last commit and build after versioning |
| `release`     | Publish the package and push to Git              |
| `prepare`     | Install Husky hooks                              |
| `postinstall` | Run post-install script                          |

### Homepage & Source Code

- 🏠 [Homepage](https://github.com/alanrsoares/greenbot)
- 👾 [GitHub Repository](https://github.com/alanrsoares/greenbot)

## Screenshots

### CLI

![CLI Screenshot](https://github.com/alanrsoares/greenbot/assets/273334/487c276b-2266-439e-96e5-fbd7e658c4bd)

### Web UI

![Web UI Screenshot 1](https://github.com/alanrsoares/greenbot/assets/273334/66ddde3c-0844-4440-8295-9ba6ad8334f9)

![Web UI Screenshot 2](https://github.com/alanrsoares/greenbot/assets/273334/5d78ce0b-7f68-40e5-ae2d-d66994571059)

## License

This project is licensed under the terms of the MIT license.

## Acknowledgements

Special thanks to the following open-source projects that make Greenbot tick:

- [Svelte](https://svelte.dev/)
- [Express](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Husky](https://github.com/typicode/husky)
- [DaisyUI](https://daisyui.com/)
- [Rambda](https://ramdajs.com/)
