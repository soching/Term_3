enum Genders {
    Male,
    Female,
}
enum Major {
    Web,
    Sna,
}

enum Topic {
    Javascript,
    php,
    html,
    ts,
    vue,
}
class Student {
    private gender: Genders;
    private major: Major;
    result: Result[]=[];
    private name:string;
    constructor(name:string,gender:Genders,major:Major,result:Result[]){
        this.name=name;
        this.gender=gender;
        this.major=major;
        result=result;
    }
    addResult(results:Result){
        this.result.push(results); 
    }
}
class Result{
    private score:number;
    private topic: Topic;
    constructor(score:number,topic:Topic){
        this.score=score;
        this.topic=topic;
    }
}
let result = new Result(10,Topic.Javascript)
let studetName= new Student('soching',Genders.Male,Major.Web,[result]);
console.log(studetName);
