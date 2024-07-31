class computeSararies {
    VueJs:number;
    Nodejs:number;
    OOp:string;
    constructor(VueJs:number,NodeJs:number,oop:string){
        this.VueJs=VueJs;
        this.Nodejs=NodeJs;
        this.OOp=oop;
    }
    //create function
    List():string{
        if (this.VueJs <= 1 && this.Nodejs <= 1 && this.OOp == "No"  ){
            return 'Hello salary 250$';
        }
        
    }
}
//create object
let listAlumni = new computeSararies(1,1,"No" );
console.log(listAlumni.List());
