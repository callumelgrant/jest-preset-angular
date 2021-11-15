import { Component, OnInit } from '@angular/core';
import { FooService } from '@services/foo.service';
import { deburr } from 'lodash-es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'example-app-v13';

  constructor(private fooService: FooService) {
    const test = deburr('1234');
  }

  ngOnInit(): void {
    this.fooService.getFoo();
  }
}
