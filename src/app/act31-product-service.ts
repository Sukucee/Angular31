import { Injectable } from "@angular/core";
import { Product } from "./act31-product/act31-model";

@Injectable({
providedIn: "root", 
})
export class ProductService{
    private toys: Product[]=[
        {
            id: 1,
            name: 'Doll House',
            details:'A simple barbie doll house',
            img:'dollhouse.jpg',
            price: 1000
        },
        {
            id: 2,
            name: 'Chucky Doll',
            details:'A Doll that could unalive you.',
            img:'Chuckyy.jpg',
            price: 7000
        },
        {
            id: 3,
            name: 'Rose Toy',
            details:'A very useful toy, good for self satisfaction',
            img:'rosetoy.jpg',
            price: 100
        },
        {
            id: 4,
            name: 'Sexy Toy',
            details:'Dont have a girlfriend? Go get this product!',
            img:'Sexydoll.png',
            price: 3000
        },
        {
            id: 5,
            name: 'Lip stick',
            details:'A lipstick for your other lips',
            img:'lipstick.jpg',
            price: 500
        },
        {
            id: 6,
            name: 'Paper Doll',
            details:'Not your typical paper doll',
            img:'Paper_Doll.png',
            price: 300
        },
        {
            id: 7,
            name: 'Toy Phone',
            details:'Ayeheyhayahy Im your little butterfly',
            img:'phone.jpg',
            price: 100
        },
        {
            id: 8,
            name: 'Silicone Doll',
            details:'Cute silicone doll with curse',
            img:'siliconedoll.jpg',
            price: 1200
        },
        {
            id: 9,
            name: 'Spooky Doll',
            details:'Ancient doll from my grandmas attic',
            img:'spookydoll.jpg',
            price: 1500
        },
        {
            id: 10,
            name: 'Ugly Doll',
            details:'Doll that will match your face.',
            img:'uglydoll.jpg',
            price: 800
        }
    ];

    getToys():Product[]{
        return this.toys;
    }
}