export function setLocalStorage(name:string, data:any, expires:any){
        if(typeof expires == null){
            expires = (12*60*60);
        }else{
            expires = Math.abs(expires);
        };

        let now = Date.now();
        let schedule = now+expires*1000;
        try{
            if(typeof data == 'string' || 'number'){
                window.localStorage.setItem(name, data);
            }else{
                window.localStorage.setItem(name, JSON.stringify(data));
            }
            window.localStorage.setItem(`${name}expiresIn`, schedule.toString(10));
            return true;
        }catch(e){
            console.log(`error message => ${e}`);
            return false;
        }
    }
export function getItemFromStorage(name:string){
    let item: any = window.localStorage.getItem(name);
    JSON.parse(item);
    return item;
}
