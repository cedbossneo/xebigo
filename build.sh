#!/usr/bin/env bash
cd client; API_URL=http://xebigo.cbnserver.com yarn run build; docker build -t cedbossneo/xebigo-client:$1 .; cd ..
cd server-api; yarn run build; docker build -t cedbossneo/xebigo-server-api:$1 .; cd ..
cd server-feed; yarn run build; docker build -t cedbossneo/xebigo-server-feed:$1 .; cd ..

docker push cedbossneo/xebigo-client:$1
docker push cedbossneo/xebigo-server-api:$1
docker push cedbossneo/xebigo-server-feed:$1
