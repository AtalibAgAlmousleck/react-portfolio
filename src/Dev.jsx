

//! Who am i ?
const developer = {
    name: 'Atalib Ag Almousleck',
    skills: ['Web development', 'Cloud computing', 'DevOps'],
    hardWorker: true,
    problemSolver: true,
    codingGameOfLogic: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length > 3
        );
    }
}