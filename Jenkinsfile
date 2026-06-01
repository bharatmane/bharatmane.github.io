pipeline {
    agent any

    environment {
        DEPLOY_HOST  = '57.129.74.139'
        DEPLOY_USER  = 'ubuntu'
        DEPLOY_PATH  = '/var/www/bharatmane'
        SSH_CRED_ID  = 'DO_FALLBACK_HOST'
    }

    stages {
        stage('Install') {
            steps {
                sh 'node --version && npm --version'
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sshagent(credentials: [SSH_CRED_ID]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${DEPLOY_HOST} \
                            "mkdir -p ${DEPLOY_PATH}"
                        rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" \
                            out/ \
                            ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Portfolio deployed to OVH successfully.'
        }
        failure {
            echo 'Deploy failed — check the logs.'
        }
    }
}
