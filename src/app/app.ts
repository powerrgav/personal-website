import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from "@angular/router";



/**
 *  This is an early stage of the site's development
 * I want to have the header and subheader text animate onto the page upon page load [done]
 * I want to have a picture of myself under the title and subtitle [done]
 * I want to have some buttons that link to my github, one to linkedin, and potentially another that links to a blog [done, but not blog]
 * I want to be able to scroll down and have the text and image animate away
 * On scroll down, animate image of me in Barcelona or Paris
 * Provides a detailed about me section, starting off with language skills (hence the picture)[done]
 */
@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
            <app-header />
            <router-outlet> </router-outlet>
            `,
  styles:
  `
    [
      main{
        padding:16px;
      }
    ]
  `,
})


export class App {

}
