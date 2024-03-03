let h1=document.createElement('h1');
h1.classList.add('display-1','fw-bold','font-family-sans-serif','mt-5','d-flex','justify-content-center','align-items-center')
document.body.append(h1)

let callfunction=(callbackfunc) =>{

    callbackfunc();
}
let callbackfunc=()=> {
  setTimeout(()=>{
    h1.innerText='10'
    setTimeout(()=>{
        h1.innerText='9'
        setTimeout(()=>{
            h1.innerText='8'
            setTimeout(()=>{
                h1.innerText='7'
                setTimeout(()=>{
                    h1.innerText='6'
                    setTimeout(()=>{
                        h1.innerText='5'
                        setTimeout(()=>{
                            h1.innerText='4'
                            setTimeout(()=>{
                                h1.innerText='3'
                                setTimeout(()=>{
                                    h1.innerText='2'
                                    setTimeout(()=>{
                                        h1.innerText='1'
                                        setTimeout(()=>{

                                            h1.innerText='Happy Independence Day'

                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
  },1000)
}
callfunction(callbackfunc);