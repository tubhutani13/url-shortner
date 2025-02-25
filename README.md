# 🚀 URL Shortener

## 🌍 Overview
This is a simple URL shortener web application built using **React (Next.js)** for the frontend and **Rails API** for the backend. The app allows users to enter long URLs, generate shortened versions, and copy them easily. The list of shortened URLs persists for the current session.

## ✨ Features
- 🌑 Dark mode interface for a sleek and modern look
- ⚡ Shorten URLs with a single click
- 🔗 Automatically adds `https://` if no protocol is specified (unless `http://` is already present)
- 📜 Displays a list of previously shortened URLs for the current session
- 📋 Copy shortened URLs to clipboard with a button

## 🛠 Tech Stack
- **Frontend:** React (Next.js), Tailwind CSS
- **Backend:** Rails API

## 🔧 Installation
### 📌 Prerequisites
Ensure you have the following installed:
- 🟢 Node.js & npm
- 💎 Ruby & Rails

### ⚙️ Setup
1. **📥 Clone the repository**
   ```sh
   git clone https://github.com/your-repo/url-shortener.git
   cd url-shortener
   ```
2. **📦 Install dependencies**
   ```sh
   npm install
   ```
3. **▶️ Start the development server**
   ```sh
   npm run dev
   ```
4. **🖥 Run the Rails API** (if using locally)
   ```sh
   cd backend
   rails server
   ```

## 🎯 Usage
1. 📝 Enter a URL in the input field.
2. 🔄 Click the "Shorten" button to generate a shortened URL.
3. 📋 Click "Copy" to copy the URL to your clipboard.
4. 📜 The previously shortened URLs will be displayed in a list, showing the original URL (truncated if too long) above the shortened version.

## 📂 Folder Structure
```
url-shortener/
│── backend/               # 🖥 Rails API backend
│── public/                # 📁 Static assets
│── src/
│   ├── utils/api.js       # 🔌 API handling functions
│   ├── styles/            # 🎨 Global styles
│   ├── pages/
│   │   ├── index.js       # 🏠 Home page
│── package.json           # 📦 Node.js dependencies
│── README.md              # 📜 Project documentation
```

## 🤝 Contributing
1. 🍴 Fork the repository.
2. 🌿 Create a new branch: `git checkout -b feature-branch`.
3. 🛠 Make your changes and commit: `git commit -m "Added new feature"`.
4. 🚀 Push to the branch: `git push origin feature-branch`.
5. 📩 Open a Pull Request.

## 📜 License
This project is licensed under the MIT License.

