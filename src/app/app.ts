import { Component, signal } from '@angular/core';
import { Main } from './main/main';
import { Header } from './header/header';



/**
 *  This is an early stage of the site's development
 * I want to have the header and subheader text animate onto the page upon page load [done]
 * I want to have a picture of myself under the title and subtitle [done]
 * I want to have some buttons that link to my github, one to linkedin, and potentially another that links to a blog [done, but not blog]
 * I want to be able to scroll down and have the text and image animate away
 * On scroll down, animate image of me in Barcelona or Paris
 * Provides a detailed about me section, starting off with language skills (hence the picture)
 */
@Component({
  selector: 'app-root',
  imports: [Main, Header],
  template: `
            <app-header />
            <main>
              <app-main />
            </main>
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
