@echo off
cd /d "%~dp0"

echo Starting EVENTBOX...

start "" cmd /k "npm run dev"

:check
timeout /t 2 >nul

curl -s https://localhost:5173 >nul

if %errorlevel% neq 0 (
    goto check
)

start "" https://localhost:5173