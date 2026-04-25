import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appHilight]',
    standalone: false

})
export class HilightDirective{
    constructor(private ele : ElementRef<HTMLParagraphElement>){
        console.log(ele)
    }

    @HostListener("mouseenter")
    onMouseEnter(){
        this.ele.nativeElement.style.background = 'black',
        this.ele.nativeElement.style.color = 'white';
    }
    @HostListener("mouseleave")
    onMouseLeave(){
        this.ele.nativeElement.style.backgroundColor = 'transparent',
        this.ele.nativeElement.style.color = 'black';
    }
}