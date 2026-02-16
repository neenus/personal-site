pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-token')
        IMAGE_VERSION = '1.0'
        FILE_ID = '976313a2-37c6-4de8-991c-51f8edd0fe62'
    }
    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                sshagent(credentials: ['jenkins-ssh']) {
                    git branch: 'main', url: 'git@github.com:neenus/personal-site.git'
                }
            }
        }
        stage('Provision ENV file') {
            steps {
                configFileProvider([configFile(fileId: "${FILE_ID}", targetLocation: '.env.local')]) {
                    sh 'echo .env.local file provisioned'
                }
            }
        }
        stage('Build docker images') {
            steps {
                sh "docker build -t neenus007/portfolio:${IMAGE_VERSION}.${BUILD_NUMBER} -f Dockerfile ."
                sh 'docker build -t neenus007/portfolio:latest -f Dockerfile .'
            }
        }
        stage('Login to DockerHub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push images to DockerHub') {
            steps {
                sh "docker push neenus007/portfolio:${IMAGE_VERSION}.${BUILD_NUMBER}"
                sh 'docker push neenus007/portfolio:latest'
            }
        }
        stage('Logout from DockerHub') {
            steps {
                sh 'docker logout'
            }
        }
    }
}
