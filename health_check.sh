#!/bin/bash

check="$(curl localhost:8080/health)"

[ $check = "ok" ]

# exit 1 # <- hehehe
