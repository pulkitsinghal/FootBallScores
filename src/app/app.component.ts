import { Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('button') el:ElementRef;
  loading:boolean = true;

  constructor(private router : Router){

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

  }

   // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log("Here");
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => this.loading = false,2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }



  

  ngAfterViewInit() {
      $(this.el.nativeElement).sideNav();
  }

}
