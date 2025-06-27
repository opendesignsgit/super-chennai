@echo off
setlocal

cd /d "%~dp0"

echo [INFO] Checking dependencies...
if not exist "node_modules" (
  npm install
)

echo [INFO] Generating Payload types...
npm run generate:types

echo [INFO] Building static Next.js site...
npm run build
npm run export
npm run postbuild

echo [INFO] Packaging Electron app...
npx electron-builder

echo [SUCCESS] Desktop app is ready in the release folder.
pause
endlocal
