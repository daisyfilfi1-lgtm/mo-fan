@echo off
chcp 65001 >nul
echo 🚀 MOFAN Website Netlify Deploy Script
echo ======================================
echo.

REM 检查是否安装了 netlify-cli
netlify --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  Netlify CLI 未安装
    echo 正在安装...
    npm install -g netlify-cli
)

REM 检查是否登录
netlify status >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔑 请先登录 Netlify
    netlify login
)

echo 📦 步骤1: 构建项目
call npm run build

if %errorlevel% neq 0 (
    echo ❌ 构建失败，请检查错误
    pause
    exit /b 1
)

echo ✅ 构建成功
echo.

REM 检查是否已经初始化
if not exist ".netlify\state.json" (
    echo 🆕 首次部署，初始化 Netlify 站点...
    netlify init
) else (
    echo 📤 部署到生产环境...
    netlify deploy --prod
)

echo.
echo 🎉 部署完成!
echo 访问你的网站查看效果
pause
