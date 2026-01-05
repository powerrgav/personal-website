import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-testercomp',
  standalone:true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './testercomp.html',
  styleUrl: './testercomp.css',
})
export class Testercomp {

}
