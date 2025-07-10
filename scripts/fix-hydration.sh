#!/bin/bash

echo "🔧 Fixing Hydration Issues..."

# Kill any running Node processes
echo "🛑 Stopping development server..."
if command -v taskkill &> /dev/null; then
    # Windows
    taskkill /f /im node.exe 2>/dev/null || true
else
    # Unix/Linux/Mac
    pkill -f "node.*next" || true
fi

# Clear Next.js cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next

# Clear node_modules and reinstall (optional, uncomment if needed)
# echo "📦 Reinstalling dependencies..."
# rm -rf node_modules package-lock.json
# npm install

# Wait a moment
sleep 2

# Restart development server
echo "🚀 Restarting development server..."
npm run dev &

# Wait for server to start
echo "⏳ Waiting for server to start..."
sleep 10

# Test if server is working
if command -v curl &> /dev/null; then
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        echo "✅ Server is running successfully!"
        echo "🌐 Open http://localhost:3000 in your browser"
    else
        echo "❌ Server health check failed"
        echo "📋 Check the terminal for error messages"
    fi
else
    echo "✅ Server should be running now"
    echo "🌐 Open http://localhost:3000 in your browser"
fi

echo ""
echo "💡 Tips to prevent hydration errors:"
echo "   - Always use ClientOnly wrapper for theme-dependent components"
echo "   - Check for date/time formatting differences"
echo "   - Avoid browser-specific APIs during SSR"
echo "   - Use suppressHydrationWarning sparingly" 