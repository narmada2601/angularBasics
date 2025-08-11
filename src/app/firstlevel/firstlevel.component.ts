import { Component } from '@angular/core';

@Component({
  selector: 'app-firstlevel',
  templateUrl: './firstlevel.component.html',
  styleUrls: ['./firstlevel.component.css']
})
export class FirstlevelComponent {
title='angular introduction';
classdate='05-08-2025';
getStudentName()
{
  return 'narmada';
}
}
