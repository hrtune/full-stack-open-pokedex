#!/bin/bash

check="$(curl localhost:8080/health)"

if [[ $check == "ok" ]]; then
    exit 0
else
    exit 1
fi