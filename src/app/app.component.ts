import { CompetitionService } from './shared/competition.service';
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
  @ViewChild('modal') modal:ElementRef;
  @ViewChild('modal2') modal2:ElementRef;
  loading:boolean = true;

  constructor(private router : Router, private service: CompetitionService){

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    this.service.incrementPageCount().then(data => this.service.changeCount(data));

  }

   // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => this.loading = false,1000);
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
      $(this.modal.nativeElement).modal();
      $(this.modal2.nativeElement).modal();
      
  }

}
