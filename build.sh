#!/bin/bash

set -ex
DEV_IMAGE_NAME="jincort/frontend-wallets-develop"
PROD_IMAGE_NAME="jincort/frontend-wallets"
TAG="${1}"

docker push ${DEV_IMAGE_NAME}:${TAG}
docker build -f Dockerfile.prod --no-cache -t ${PROD_IMAGE_NAME}:${TAG} .
docker push ${PROD_IMAGE_NAME}:${TAG}
