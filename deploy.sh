#!/bin/bash

# MOFAN Website Deploy Script for Netlify
# 使用方法: ./deploy.sh

echo "🚀 MOFAN Website Netlify Deploy Script"
echo "======================================"
echo ""

# 检查是否安装了 netlify-cli
if ! command -v netlify &> /dev/null; then
    echo "⚠️  Netlify CLI 未安装"
    echo "正在安装..."
    npm install -g netlify-cli
fi

# 检查是否登录
netlify status &> /dev/null
if [ $? -ne 0 ]; then
    echo "🔑 请先登录 Netlify"
    netlify login
fi

echo "📦 步骤1: 构建项目"
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败，请检查错误"
    exit 1
fi

echo "✅ 构建成功"
echo ""

# 检查是否已经初始化
if [ ! -f ".netlify/state.json" ]; then
    echo "🆕 首次部署，初始化 Netlify 站点..."
    netlify init
else
    echo "📤 部署到生产环境..."
    netlify deploy --prod
fi

echo ""
echo "🎉 部署完成!"
echo "访问你的网站查看效果"
