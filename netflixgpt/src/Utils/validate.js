export const checkvaliddata = (name,email, password) => {

    const isnamevalid = /^[0-9A-Za-z]{6,16}$/.test(name);
    const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispasswordvalid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);

     if(!isnamevalid) return "name is not valid";
     if(!isemailvalid) return "email is not valid";
     if(ispasswordvalid) return "password is not valid";

     return null;

}