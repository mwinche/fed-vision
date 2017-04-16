pushd .

cd widget-1
rm -rf node_modules
npm install

popd

pushd .

cd widget-2
rm -rf node_modules
npm install

popd

pushd .

cd widget-3
rm -rf node_modules
npm install

popd

pushd .

cd app-1
rm -rf node_modules
npm install ../widget-1 ../widget-2 ../widget-3
npm install

popd

pushd .

cd app-2
rm -rf node_modules
npm install ../widget-1 ../widget-2 ../widget-3
npm install

popd
