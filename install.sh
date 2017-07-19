pushd .

echo toggle
cd toggle
rm -rf node_modules
yarn
yarn build
yarn link

popd

pushd .

echo chat
cd chat
rm -rf node_modules
yarn
yarn build
yarn link

popd

pushd .

echo widget-3
cd widget-3
rm -rf node_modules
yarn
yarn build
yarn link

popd

pushd .

echo state-channels
cd state-channels
rm -rf node_modules
yarn
yarn build
yarn link

popd

pushd .

echo app-1
cd app-1
rm -rf node_modules
yarn link toggle chat widget-3 state-channels
yarn
yarn build
yarn link

popd

pushd .

echo service-1
cd service-1
rm -rf node_modules
yarn link app-1 toggle state-channels
yarn
rm -rf dist
yarn build

popd
