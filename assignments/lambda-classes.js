// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
        this.age = attrs.age;
        this.name = attrs.name;
        this.location = attrs.location;
    }  
    speak(){
        return `Hello my name is ${this.name} and I am from ${this.location}`
    }
}
    class Instructor extends Person{
        constructor(instAttrs){
            super(instAttrs);
            this.specialty = instAttrs.specialty;
            this.favLanguage = instAttrs.favLanguage;
            this.catchPhrase = instAttrs.catchPhrase;
        }
        demo(subject){
            return `Today we are learning about ${subject}`;
        }
        grade(Student, subject){
            return `${Student.name} receives a perfect score on ${subject}`;
        }
    }

    class Student extends Person{
        constructor(stuAttrs){
            super(stuAttrs);
            this.previousBackground = stuAttrs.previousBackground;
            this.className = stuAttrs.className;
            this.favSubjects = stuAttrs.favSubjects;

        }
        listsSubjects(){
            console.log(this.favSubjects);
        }
        prAssignment(subject){
           return `${this.name} has submitted a PR for ${subject}.`;
        }
        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}`;
        }
    }
    class ProjectManager extends Instructor{
        constructor(pmAttrs){
            super(pmAttrs);
            this.gradClassName = pmAttrs.gradClassName;
            this.favInstructor = pmAttrs.favInstructor;
            
        }
        standUp(channel){
            return `${this.name} announces to ${channel}, @channel standy times!`;
         }
         debugsCode(Student, subject){
            return `${this.name} debugs ${Student.name}'s code on ${subject}.`;
         }
    }


    const instOne  = new Instructor({
        age: 31,
        name: 'Britt',
        location:'Niagara Falls',
        specialty: 'Unit 1',
        favLanguage: 'React',
        catchPhrase: 'Ey?',
      });
      const instTwo  = new Instructor({
        age: 35,
        name: 'Brett',
        location:'New Jersey',
        specialty: 'problem solving',
        favLanguage: 'Redux',
        catchPhrase: 'Wazzam',
      });
      const instThree  = new Instructor({
        age: 32,
        name: 'Brianna',
        location:'Nashville',
        specialty: 'Labs',
        favLanguage: 'Node',
        catchPhrase: 'No ,but seriously.',
      });
      const stuOne  = new Student({
        age: 31,
        name: 'Katrina',
        location:'Newnan',
        previousBackground:'Music',
        favSubjects: [
            'HTML',
            'CSS',
            'JavaScript',
            
        ],
        className: 'WEB25',
        
      });
      const stuTwo  = new Student({
        age: 30,
        name: 'Bryan',
        location:'Atlanta',
        previousBackground:'Financial Services',
        favSubjects: [
            'HTML',
            'CSS',
            'JavaScript',
            
        ],
        className: 'WEB24',
        
      });const stuThree  = new Student({
        age: 22,
        name: 'Brandi',
        location:'Los Angeles',
        previousBackground:'Performative Dance',
        favSubjects: [
            'HTML',
            'CSS',
            'JavaScript',
            
        ],
        className: 'WEB19',
        
      });
      const pmOne  = new ProjectManager({
        age: 29,
        name: 'Allie',
        location:'Louisville',
        specialty: 'Front-End',
        favLanguage: 'Python',
        catchPhrase: 'Lets not, and say we did.',
        gradClassName: 'WEB17',
        favInstructor: 'Josh',
      });
      const pmTwo  = new ProjectManager({
        age: 42,
        name: 'Brandon',
        location:'Montana',
        specialty: 'Back-End',
        favLanguage: 'Ruby',
        catchPhrase: 'Lets not, and say we did.',
        gradClassName: 'WEB19',
        favInstructor: 'Pace',
      });
    
    
    console.log(instOne.name); 
    console.log(instTwo.catchPhrase); 
    console.log(instThree.favLanguage); 
    console.log(stuOne.location); 
    console.log(stuTwo.previousBackground); 
    console.log(stuThree.favSubjects); 
    console.log(pmOne.gradClassName);
    console.log(pmTwo.catchPhrase);
    console.log(instOne.grade(stuOne,'Sprint Challenge')); 
    console.log(stuTwo.prAssignment('JavaScript IV')); 
    console.log(pmOne.debugsCode(stuOne,'inline-block')); 