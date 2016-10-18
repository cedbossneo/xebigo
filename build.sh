#!/usr/bin/env bash
cd client; API_URL=http://api.xebigo.cbnserver.com yarn run build; docker build -t cedbossneo/xebigo-client:$1 .; cd ..
cd server; yarn run build; docker build -t cedbossneo/xebigo-server:$1 .; cd ..

docker push cedbossneo/xebigo-client:$1
docker push cedbossneo/xebigo-server:$1
