let aLecture = new Object();
aLecture.korName = "웹프로그래밍";
aLecture.engName = "Web Programming";
aLecture.classCode = "V024003";
aLecture.nStudents = 0;
aLecture.studentNames = [];
aLecture.register = function(name){
    this.studentNames[this.nStudents] = name;
    this.nStudents++;
}
aLecture.unregister = function(name){
    let index = this.studentNames.indexOf(name);
    this.studentNames.splice(index,1);
    this.nStudents--;
}
aLecture.getStudentCount = function(){
    return this.nStudents;
}
aLecture.getStudentNames = function(idx){
    return this.studentNames[idx];
}

let bLecture = {
    korName: "웹프로그래밍",
    engName: "Web Programming",
    classCode: "V024003",
    nStudents: 0,
    studentNames: [],
    register: function(name){
        this.studentNames[this.nStudents] = name;
        this.nStudents++;
    },
    unregister: function(name){
        let index = this.studentNames.indexOf(name);
        this.studentNames.splice(index,1);
        this.nStudents--;
    },
    getStudentCount: function(){
        return this.nStudents;
    },
    getStudentNames: function(idx){
        return this.studentNames[idx];
    }
};

function Lecture(korName, engName, classCode){
    this.korName = korName;
    this.engName =  engName;
    this.classCode = classCode;
    this.nStudents = 0;
    this.studentNames = [];
    this.register = function(name){
        this.studentNames[this.nStudents++] = name;

    }
    this.unregister = function(){
        let index = this.studentNames.indexOf(name);
        this.studentNames.splice(index,1);
        this.nStudents--;
    }
    this.getStudentCount = function(){
        return this.nStudents;
    }
    this.getStudentNames = function(idx){
        return this.studentNames[idx];
    }
}