



export class ApplicationExcptions extends Error {
    constructor (message:string,public status:number , cause?:unknown){
super(message,{cause})
this.name=this.constructor.name
    }

}

export class BadRequestExcption extends ApplicationExcptions{
    constructor(message:string,cause?:unknown){
        super(message,400,{cause})
    }

}


export class ConflictExcption extends ApplicationExcptions{
    constructor(message:string,cause?:unknown){
        super(message,409,{cause})
    }

}


export class NotFoundtExcption extends ApplicationExcptions{
    constructor(message:string,cause?:unknown){
        super(message,404,{cause})
    }

}