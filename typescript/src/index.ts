

type user={
    name:string,
    rollno:number,
    isactive?:boolean
}

function Call(data :user):{} {
    return {
        name:data.name,
        rollno:data.rollno,
        isactive:data.isactive}
}

console.log(Call({name:"Rahul",rollno:1}));
