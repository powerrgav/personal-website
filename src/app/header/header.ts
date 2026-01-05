import { Component } from '@angular/core';
import { App } from '../app';
import { Testercomp } from '../testercomp/testercomp';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
