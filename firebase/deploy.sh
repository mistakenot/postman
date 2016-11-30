cd ../client
npm run build
cd ../firebase

cp -R ../client/dist/. ./public
cp -R ../client/src/app/public/ ./public
cp ../client/src/index.html ./public

firebase deploy