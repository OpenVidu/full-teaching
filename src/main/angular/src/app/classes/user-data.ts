export class UserData {

    public name: string;
    public isTeacher: boolean;
    public color: string;
    public picture: string = '';
    public interventionRequired = false;
    public accessGranted = false;

    constructor(name: string, isTeacher: boolean, color: string) {
        this.name = name;
        this.isTeacher = isTeacher;
        this.color = color;
    }

}