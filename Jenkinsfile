pipeline {
    agent any

    stages {
        stage('Git clone and settup') {
            steps {
                echo 'Git clone and settup successfull!'
            }
        }
        stage('Building') {
            steps {
                echo 'Building successfull!'
            }
        }
        stage('Running test UFT from ALM') {
            steps {
                    build job: 'Run test from agent'
            }
        
        }
        stage('Deploy to production!') {
            steps {
                echo 'Deploy to production! successfull!'
            }
        }
    }
}