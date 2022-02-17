import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-ng-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  testResults$: Observable<any> | undefined;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    const col = collection(
      this.firestore,
      'test-previous-ng-major-version-cold'
    );
    this.testResults$ = collectionData(col, { idField: 'timeCreated' });
  }
}
