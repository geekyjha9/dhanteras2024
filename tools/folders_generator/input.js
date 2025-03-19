// ✅ Improved folder structure with explicit `_files` key
const folderStructure = {
    public: {
      _files: ["index.html", "manifest.json", "favicon.ico", "robots.txt"],
      assets: {} // Empty folder
    },
    src: {
      api: {},
      assets: {
        images: {},
        fonts: {},
        icons: {},
        styles: {
          _files: ["base.scss", "variables.scss", "mixins.scss", "global.css", "meckup.css"]
        }
      },
      components: {
        Button: {
          _files: ["Button.jsx", "Button.module.css"]
        },
        Navbar: {
          _files: ["Navbar.jsx", "Navbar.css"]
        },
        Sidebar: {},
        Card: {},
        Modal: {}
      },
      context: {
        _files: ["AuthContext.js", "ThemeContext.js", "AppProvider.js"]
      },
      hooks: {
        _files: ["useAuth.js", "useFetch.js", "useDebounce.js", "useLocalStorage.js"]
      },
      layouts: {
        _files: ["MainLayout.jsx", "AuthLayout.jsx", "AdminLayout.jsx"]
      },
      pages: {
        Home: {
          _files: ["Home.jsx", "Home.module.css"]
        },
        About: {},
        Dashboard: {},
        Profile: {},
        Auth: {
          _files: ["Login.jsx", "Register.jsx", "ForgotPassword.jsx"]
        },
        Error: {
          _files: ["NotFound.jsx", "ServerError.jsx"]
        }
      },
      routes: {
        _files: ["AppRoutes.js", "ProtectedRoute.js", "AdminRoute.js"]
      },
      services: {
        _files: ["authService.js", "userService.js", "postService.js", "storageService.js"]
      },
      store: {
        slices: {
          _files: ["authSlice.js", "userSlice.js", "postSlice.js"]
        },
        root: {
          _files: ["store.js", "rootReducer.js"]
        }
      },
      utils: {
        _files: ["dateUtils.js", "validation.js", "storage.js", "constants.js", "logger.js"]
      }
    },
    "": {
      _files: [".env", ".gitignore", "package.json", "README.md"]
    }
  };

  module.exports = folderStructure;
