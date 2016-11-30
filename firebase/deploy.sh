cd ../client
npm run build
cd ../firebase

cp -R ../client/dist/. ./public
cp ../client/src/index.html ./public

firebase deploy