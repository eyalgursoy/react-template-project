# React Template Project

A modern, production-ready React application template built with the latest technologies and best practices.

## 🚀 Features

- **React 19** - Latest React with concurrent features and improved performance
- **TypeScript** - Full type safety and better developer experience
- **Material-UI v7** - Beautiful, accessible, and customizable components
- **Vite** - Lightning-fast build tool and development server
- **ESLint + Prettier** - Code quality and consistent formatting
- **Yarn** - Fast, reliable, and secure package management

## 📦 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI v7
- **Package Manager**: Yarn
- **Code Quality**: ESLint + Prettier
- **Icons**: Material-UI Icons

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone or download this template
2. Install dependencies:

   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors automatically
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn type-check` - Run TypeScript type checking

## 🎨 Customization

### Theme Configuration

The template includes a custom Material-UI theme located in `src/theme.ts`. You can customize:

- Color palette
- Typography
- Component styles
- Spacing and shape

### Adding New Components

1. Create your component in the `src/components/` directory
2. Import and use Material-UI components
3. Follow the existing code style and patterns

### Styling

This template uses Material-UI's `sx` prop for styling. This approach provides:

- Type-safe styling
- Theme integration
- Responsive design utilities
- Better performance

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── theme.ts            # Material-UI theme configuration
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── vite-env.d.ts       # Vite type definitions
```

## 🔧 Configuration Files

- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to ignore during formatting
- `eslint.config.js` - ESLint configuration
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite configuration

## 🚀 Deployment

### Build for Production

```bash
yarn build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
```

## 📝 Code Quality

### ESLint Rules

- React best practices
- TypeScript strict mode
- Accessibility guidelines
- Performance optimizations

### Prettier Configuration

- Single quotes
- 2-space indentation
- 80 character line width
- Trailing commas
- Consistent formatting

## 🎯 Best Practices

1. **Component Structure**: Use functional components with hooks
2. **TypeScript**: Leverage TypeScript for better type safety
3. **Material-UI**: Use the `sx` prop for component styling
4. **Performance**: Use React.memo and useMemo when appropriate
5. **Accessibility**: Follow Material-UI's accessibility guidelines

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript types for new features
3. Update documentation as needed
4. Test your changes thoroughly

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Material-UI](https://mui.com/) - Component library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

Happy coding! 🎉
