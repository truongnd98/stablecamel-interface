AWS_BUCKET=stable-camel-frontend

build.local:
	@yarn build

deploy.aws:
	@aws s3 sync build s3://${AWS_BUCKET}

buildanddeploy.aws: build.local
buildanddeploy.aws: deploy.aws
