# Local Setup

## Install dependencies

npm install --legacy-peer-deps

## Star development server

npm run dev

# Build and deploye

## Step 1. Build deployment package

npm run build:prod

## Step 2. Checkout Github io target repo

git clone https://github.com/1sttouch/thefirstouch.github.io.git

## Step 2. Remove existing content

cd thefirstouch.github.io

rm -rf favicon.ico assets/ index.html  img/

## Step 2. Copy latest build content from 1sttouch-ui.

cp -r /path-to/1sttouch-ui/dist/* .

## Step 2. Commit and push your changes for deployment

git commit -m "Your message"

git push origin main