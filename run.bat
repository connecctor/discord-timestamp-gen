@echo off
title Discord Timestamp & Datestamp Gen

node -v >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo node.js was not found to be installed on this computer.
    start "" "https://nodejs.org/"
    timeout /t 3 >nul
    exit /b
)

node "%~dp0gen.js"
pause