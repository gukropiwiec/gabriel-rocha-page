import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            740: {
                items: 3,
            },
            940: {
                items: 4,
            },
        },
        nav: false,
        margin: 15,
    };

    fotos = [
        'assets/images/consultorio_1.jpg',
        'assets/images/consultorio_2.jpeg',
        'assets/images/consultorio_3.jpeg',
        'assets/images/consultorio_4.jpeg',
        'assets/images/consultorio_5.jpeg',
    ];

    constructor() {}

    ngOnInit(): void {}
}
