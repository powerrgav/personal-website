import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './main/main';



/**
 *  This is an early stage of the site's development
 * I want to have the header and subheader text animate onto the page upon page load [done]
 * I want to have a picture of myself animate onto the screen after the header and subheader text
 * I want to have some buttons that link to my github, one to linkedin, and potentially another that links to a blog
 * I want to be able to scroll down and have the text and image animate away
 * On scroll down, animate image of me in Barcelona or Paris
 * Provides a detailed about me section, starting off with language skills (hence the picture)
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main],
  template: `
            <div class="fullscreenContainer" id="fullscreenContainer"><!--Begin fullscreenContainer div-->
              <div id="titleContainer"><!--Begin titleContainer div-->
                <p class="headerText">Hi, I'm Gavin.</p>
                <p class="subHeaderText">I am an Informatics student at Indiana University, graduating in May 2026.</p>
                <p class="subHeaderText">This website hosts some of my work and a little bit about me!<p>
                <p class="subHeaderText">No AI was used in the creation of this website.</p>
              </div> <!--End titleContainer div-->
              
              <div id="links" class="links"><!--Begin links div-->
                <a href="https://github.com/powerrgav">Github</a> <!--Replace with image-->
                <a href="https://www.linkedin.com/in/gavin-r-power">LinkedIn</a><!--Replace with image-->
              </div><!--End links div-->
            
            </div><!--End fullscreenContainer div-->
            `,
  styleUrl: './app.css'
})


export class App {

}
