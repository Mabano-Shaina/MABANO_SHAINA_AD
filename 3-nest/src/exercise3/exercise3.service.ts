import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
    helloWorld(name:string){
        return "Good Day Sir Dan! I'm "+name;
    }

    loopsTriangle(height: number){
        for (var i = 1; i <= height; i++){
            var string = '';
            var j = i;
            while (j) {
                string += '*';
                j--;
            }
            console.log(string);
        }
        return;
    }
}