const x =() => {
    return new Promise((res,rej)=>{
        setTimeout(()=> rej("from x resolved"),1000);
    });
};

const y = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>rej("from y resolved"),3000);
    });
};

const z= () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>res("from y resolved"),5000);
    });
};

Promise.all([x(),y(),z()])
.then(result => console.log('sucess',result))
.catch(error => console.log('error'))

Promise.allSettled([x(),y(),z()])
.then(result => console.log('sucess',result))
.catch(error => console.log('error'))

Promise.race([x(), y(), z()])
.then(result => console.log('sucess',result))
.catch(error => console.log('error'))

