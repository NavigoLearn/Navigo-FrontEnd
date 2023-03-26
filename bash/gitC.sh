#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Invalid number of arguments."
    echo "Usage: gitC.sh [--C|--F|--R|--D] message"
    exit 1
fi

case "$1" in
    --C) MESSAGE="(create)[$(date)] $2" ;;
    --F) MESSAGE="(fix)[$(date)] $2" ;;
    --R) MESSAGE="(refactor)[$(date)] $2" ;;
    --D) MESSAGE="(delete)[$(date)] $2" ;;
    *)
        echo "Invalid option: $1"
        echo "Usage: gitC.sh [--C|--F|--R|--D] message"
        exit 1
        ;;
esac

echo "$MESSAGE"
git commit -m "$MESSAGE"
