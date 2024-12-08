pipeline {
    agent any
    stages { 
        stage ('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/Dacadev97/ac-microservicio'
                }
    }

    stage ('Desplegar contenedor') {
        steps {
            script {
                withCredentials
                ([string((cerdentialsId: 'MONGO_URI', variable: 'MONGO_URI'))]) {
                    sh 'docker run -d -p 3000:3000 -e MONGO_URI=$MONGO_URI dacadev97/ac-microservicio'
                }
            }
        }
    }


    post {
        always{
            emailText(
                subject: "Pipeline ${currentBuild.currentResult}",
                body: "Se ha completado el pipeline ${currentBuild.currentResult}",
                to: "davidson.cadavid@est.iudigitall.edu.co"
                from: "jenkins@iudigital.edu.co"
            )
        }
    }
}