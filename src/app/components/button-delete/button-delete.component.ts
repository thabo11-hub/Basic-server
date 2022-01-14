import { Component, OnInit, Input } from '@angular/core';
// import { TutorialService } from 'src/app/services/tutorial.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent implements OnInit {

  // @Input() viewMode = false;

  // @Input() currentTutorial: Tutorial = {
  //   title: '',
  //   description: '',
  //   published: false
  // };

  constructor(){}
    // private tutorialService: TutorialService,
    // private route: ActivatedRoute,
    // private router: Router) { }

  ngOnInit(): void {
    // if (!this.viewMode) {
    //   //this.message = '';
    //   this.getTutorial(this.route.snapshot.params["id"]);
    // }
  }

  // getTutorial(id: string): void {
  //   this.tutorialService.get(id)
  //     .subscribe({
  //       next: (data) => {
  //         this.currentTutorial = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // deleteTutorial(): void {
  //   this.tutorialService.delete(this.currentTutorial.id)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.router.navigate(['/tutorials']);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

}
