bun tsc -m commonjs --outDir build/commonjs 
bun tsc -m esnext --outDir build/module 
cp -Rf build/commonjs/* .