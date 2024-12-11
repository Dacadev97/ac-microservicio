pipeline {
    agent any
    stages { 
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/Dacadev97/ac-microservicio'
            }
        }

        stage('Construir imagen Docker') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')]) {
                        sh 'docker build -t dacadev97/ac-microservicio .'
                    }
                }
            }
        }

        stage('Detener y eliminar contenedores anteriores') {
            steps {
                script {
                    
                    sh '''
                        CONTAINER_ID=$(docker ps -q -f "publish=3000")
                        if [ -n "$CONTAINER_ID" ]; then
                            echo "Stopping container: $CONTAINER_ID"
                            docker stop $CONTAINER_ID
                            docker rm $CONTAINER_ID
                        else
                            echo "No container is using port 3000"
                        fi
                    '''
                }
            }
        }

        stage('Desplegar contenedor') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')]) {
                        sh 'docker run -d -p 3000:3000 -e MONGO_URI=$MONGO_URI dacadev97/ac-microservicio'
                    }
                }
            }
        }
    }

    post {
        always {
            emailext(
                subject: "Pipeline ${currentBuild.currentResult}",
                body: "Se ha completado el pipeline con el resultado: ${currentBuild.currentResult}",
                to: "daka.alvarez240412@gmail.com",
                
                from: "davidson.cadavid@est.iudigital.edu.co"
            )
        }
        failure {
            script {
                echo "Pipeline failed. Please check the logs."
            }
        }
        success {
            script {
                sh 'docker rmi -f dacadev97/ac-microservicio || true'
                sh 'docker system prune -af || true'
            }
        }
    }
}
