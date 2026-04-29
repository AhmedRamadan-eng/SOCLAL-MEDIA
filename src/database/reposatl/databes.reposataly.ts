import { HydratedDocument, Model,  PopulateOptions } from "mongoose";
import { IUser } from "../../common/typs/user.typs";




export class DatabasRepository<TRawDocs>{

constructor (private model:Model<TRawDocs>) {
this.model=model
}

create(data: Partial<TRawDocs>): Promise<HydratedDocument<TRawDocs>> {
    return this.model.create(data)
}


findOne(
    filter: Partial<TRawDocs>, // ده الشرط اللي هندور بيه في الداتا بيز (زي email أو id)
    select?: string | Record<string,0|1>, // تحديد الحقول اللي عايزها ترجع (مثلاً "name email" أو {password:0})
    populate?: PopulateOptions | PopulateOptions[] // لو فيه علاقات (refs) عايز تجيبها مع الداتا
){

    // بيطبع قيمة select عشان تتأكد جايالك بإيه (debug)
    console.log(select);

    // بيبدأ يعمل query على MongoDB يدور على أول document مطابق للـ filter
    // لسه متنفذش فعليًا (ده Query object)
    let docs = this.model.findOne(filter)

    // لو فيه select
    if(select){
        // بيحدد الحقول اللي هترجع من الداتا
        docs = docs.select(select)
    }

    // لو فيه populate
    if(populate){
        // بيجيب الداتا المرتبطة (relations) بدل ما يرجع ID بس
        docs = docs.populate(populate)
    }

    // بيرجع الـ query
    // التنفيذ الفعلي بيحصل لما تستخدم await
    return docs

}









}



