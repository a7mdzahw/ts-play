pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 5200:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
         stage('Deliver') { 
            steps {
                sh './scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './scripts/kill.sh' 
            }
        }
    }
}