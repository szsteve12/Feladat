import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit{

  public coolNumbers: Array<number> = [];

  taskOne(numbers: string){
    let numberList = numbers.split(" ");
    let R = Number(numberList.at(0));
    let K = Number(numberList.at(1));

    for (let i = 1; i < R+1; i++) {
      let coolnessOfANumber = coolnessCounter(i.toString(2));
      if(coolnessOfANumber != 0 && coolnessOfANumber>=K){
        this.coolNumbers.push(i);
      }
    }
  }

  ngOnInit(): void {
    this.taskOne("21 2");
  }

}

function coolnessCounter(binary:string){
  let coolnessCounter = 0;

  if(binary.length > 3){
    let first = Array.from(binary)[0];
    let second = Array.from(binary)[1];
    let third = Array.from(binary)[2];

    let counter = 3;

    do{
      let threeNumbers = first.concat(second,third);
      if(threeNumbers == "101"){
        coolnessCounter++;
      }
      first = second;
      second = third;
      third = Array.from(binary)[counter];
      counter++;

    }while(counter-1!=binary.length)
  }

  return coolnessCounter;
}



