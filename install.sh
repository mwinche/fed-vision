pushd .

echo widget-1
cd widget-1
rm -rf node_modules
yarn
yarn build
yarn link

popd

pushd .

echo widget-2
cd widget-2
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
yarn link widget-1 widget-2 widget-3 state-channels
yarn
yarn build
yarn link

popd

pushd .

echo service-1
cd service-1
rm -rf node_modules
yarn link app-1 widget-1
yarn
yarn link

popd
