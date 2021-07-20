pipeline {
    agent {
        node {
            label 'UFT-HONGNT'
        }
    }
    parameters {
        string(name: 'testsetID', defaultValue: '801', description: '')
        string(name: 'AlmUrl', defaultValue: 'http://10.159.26.86:8080/qcbin', description: '')
        string(name: 'AlmUser', defaultValue: 'admin', description: '')
        string(name: 'AlmPass', defaultValue: 'Ab123456', description: '')
    }
    
    stages {

        stage("UFT Testing") {
            steps {
                  runFromAlmBuilder almClientID: '',
                  almDomain: 'TESTING',
                  almPassword: 'Ab123456',
                  almProject: 'TEST01',
                  almRunHost: '',
                  almRunMode: 'RUN_LOCAL',
                  almServerName: '10.4.18.229', 
                  almTestSets: '''1''',
                  almTimeout: '',
                  almUserName: 'admin', 
                  filterTestsModel: [blockedCheckbox: false, failedCheckbox: false, noRunCheckbox: false, notCompletedCheckbox: false, passedCheckbox: false, testName: ''],
                  isSSOEnabled: false,
                  echo "RUNNING UFT"
            }
        }
	}
	
}
