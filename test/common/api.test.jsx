import { assert, describe, it } from 'vitest'
import { doLogin, getProjectDetail, getProjectPMEvaluation, searchProject } from '../../src/common/api';

describe('Login', () => {
  it('Case - Success', async () => {
    const res = await doLogin('breeds50','hands33'); 

    assert.equal(res.userName, '박예연');
  })
});

describe('Search Project', () => {
    it('Case - Success', async () => {
        const res = await searchProject('써머프로젝트2');

        assert.equal(res.id, 7);
        assert.equal(res.projectName, '써머프로젝트2');
    })
})

describe('Get Project Detail', () => {
    it ('Case - Success', async () => {
        const res = await getProjectDetail('써머프로젝트2');
        
        const PM = res.find((e) => e.jobType === 'PM'); 
        assert.equal(PM.employeeName, '박예연');

        const PL = res.find((e) => e.jobType === 'PL'); 
        assert.equal(PL.employeeName, '임예후');

        const Programmer = res.find((e) => e.jobType === 'Programmer'); 
        assert.equal(Programmer.employeeName, '강하준');        

        const Designer = res.find((e) => e.jobType === 'Designer'); 
        assert.equal(Designer.employeeName, '최서아');        

        const Tester = res.find((e) => e.jobType === 'Tester'); 
        assert.equal(Tester.employeeName, '최윤후');    

    });
});

describe('Get Project Evaluations', () => {
    it ('Case - Success', async () => {
        const res = await getProjectPMEvaluation('박예연', 3);

        const e1 = res.find((e) => e.evaluated === '윤윤연'); 
        assert.equal(e1.projectId , 3);
        assert.equal(e1.evaluator, '박예연');

        const e2 = res.find((e) => e.evaluated === '장현윤'); 
        assert.equal(e2.projectId , 3);
        assert.equal(e2.evaluator, '박예연');

        const e3 = res.find((e) => e.evaluated === '조서후'); 
        assert.equal(e3.projectId , 3);
        assert.equal(e3.evaluator, '박예연');

    })
})