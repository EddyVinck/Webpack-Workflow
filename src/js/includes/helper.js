// making a method/function static allows you to use it without
// instantiating an object of that class.
export class Helper {
    static logTwice(message){
        console.log(message);
        console.log(message);
    }
}