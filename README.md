# vscode로 Dockerfile로 처음부터 devcontainer 만드는 법

	1. 작업디렉토리에서 vscode를 열고 .devcontainer 디렉토리를 만들고 아래와 같은 Dockerfile을 만든다.  아래처럼 처음 두줄만 작동되게 한다. 아무것도 없는 상태에서 그 밑에 줄을 uncomment하면 오류가 생긴다.
	FROM node:20.2-alpine
	WORKDIR /app
	#COPY package*.* /app
	#RUN npm ci
	#COPY . .
	#CMD ["node", "index.js"]
	
	2. 아래와 같이 devcontainer.json을 만든다.
	// For format details, see https://aka.ms/devcontainer.json. For config options, see the
	// README at: https://github.com/devcontainers/templates/tree/main/src/docker-existing-dockerfile
	{
		"name": "Existing Dockerfile",
		"build": {
			// Sets the run context to one level up instead of the .devcontainer folder.
			"context": "..",   // container와 bind mount할 local directory 상대위치 표시
			// Update the 'dockerFile' property if you aren't using the standard 'Dockerfile' filename.
			"dockerfile": "./Dockerfile"  // devcontainer.json파일 기준 Dockerfile의 위치와 상대경로를 표시해야 함.
		},
		"remoteUser": "node"  // local 디렉토리에 USER이름으로 파일이 생기게 한다.
	}
	
	3. F1을 누르고 Dev Containers: Reopen in Container를 선택한다.
	
	
	4. Devcontainer로 vscode가 진입한다. 왼쪽 아래 상태줄에 Dev Container:Existing Dockerfile이라고 나오는 것을 보면 알 수 있다.

	5. Terminal을 열고 npm init -y, npm i express, npm i -D nodemon을 실행한다.

	6. package.json에 다음 script를 추가한다.
	"dev" : "nodemon index.js"
	
	7. index.js를 만든다.
	const express = require('express')
	
	const app = express()
	
	app.get('/', (req, res)=> {
	    res.send('Hello World')
	})
	
	const PORT = 3000
	app.listen(PORT,()=>{
	    console.log('Server is running at port 3000')
	})
	
	8. npm run dev를 실행하고 브라우저에서 "Hello World"가 출력되는 것을 확인한다.

	9. 1번의 Dockerfile에서 comment를 모두 제거한다.
	FROM node:20.2-alpine
	WORKDIR /app
	COPY package*.* /app
	RUN npm ci
	COPY . .
	CMD ["node", "index.js"]
	
	10. vscode를 종료했다가 다시 들어간다. "Reopen in Container"할 거냐고 물으면 OK한다. 개발을 시작한다.

	11. 개선점으로 git이 컨테이너에 내장돼 있지 않아 vscode안에서 git까지 쓰지 못한다. 아래와 같이 Dockerfile을 수정 후 Reopen in Container를 한다.
	FROM node:20.2-alpine
	RUN apk --no-cache add git && git config --global user.name "Steve Jeong" && git config --global user.email "jst0930@gmail.com"
	WORKDIR /app
	COPY package*.* /app
	RUN npm ci
	COPY . .
	CMD ["node", "index.js"]
