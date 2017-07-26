rm -rf dist
yarn build -- -p
npm install --prod
zip -r lambda.zip ./ > /dev/null
npm install
