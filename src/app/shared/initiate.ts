import { Component, OnInit } from '@angular/core';
@Component({
  template: ''
})
export abstract class Initiate implements OnInit {

  abstract classWrapper(): void;
  ngOnInit(): void {
    this.classWrapper();
  }

}
