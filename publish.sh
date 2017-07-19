pushd .

echo toggle
cd toggle
rm -rf node_modules
yarn
yarn build
npm version minor
npm publish

popd

pushd .

echo chat
cd chat
rm -rf node_modules
yarn
yarn build
npm version minor
npm publish

popd

pushd .

echo typeable-pick-list
cd typeable-pick-list
rm -rf node_modules
yarn
yarn build
npm version minor
npm publish

popd

pushd .

echo state-channels
cd state-channels
rm -rf node_modules
yarn
yarn build
npm version minor
npm publish

popd

pushd .

echo app-1
cd app-1
rm -rf node_modules
yarn
yarn upgrade
yarn build
npm version minor
npm publish

popd

pushd .

echo service-1
cd service-1
rm -rf node_modules
yarn
yarn upgrade
rm -rf dist
yarn build

popd

git add -A
git commit -m "new version"
git push --tags origin master
