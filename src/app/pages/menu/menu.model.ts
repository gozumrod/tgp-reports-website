export class Menu {
    public menuTitle: string;
    public menuDescription: string;
    public menuStepImage: string; 

    constructor(menuTitle: string, menuDescription: string, menuStepImage: string){
        this.menuTitle = menuTitle;
        this.menuDescription = menuDescription;
        this.menuStepImage = menuStepImage;
    } 
}